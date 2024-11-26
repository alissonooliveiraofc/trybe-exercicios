import Title from "./Title";
import ModuleDetails from "./ModuleDetails";
import { calculateAge } from "../utils/age";

function HelloWorld() {
  const name = 'Alisson Oliveira';
  const birth = '21/06/1995';
  const age = calculateAge(birth);

  return (
    <>
      <h1 style={{color: 'green'}}>{name}</h1>
      <p>{`Idade: ${age}`}</p>
      <Title />
      <ModuleDetails />
    </>
)}

export default HelloWorld;