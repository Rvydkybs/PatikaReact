import {useState} from "react";
function List({concats}) {
    const[filterText,setFilterText]=useState("");
    const filtered=concats.filter((item)=>{//arrayin her bir elemanı gelecek
        return Object.keys(item).some((key)=>
            item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLocaleLowerCase())
        );//item'in keylerini aldık
    });
    console.log(filtered);
    return(
        <>
        <input placeholder="Filter" value={filterText}
        onChange={(e)=>setFilterText(e.target.value)}></input>
        <ul>
            {filtered.map((concats,i)=>(<li key={i}>{concats.fullname}</li>))}
        </ul>
        
        </>
    )
}
export default List;