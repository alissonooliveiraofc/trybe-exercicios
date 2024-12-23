import { useState } from 'react';

export type FormProps = {
  newPhrase: (phrase: string) => void;
};

function Form({ newPhrase }: FormProps) {
  const [phrase, setPhrase] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (phrase) {
      newPhrase(phrase);
      setPhrase('');
    }
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        placeholder="Digite uma frase"
        value={phrase}
        onChange={({ target }) => setPhrase(target.value)}
      />
      <button>Adicionar frase</button>
    </form>
  );
}

export default Form;