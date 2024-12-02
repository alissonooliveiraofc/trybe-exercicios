function Button() {
  
  function handleClick() {
    alert('Meu primeiro event handler com React')
  }

  return (
    <button onClick={handleClick}>Cliquem em min</button>
  )
}

export default Button