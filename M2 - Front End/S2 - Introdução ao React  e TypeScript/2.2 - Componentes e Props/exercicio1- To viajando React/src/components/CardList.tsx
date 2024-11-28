import Card from "./Card"

const data = {
  city: 'Belo Horizonte',
  country: 'Brazil',
  imageUrl: './src/assets/image.png',
  visited: true,
}

const data2 = {
  city: 'Gramado',
  country: 'Brazil',
  imageUrl: './src/assets/image copy.png',
  visited: true,
}

const data3 = {
  city: 'New York',
  country: 'United States',
  imageUrl: './src/assets/image copy 2.png',
  visited: false,
}
function CardList() {
  return (
    <>
    <Card cityInfo={data} />
    <Card cityInfo={data2} />
    <Card cityInfo={data3} />
    </>
  )
}

export default CardList;