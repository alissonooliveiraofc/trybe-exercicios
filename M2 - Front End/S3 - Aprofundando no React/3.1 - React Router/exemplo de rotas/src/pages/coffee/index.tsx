import { useParams, Link } from 'react-router-dom';
import { coffeeList } from '../../data';
import './coffe.css'

function Coffee() {
  const params = useParams();
  const currentCoffee = coffeeList.find((cafe) => cafe.slug === params.cafe);

  if (!currentCoffee) {
    return (
      <div className="not-found-coffee">
        <h1>Oops! Esse café não está na nossa lista</h1>
        <h2>Acesse a <Link to="/cafes">página de cafés</Link> e selecione um de nossos produtos</h2>
      </div>
    )
  }

return (
  <div className="coffee-page">
    <h1>{ currentCoffee.title }</h1>
    <p>{ currentCoffee.description }</p>
    <div>
      <h2>Ingredientes</h2>
      <ul>
        {
          currentCoffee.ingredients.map((ingredient) => <li key={ ingredient }>{ ingredient }</li>)
        }
      </ul>
    </div>
    <img src={ currentCoffee.image } alt={ currentCoffee.title } />
  </div>
)
}

export default Coffee;
