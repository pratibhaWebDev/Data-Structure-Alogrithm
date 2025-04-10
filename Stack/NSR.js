function smallestRight(arr){
    let stack=[]
    let result=Array(arr.length).fill(-1)
    for(let i=arr.length-1;i>=0;i--){
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
console.log(smallestRight([5,4,3,2,1]))