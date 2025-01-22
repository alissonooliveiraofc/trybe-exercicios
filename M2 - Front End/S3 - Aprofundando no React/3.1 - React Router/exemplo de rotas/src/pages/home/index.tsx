import { useNavigate } from "react-router-dom";
import './home.css';

function Home() {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    navigate('/cafes');
  };

  return (
    <div className="home-page">
      <div className="home-title">
        <h1>Coffeeteria</h1>
        <h2>Com o passar dos cafés, os anos ficam melhores</h2>
      </div>
      <hr />
      <main>
        <h2>Home Page</h2>
        <button onClick={(event) => handleClick(event)}>Nossos Cafés</button>
        {/* <Link to="/coffe">Nossos cafés</Link> */}
      </main>
    </div>
    
  )
}

export default Home;