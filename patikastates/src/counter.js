
import {useState} from "react";

function Mycalculate(){
const[count,setCount]=useState(0);
const[form,setForm]=useState({name:"",surname:""});
const onChange=(event)=>{
    //setForm(event.target.value);
   setForm({...form,[event.target.name]:event.target.value});
            //önceki formu koru-name değerine girilen value'ü ata
}
return(
    <>
        <h1>{count}</h1>   
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <hr></hr>
        <h2>Enter your name</h2><br></br>
        <input name="name" value={form.name} onChange={onChange}></input><br></br>

        <h2>Enter your surname</h2><br></br>
        <input name="surname" value={form.surname} onChange={onChange}></input>
        <br></br>
        {form.name} {form.surname}
    </>
)

}
export default Mycalculate;



