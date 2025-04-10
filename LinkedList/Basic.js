class Node{
    constructor(data){
        this.data = data;
        this.next=null
    }
}
const head=new Node(10)
const second=new Node(20)
const third=new Node(30)
head.next=second 
second.next=third 
let current=head 
while(current){
    console.log(current.data)
    current=current.next
}