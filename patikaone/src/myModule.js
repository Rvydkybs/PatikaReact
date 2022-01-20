// import axios from "axios";
// setTimeout(()=>{
// console.log("heloo");
// },2000)//2000 ms sonra çalışsın

// const fonk1=(param)=>{
//     param();
// }

// fonk1(()=>{
//     console.log("rüvrüv");
// })

// async function getData() {
//     //aixos react tarafında,fetch node tarafında yazılıyor
//     const users= await (await fetch("https://jsonplaceholder.typicode.com/users")).json();//await koymazsak bu satır atalnır.burda beklenmesini sağlıyoruz-veriyi json formatında alıcaz
//     const {data:posts}= await  axios("https://jsonplaceholder.typicode.com/posts");//axios data objesi döner
//     console.log(users);
//     console.log(posts);
// }
// getData();
// const getComments=()=>{
//     return new Promise((resolve,reject)=>{//resolve=kod doğru çalıştı-reject=kod hatalı çalıştı
        
//         resolve("comments");
//     });
// }

// getComments.then((data)=>console.log(data)).catch((e)=>console.log(e));//resolve olduğunda then çalışsın-reject olduğunda catch çalışsın


