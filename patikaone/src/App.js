import logo from './logo.svg';
import './App.css';
import myFonk from './homeWork';//import edilen fonksiyon

const name="rüveyda";
const isLoogedIn=false;
const notLogin=false;
function App() {
  return (
   <>
      <h1>{name}</h1>
      <h1>{`my name is ${name}`}</h1>
      {isLoogedIn && " giriş yaptı"} <br></br>
      {!notLogin&& "giriş yapılmadı"}
      <br></br>
      {isLoogedIn?"my name is rüveyda":!notLogin&& "giriş yapılmadı"} 
   </>
  );
}
myFonk(5);
export default App;
