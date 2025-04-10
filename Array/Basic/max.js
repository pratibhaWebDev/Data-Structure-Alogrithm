let arr=[3,1,8,2,1,4]
let max=-Infinity
let temp=0
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            max=Math.max(max,arr[j])
        }     
    }
}
console.log(max)