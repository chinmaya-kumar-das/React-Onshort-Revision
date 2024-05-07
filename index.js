let arr=[1,2,3,4,5,6,7];

let newArr=[];
let filteredArr=arr.map((val)=>{
    if(val%2==0){
        newArr.push(val)
    }
})

console.log("new filtered array is "+ newArr);



let f2=arr.filter((val)=>{
    return   val%2==0;
})

console.log(f2)
