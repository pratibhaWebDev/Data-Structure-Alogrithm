function left(arr){
    let stack=[]
    let result=Array(arr.length).fill(-1)
    for(let i=0;i<arr.length;i++){
        while(stack.length>0 && stack[stack.length-1]>=arr[i]){
            stack.pop()
        }
        if(stack.length>0){
            result[i]=stack[stack.length-1]
        }
        stack.push(arr[i])
    }
    return result
}
// console.log(left([10,5,11,12]))
console.log(left([8,2,8,1]))