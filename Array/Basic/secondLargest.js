let arr=[12,35,1,10,34]

let max=-Infinity
let secondMax=-Infinity
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        secondMax=max
        max=arr[i]
    }else if(arr[i]>secondMax && arr!=max){
        secondMax=arr[i]
    }
}
console.log(secondMax)