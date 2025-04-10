var top=-1
var MAX=5
var st=Array(MAX).fill(0)

function pop(){
    if(top<0){
        console.log("Stack is empty")
        return false
    }else{
        var x=st[top]
        top=top-1
        return x
    }
}

function push(x){
    if(top>=MAX-1){
        console.log("Stack is full")
    }else{
        top=top+1
        st[top]=x
        console.log(st[top])
    }
}

function peek(){
    if(top<0){
        console.log("Stack is empty")
        return
    }else{
        return st[top]
    }
}
push(10)
push(20)
console.log(pop())
console.log("Top of Stack",peek())