let studentinfo={
    rollno:1,
    name:"ravi kumar",
    course:"mca",
    college:"kiet",
    marks:[10,20,30,40],
    music:()=>console.log("play music"),
    play:function playfun(){console.log("play cricket")},
}
let arrayvalue=[studentinfo,studentinfo,studentinfo];
arrayvalue.forEach(item=>console.log(item.name));
console.log(studentinfo.music());
console.log(studentinfo.play());
console.log(studentinfo.marks);