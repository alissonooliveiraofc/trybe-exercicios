import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h2>Home Page</h2>
      <Link to="/coffe">Nossos cafés</Link>
    </main>
  )
}

export default Home;