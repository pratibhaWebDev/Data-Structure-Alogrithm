let arr=[5,4,3,2,1]
let rev=[]
for(let i=arr.length-1;i>=0;i--){
    rev.push(arr[i])
}
console.log(rev)

let left=0;
let right=arr.length-1;
while(left<right){
    [arr[left],arr[right]]=[arr[right],arr[left]]
    left++;
    right--;
}
console.log(arr)


let n = arr.length;

for (let i = 0; i < n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
}

console.log(arr); // [5, 4, 3, 2, 1]
