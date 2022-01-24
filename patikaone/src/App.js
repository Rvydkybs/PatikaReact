import logo from './logo.svg';
import './App.css';
import myFonk from './homeWork';//import edilen fonksiyon
import User from './components/User'; 

const name="rüveyda";
const isLoogedIn=false;
const notLogin=false;
function App() {
  const friends=[
    {
      id:1,
      name:"ahmet"
    },
    {
      id:2,
      name:"tayfun"
    },
    {
      id:3,
      name:"selena"
    }
  ]
  return (
   <>
   <User name="ahmet" surname={"seven"} isLoogedIn="false" friends={friends}
   adress={{
     title:"başakşehir",
     zip:34000
   }}
   ></User>
      <h1>{name}</h1>
      <h1>{`my name is ${name}`}</h1>
      {isLoogedIn && " giriş yaptı"} <br></br>
      {!notLogin&& "giriş yapılmadı"}
      <br></br>
      {isLoogedIn?"my name is rüveyda":!notLogin&& "giriş yapılmadı"} 
   </>
  );
}
//myFonk(5);
export default App;
