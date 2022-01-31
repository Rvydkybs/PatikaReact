import Form from './Form';
import {useState,useEffect} from "react";
import List from './List';
function Index() {
    const [concats,setConcats]=useState([
        {
            fullname:"mehmet",
        phone_number:"303900439"
        },
        {
            fullname:"ayşe",
            phone_number:"458603659"
        }
    ]);
    useEffect(()=>{

        console.log(concats);
    },[concats])

    return(
        <>
            <List concats={concats}/>
            <Form addConcats={setConcats} concats={concats}/>
        </>
    )
}
export default Index;