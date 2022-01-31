import { useState } from "react";

function ContactList() {

    const[search,setSearch]=useState();
    const[fname,setFname]=useState();
    const[number,setNumber]=useState();
   
    const record=(event)=>{
         const user=event.target.value;
         return user;
     }
     const add=(param)=>{     
        param=this.user;
    }
    const searching=()=>{
       
     }
    return(
        <>
            <h2>Contact List</h2>
            <br></br>
            <input name="Filter" placeholder="filter" value={search} onChange={searching}></input>
            <br></br><br></br>
            <input name="Name" placeholder="name" value={fname} onChange={record}></input><br></br>
            <input name="Phone Number" placeholder="phone number" value={number} onChange={record}></input><br></br>
            <button onClick={add}>Add</button>   
        </>
    );
}
export default ContactList;