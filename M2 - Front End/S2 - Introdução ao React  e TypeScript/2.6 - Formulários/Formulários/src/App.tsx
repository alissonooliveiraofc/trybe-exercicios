import { useState } from 'react';
import './App.css'

function App() {
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    schooling: 'Médio',
    resume: '',
  });

  const [termos, setTermos] = useState(false); //estado dos termos
  const [error, setError] = useState(false); // estado do erro

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [name]: value,
  }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (termos) {
      resetForm();
      setTermos(false);
      setError(false);
      alert(
        `Nome: ${formInfo.name}\nemail: ${formInfo.email}\nEscolaridade: ${formInfo.schooling}\nExperiências: ${formInfo.resume}`
      );
      resetForm();
    } else {
      setError(true);
    }
  }

  function resetForm() {
    setFormInfo({
      name: '',
      email: '',
      schooling: 'Médio',
      resume: '',
    })
  }  
  
  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Nome
          <input
            required
            value={formInfo.name}
            onChange={ handleChange }
            name='name'
          />
        </label>
        <label>
          E-mail
          <input
            required
            name='email'
            value={formInfo.email} 
            onChange={handleChange}
          />
        </label>
        <label>
          Escolaridade
          <select
            value={formInfo.schooling} 
            onChange={ handleChange }
            name='schooling'
          >
            <option value="Médio">Médio</option>
            <option value="Superior">Superior</option>
            <option value="Pós-graduação">Pós-graduação</option>
          </select>
        </label>
        <label>
          Resumo das experiências
          <textarea
            maxLength={500} 
            style={{ width: '421px', height: '150px', backgroundColor: 'black', padding: '10px' }}
            value={formInfo.resume}
            onChange={handleChange}
            name='resume'
          />
        </label>

        <label className='terms'>
          Aceito os termos e condições
        <input
          type="checkbox"
          checked={termos}
          onChange={() => setTermos((prevTerms) => !prevTerms)}
          />
        </label>
        <button>Enviar</button>
        {error && (
        <h4 style={{color: 'red'}}>
          Você precisa aceitar os termos e condições para poder enviar o
          currículo!
        </h4>
      )}
      </form>
    </>
  )
}

export default App
