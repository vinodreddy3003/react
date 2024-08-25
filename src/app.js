function Getname(name){
    return name;
}
a=false;
b=true;
console.log(a||Getname("vinod"));
//literals
let c="vinod";
let d="reddy";
console.log(`${c} ${d}` );

const array =[1,2,3];
const[firstElement,SecondElement]=array;
console.log(firstElement,SecondElement)

const personName=[
    {
        names:"vinod",
        age:17,
        place:"usa",
    },
    {
        names:"person2",
        age:18,
        place:"usas",
    },
    {
        names:"person3",
        age:19,
        place:"usass",
    }
]
const getAllNames=personName.map((singlePerson,index)=>{
    console.log(singlePerson,index);
    return singlePerson.age
    
    
});
console.log(getAllNames);


