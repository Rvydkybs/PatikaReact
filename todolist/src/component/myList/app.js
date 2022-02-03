import { useState } from "react/cjs/react.development";
import './app.css'
function App() {

    const[done,setDone]=useState(0);
    const[actives,setActives]=useState(3);
    const[many,setMany]=useState();
    var box1=document.querySelector("#box1");
    var box2=document.querySelector("#box2");
    var box3=document.querySelector("#box3");

    const clicked=()=>{
        if(box1.checked||box2.checked||box3.checked==true)
            setDone(done+1);
        
    //  var myArray=[box1,box2,box3];
    //  myArray.map((i)=>
    //      {
    //              if (i==false) {
    //               console.log(setActives(actives+1));
    //             }
    //          });
    }
    return(

        <div className="defaultDiv">
            <ul>
                <li>
                    <input type="checkbox" id="box1" onChange={clicked}/>
                        <label className="strikethrough" >
                        Learn JavaScript
                        </label>
                </li>
               <li>
                    <input type="checkbox" id="box2" onChange={clicked}/>
                        <label  className="strikethrough" >
                        Read Book
                        </label>
               </li>
                <li>
                    <input type="checkbox" id="box3" onChange={clicked}/>
                        <label  className="strikethrough">
                        Work React
                        </label>
                       
                </li>
                
            </ul>
            <div className="completed" > Completed: {done}</div>
            <div className="actives"> Active: {actives}</div>
        </div>
    )
}
export default App;