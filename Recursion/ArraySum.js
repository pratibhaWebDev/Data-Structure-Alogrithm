function arraySumm(size,arr){
    if(size==0) return 0;
    else{
        let sum=0
        sum=arr[size-1]+arraySumm(size-1,arr)
        console.log(sum)
        return sum
    }
    
}
let size=5
let arr=[6,3,8,2,-4]
console.log(arraySumm(size,arr))