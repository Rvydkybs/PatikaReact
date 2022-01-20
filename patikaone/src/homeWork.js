import axios from "axios";
async function myFonk(id){
    //girilen id değerinde kullanıcı almak için
       if(id==1){
             const {data:user}= await axios("https://jsonplaceholder.typicode.com/users/1").then("https://jsonplaceholder.typicode.com/posts/1");
             console.log(user);
         }
       else if(id==2){
            const {data:user}= await axios("https://jsonplaceholder.typicode.com/users/2").then("https://jsonplaceholder.typicode.com/posts/2");
            console.log(user);
        }
        else  if(id==3){
            const {data:user}= await axios("https://jsonplaceholder.typicode.com/users/3").then("https://jsonplaceholder.typicode.com/posts/3");
            console.log(user);
        }
        else  if(id==4){
            const {data:user}= await axios("https://jsonplaceholder.typicode.com/users/4").then("https://jsonplaceholder.typicode.com/posts/4");
            console.log(user);
        }
        else  if(id==5){
            const {data:user}= await axios("https://jsonplaceholder.typicode.com/users/5").then("https://jsonplaceholder.typicode.com/posts/5");
            console.log(user);
        }
        else  if(id==6){
            const {data:user}= await axios("https://jsonplaceholder.typicode.com/users/6").then("https://jsonplaceholder.typicode.com/posts/6");
            console.log(user);
        }
        else  if(id==7){
            const {data:user}= await axios("https://jsonplaceholder.typicode.com/users/7").then("https://jsonplaceholder.typicode.com/posts/7");
            console.log(user);
        }
        else  if(id==8){
            const {data:user}= await axios("https://jsonplaceholder.typicode.com/users/8").then("https://jsonplaceholder.typicode.com/posts/8");
            console.log(user);
        }
        else  if(id==9){
            const {data:user}= await axios("https://jsonplaceholder.typicode.com/users/9").then("https://jsonplaceholder.typicode.com/posts/9");
            console.log(user);
        }
        else  if(id==10){
            const {data:user}= await axios("https://jsonplaceholder.typicode.com/users/10").then("https://jsonplaceholder.typicode.com/posts/10");
            console.log(user);
        }
        
       
}
export default myFonk;








