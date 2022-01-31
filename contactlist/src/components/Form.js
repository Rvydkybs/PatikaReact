import {useState} from "react";

function Form({addConcats,concats}) {
    const[form,setForm]=useState({fullname:"",phone_number:""});
    const onChangeinput=(event)=>{
        setForm({...form,[event.target.name]:event.target.value});
    }
    const onSumbit=()=>{
        if(form.fullname===""||form.phone_number==="")
          {  return false;}

        addConcats([...concats,form]);
        console.log(form);
        setForm({fullname:"",phone_number:""});
    }
    return(
        <div>
            <div>
              <input name="fullname" 
              value={form.fullname}
              placeholder="Full Name"
              onChange={onChangeinput}></input>

            </div>
             <div>
                 <input name="phone_number" 
                 value={form.phone_number}
                 placeholder="Phone Number"
                 onChange={onChangeinput}></input>

             </div>  
           <div>
               <button onClick={onSumbit}>Add</button>
           </div>

        </div>



    )
}
export default Form;