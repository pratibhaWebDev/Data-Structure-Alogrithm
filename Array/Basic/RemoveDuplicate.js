let arr=[1,2,2,3,3]
let left=0
let right=1
let temp=[]
let k=0
while(left<arr.length && right<arr.length){
    if(arr[left]!==arr[right]){
        arr[k]=arr[left]
        k++
    }
    left++
    right++
}
arr[k]=(arr[arr.length - 1]);
k++
arr.length=k
console.log(arr)