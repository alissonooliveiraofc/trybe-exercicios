import Greeting from './Greeting';

function Header() {
  const firstName = 'Miguel';
  const lastName = 'Silva';

  function luckyNumber() {
    return Math.floor(Math.random() * 60 + 1);
  }

  return (
    <>
      <Greeting />
    </>
  );
}

export default Header;
