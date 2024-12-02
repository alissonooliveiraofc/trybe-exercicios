type ButtonProps = {
  onClick: () => void;
};

function Button({onClick}: ButtonProps) {

  return (
    <button onClick={onClick}>Cliquem em min</button>
  )
}

export default Button