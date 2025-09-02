class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
const head=new Node(10)
const node2=new Node(20)
const node3=new Node(30)
head.next=node2
node2.next=node3 

let curr=head 
while(curr){
    console.log(curr.data)
    curr=curr.next
}
