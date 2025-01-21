import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    navigate('/cafes');
  };

  return (
    <main>
      <h2>Home Page</h2>
      <button onClick={(event) => handleClick(event)}>Nossos Cafés</button>
      {/* <Link to="/coffe">Nossos cafés</Link> */}
    </main>
  )
}

export default Home;