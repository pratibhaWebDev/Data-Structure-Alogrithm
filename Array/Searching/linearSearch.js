let arr=[4,7,8,1,2,5]
let target=0;
let found=false;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==target){
//         console.log("Element found at index",i);
//         return 0;
//     }

// }
// console.log("not found")
for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
        console.log("Element found at index",i);
        found=true;
        break;
    }
}
if(!found){
    console.log("Element not found")
}
