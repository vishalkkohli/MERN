
const tableid=document.getElementById("table");
const fetchData=async()=>{
const dataJSON=await fetch("https://api.github.com/users")
const data=await dataJSON.json();
let displayinfo="<table border-'1'>";
displayinfo+="<tr>";
displayinfo+="<th>id</th><th>name</th><th>photo</th>";
displayinfo+="</tr>";
for (person of data){
    displayinfo+="<tr>";
    displayinfo+=`<td>${person.id}</td>
                  <td>${person.login}</td>
                  <td><img src=${person.avatar_url} width=${200}height=${200}></td>`;
    displayinfo+="</tr>";
}


displayinfo="</table>";
tableid.innerHTML=displayinfo;
}
fetchData();

// fetch("https://api.github.com/users")
// .then(datajson=>datajson.json())
// .then(data=>{
//     for(person of data){

//     }
// })