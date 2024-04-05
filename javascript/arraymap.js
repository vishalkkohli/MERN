let value=[1,2,3,4,5,6,7,8,9,10];
value.push(11);
console.log(value);
value.map(item=>console.log(`value of x 10 =${item*10}`));
let sumvalue=value.reduce((a,b)=>a+b);
console.log(`sum of array value=${sumvalue}`);
// triple equal to is used veru important because of single inverted comma string used == 0 result is 0 create
let evennum=value.filter(item=>item%2===0);
console.log(evennum);

