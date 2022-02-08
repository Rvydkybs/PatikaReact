import {useState} from "react";

const money={usd:1,euro:1,jpy:1,chf:1,gbp:1};

function Convert() {
    //const[number,setNumber]=useState();
    money.euro=money.usd*0.88;
    money.jpy=money.usd*115.59;
    money.chf=money.usd*0.92;
    money.gbp=money.usd*0.74;
    
};
 function updateInputValue(event) {
    const value = event.target.value;
};
function Hesapla() {
    //gbp:ingiliz  chf:isviçre
    return(
        <div>

        <h1>Convert Money</h1>
        <h3>From:</h3>
        <input placeholder="Enter your amount" onChange={updateInputValue}></input>
        <select>
            <option value={money.usd}>usd</option>
            <option value={money.euro}>euro</option>
            <option value={money.jpy}>jpy</option>
            <option value={money.chf}>chf</option>
            <option value={money.gbp}>gbp</option> 
        </select><br></br>
        <h3>To:</h3>
        <input type="text" placeholder="Your amount"></input>
        <select>
             <option value={money.usd}>usd</option>
            <option value={money.euro}>euro</option>
            <option value={money.jpy}>jpy</option>
            <option value={money.chf}>chf</option>
            <option value={money.gbp}>gbp</option> 
        </select><br></br><br></br>
        <button onClick={Convert} >CONVERT</button>
        </div>
    );
}
export default Hesapla;