let arr=[2,1,3,4,5]
let n=arr.length
for(let i=1;i<=n-1;i++){
    arr[i]=arr[i]+arr[i-1]
    
}
console.log(arr)
