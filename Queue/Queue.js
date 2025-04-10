var front=-1,rear=-1
var Max=5
let queue=Array(Max).fill(0);

function isEmpty(){
    return front==-1 && rear==-1
}

function isFull(){
    return rear==Max-1
}
function enqueue(x){
    if(isFull()){
        console.log("Queue is overFlow")
        return;
    }
    if(isEmpty()){
        front=rear=0
        queue[rear]=x
    }else{
        rear=rear+1
        queue[rear]=x
    }
}
function dequeue(){
    if(isEmpty()){
        console.log("Queue is underFlow")
        return
    }else {
        var temp=queue[front]
        if(front==rear){
        front=rear=-1
        }else{
            front=front+1
        }
    }
    return temp
}

// enqueue(10)
console.log(dequeue())