// let age=20;
// const info=new Promise((resolve,reject)=>{
// // do function as a parameter hota hai resolve,or reject
// if(age>=18){
//     resolve("you can vote");
// }else{
//     reject("you can not vote");
// }
// })
// // resolve ek predefined function hai yea then ma hi jayega fixed hai
// info.then(result=>console.log(result))
// .catch(error=>console.log(error));

let age=20;
const info=new Promise((resolve,reject)=>{
// do function as a parameter hota hai resolve,or reject
if(age>=18){
    resolve("you can vote");
}else{
    reject("you can not vote");
}
})
info.then(result=>console.log(result))
 .catch(error=>console.log(error));

const resultinfo=async ()=>{
    try{
        // await function ko chalana ka liya async function sa use karenga
        // compiler prr hold nahi hona hai
    let result=await info;
    console.log(result);
    }catch(error){
        console.log(error);
    }

}
resultinfo();