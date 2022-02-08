import './App.css';
import React from "react";
import { useEffect,useState } from 'react';
import axios from "axios";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
          {/* boş / gördüğünde her sayfada home çalıştırmaması için exact */}
      <Switch>
      <Route path="/" exact> 
          <Home />
        </Route>
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users}/>
        <Route path="/user/:id" component={User}/>
      </Switch>
    </div>
  </Router>
);
}
function User() {
  const {id}=useParams();
  const[user,setUser]=useState([]);
  useEffect(()=>{//girilen id değerindeki kullanıcı bilgilerini almak
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)//ne id geleiyorsa onu yaz
    .then((response)=>setUser(response.data));
  },[id])
  return(
    <>
    <h3>user deatil:</h3>
    <code>
      {JSON.stringify(user)}
    </code><br></br>
    <Link to={`/user/${parseInt(id)+1}`}>Next User</Link>
    </>
  )
}
function Home() {
  
return <h2>Home</h2>;
}

function About() {
return <h2>About</h2>;
}

function Users() {
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setUsers(res.data));
  },[])
return (
  <>
<h3>users:</h3>
    <ul>
      {users.map((user)=>(
        <li key={user.id}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
    </>
);
  
}

export default App;
