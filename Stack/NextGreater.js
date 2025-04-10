// 👉 Problem: For each element in an array, find the next greater element to its right.
// 💡 Example:
// Input: [4, 5, 2, 10, 8]
// Output: [5, 10, 10, -1, -1]
// 🔹 Hint: Use a stack to keep track of elements while iterating from right to left.
function nextGreaterElement(arr) {
    let stack=[];
    let result=Array(arr.length).fill(-1)
    for(i=arr.length-1;i>=0;i--){
    
        while(stack.length>0 && stack[stack.length-1]<=arr[i]){
            stack.pop();
        }
        if(stack.length>0){
            result[i]=stack[stack.length-1]
        }
        stack.push(arr[i])
        // console.log(result)
    }
    return result
}

console.log(nextGreaterElement([4, 5, 2, 10, 8])); 
