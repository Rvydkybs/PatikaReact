import {useState} from 'react';
import './App.css';



function App() {
  const[name, setName]=useState("rüveyda");//state'in adı(name),değiştirelecek değişken setName,state'in parametresi rüveyda
  const [age,setAge]=useState(39434);
  const[friends,setFriend]=useState(["ark1","ark2"]);
  const[adress,setAdress]=useState({title:"adress type",name:"my home's adress"});
 
  return (
    <div className="App">

    <h1>SALUT {name}</h1>
    <h2>AGE={age}</h2>
    <button onClick={()=>setName("mehmet")}>Click here!</button>
    <button onClick={()=>setAge(0)}>Click here to change age!</button>
    <h2>{adress.title}</h2>
   <hr/>
   {
     friends.map((friend,i)=>(<div key={i}>{friend}</div>))
   }
   <button onClick={()=>setFriend([...friends,"ark3","ark4"])}>add new friend</button>
   
    </div>
  );
}

export default App;
