import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>Oops! Página não encontrada!</h1>
      <h2 style={ { marginTop: '25px'}}>Desculpe, a página que você está procurando não existe =/</h2>
      <Link to="/">
        <h3 style={{ marginTop: '30px' }}>Voltar à página inicial</h3>
      </Link>
    </>
  )
}

export default NotFound;