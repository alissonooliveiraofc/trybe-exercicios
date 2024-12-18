import { useState } from 'react';
import './App.css'

function App() {
  const [name, setName] = useState(''); //estado do nome
  const [email, setEmail] = useState(''); //estado do email
  const [schooling, setSchooling] = useState('Médio'); //estado da escolaridade
  const [resume, setResume] = useState(''); //estado do currículo

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    resetForm();
    alert(
    `Nome: ${name}\nemail: ${email}\nEscolaridade: ${schooling}\nExperiências: ${resume}`
  )};

  function resetForm() {
    setName('');
    setEmail('');
    setSchooling('Médio');
    setResume('');
  }

  console.log(name, email, schooling, resume);
  
  
  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Nome
          <input value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          E-mail
          <input value={email} onChange={(event) => setEmail(event.target.value)} />
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
            style={{ width: '300px', height: '150px', backgroundColor: 'black', padding: '10px' }}
            value={resume}
            onChange={({ target }) => setResume(target.value)}
          />
        </label>
        <button>Enviar</button>
      </form>
    </>
  )
}

export default App
