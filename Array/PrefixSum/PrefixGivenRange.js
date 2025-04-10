// let arr=[2,1,3,4,5]
// // arr[0]=0
// let l=2
// let r=3
// for(let i=l;i<=r;i++){
//     arr[i-1]=arr[i-1]+arr[i-2]
    
// }
// console.log(arr)
let arr=[2,4,1,3,6,5]
let n=arr.length
let l=3
let r=5
for(let i=1;i<=n-1;i++){
    arr[i]=arr[i]+arr[i-1]
    
}
console.log(arr)
let ans=arr[r-1]-arr[l-2]
console.log(ans)