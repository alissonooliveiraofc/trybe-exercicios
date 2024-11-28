import { CityInfoProps } from "../types";

function Card({ cityInfo }: CityInfoProps) {
  const { city, country, imageUrl, visited } = cityInfo;
  
  return (
    <div style={{ border: '1px solid white', borderRadius: 10 }} className="card">
      <img style={{width: 350}} src={ imageUrl } alt={ city } />
      <div>
      <h2>{city}</h2>
      <h3>{country}</h3>
      {visited ? <p>Já Fui!</p> : <p className="red">Não Fui.</p>}
      </div>
    </div>
  )
}

export default Card;