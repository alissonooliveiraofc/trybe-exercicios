import { Link } from "react-router-dom";
import './not-found.css';

function NotFound() {
  return (
    <div>
      <h1>Oops! Página não encontrada!</h1>

      <img style={ {width: '350px'}} src="https://eloarmarinho.com.br/img/icons/404.png" alt="404 Error Message" />

      <h2 style={ { marginTop: '50px'}}>Desculpe, a página que você está procurando não existe =/</h2>
      <Link to="/">
        <h3 style={{ marginTop: '30px' }}>Voltar à página inicial</h3>
      </Link>
    </div>
  )
}

export default NotFound;