function valid(arr1,arr2){
    let stack=[]
    let j=0
    for(let i=0;i<arr1.length;i++){
        stack.push(arr1[i])
        while(stack.length>0 && stack[stack.length-1]==arr2[j]){
            stack.pop()
            j++;
        }

    }
    console.log(stack.length===0?"YES":"No")
}
valid([1, 2, 3, 4, 5],[4, 5, 3, 2, 1])
valid([1, 2, 3, 4, 5],[4 ,3, 5, 1, 2])

