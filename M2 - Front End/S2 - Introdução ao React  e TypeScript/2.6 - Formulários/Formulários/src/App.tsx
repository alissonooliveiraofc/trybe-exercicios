import { useState } from 'react';
import './App.css'

function App() {
  const [name, setName] = useState(''); //estado do nome
  const [email, setEmail] = useState(''); //estado do email
  const [schooling, setSchooling] = useState('Médio'); //estado da escolaridade
  const [resume, setResume] = useState(''); //estado do currículo
  const [termos, setTermos] = useState(false); //estado dos termos
  const [error, setError] = useState(false); // estado do erro

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (termos) {
      alert(
        `Nome: ${name}\nemail: ${email}\nEscolaridade: ${schooling}\nExperiências: ${resume}`
      );
      resetForm();
    } else {
      setError(true);
    }
  }

  function resetForm() {
    setName('');
    setEmail('');
    setSchooling('Médio');
    setResume('');
  }  
  
  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Nome
          <input required value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          E-mail
          <input required value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Escolaridade
          <select value={schooling} onChange={({ target }) => setSchooling(target.value)}>
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
            value={resume}
            onChange={({ target }) => setResume(target.value)}
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
