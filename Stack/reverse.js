function reverseStack(str){
    let stack = [];
    for(let i = 0; i<str.length ; i++){
       stack.push(str[i])

    }
    let reverse=""
    while(stack.length>0){
        reverse+=stack.pop()
    }
    console.log(reverse)
}
reverseStack("hello")