class Node{
    constructor(data){
        this.data = data;
        this.next=null
    }
}
const head=new Node(10)
const second=new Node(20)
const third=new Node(30)
const fourth=new Node(40)
const fivth=new Node(50)
const sixth=new Node(60)
const middle=new Node(5)
head.next=second 
second.next=third 
third.next=fourth
fourth.next=fivth
fivth.next=sixth

let current=head 
let add=3
position(head,middle,add)
function position(head,middle,add){
    let temp=head
    for(let i=0;i<add-1 && temp!=null;i++ ){
        // console.log(temp.data)
        temp=temp.next
    }
    middle.next = temp.next;   // Step 1: point 5 → 30
    temp.next = middle;
    return head
}
while(current){
    console.log(current.data)
    current=current.next
}


