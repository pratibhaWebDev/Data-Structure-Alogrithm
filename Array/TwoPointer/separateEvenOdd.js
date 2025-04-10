function separeteEvenOdd(arr){
    let left=0
    let right=arr.length-1
    while(left<right){
        if(arr[left]%2===1 && arr[right]%2===0){
            let temp=arr[left]
            arr[left]=arr[right]
            arr[right]=temp
        }
        if(arr[left]%2===0) left++
        if(arr[right]%2===1) right--
    }
    console.log( arr)
}
let arr=[1,2,3,4,5,6,7]
let result=separeteEvenOdd(arr)
console.log(result)