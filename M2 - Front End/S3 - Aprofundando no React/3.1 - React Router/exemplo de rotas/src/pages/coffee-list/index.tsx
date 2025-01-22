import { Link } from 'react-router-dom';
import { coffeeList } from '../../data';
import './coffe-list.css';

function CoffeeList() {
  return (
    <div className="list-page">
      <h1>Nossos cafés</h1>
      <main>
        <ul>
          {
            coffeeList.map((coffee) => (
              <Link to={ `/cafes/${coffee.slug}` } key={ coffee.id }>
                <li className='cafe'>{ coffee.title }</li>
              </Link>
            ))
          }
        </ul>
      </main>
    </div>
  )
}

export default CoffeeList;
