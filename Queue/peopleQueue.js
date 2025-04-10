// var front=-1,rear=-1
// function People(type, x, queue, k){
//   if(type==1){
//     if((rear + 1) % k == front)
//     {
//       console.log("-1")
//       return
//     }
//     if(isEmpty()){
//       front=0
//       rear=0
//        queue[rear]=x
//     //   console.log(queue[rear])
//     }else{
//       rear=(rear+1)%k
//     }
//     queue[rear]=x
//     console.log(queue[rear])
//   }
//   if(type==2){
//     var temp
//     if(isEmpty()){
//       console.log("-1")
//       return
//     }
//     temp=queue[front]
//     if(front==rear){
//       front=-1
//       rear=-1
//     }else{
//       // temp=queue[front]
//     front = (front + 1) % k;
//     }
//     console.log(temp)
//   }
// }
// function isEmpty(){
//   return front==-1 && rear==-1
// }
var front=-1,rear=-1
var top=-1
function Queue(queue, operation, element,stack){
  if(operation==1){
    if(isEmpty()){
      front=0
      rear=0
      
    }else{
        rear=rear+1
    }
    queue[rear]=element
  }
  if(operation==2){
    top=top+1
    stack[top]=element
    
  }
  if(operation==3){
    if(isEmpty()){
        console.log("-1")
        return
    }else{
        console.log(queue[front])
    }
    return
  }
  if(operation==4){
    if(top==-1){
        console.log("-1")
    }else{
        console.log(stack[top])

    }
    return
  }
  if(operation==5){
    if(isEmpty()){
      console.log("-1")
      return
    }
    let temp=queue[front]
    if(front==rear){
      front=-1
      rear=-1
    }else{
    console.log(temp)
    front=front+1
    stack[top]=temp
    top=top+1
    }

  }
}