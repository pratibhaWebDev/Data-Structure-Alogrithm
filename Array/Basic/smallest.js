let arr=[5,10,4,1]
let min=arr[0]
// let temp=0;
// for(let i=0;i<arr.length;i++){
//    if(arr[i]<min){
//     min=arr[i];
//    }
// }
for(let i=0;i<arr.length;i++){
   min=Math.max(arr[i],min)
}

console.log(min)