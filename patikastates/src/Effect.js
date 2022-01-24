import { useState ,useEffect} from "react";
const LifeCycle=()=>{

    const[number,setNumber]=useState(0);
    const[name,setName]=useState("hebele hübele");

    useEffect(()=>{
        console.log("component mount edildi")
         const interval=setInterval(()=>{
            setNumber((n)=>n+1);
        },1000);//her saniye değeri 1 arttır
        return ()=> clearInterval(interval);//ilgili component silindiğinde lifecycle 'ın devam etmesi için
    },[]);


    useEffect(()=>{
        console.log(" name state güncellendi")
    },[name]);

    useEffect(()=>{
        console.log("number state güncellendi")
    },[number])//[] koymanın amacı istediğimiz statelerdeki değişiklikleri yakalamak
    //boş koyarsak bütün state'lere bakar

    return(
        <>
        <h3>{number}</h3>
        <button onClick={()=>setNumber(number+1)}>Click</button>
        <button onClick={()=>setName()}>{name}</button>

        </>
    );
}
export default LifeCycle;