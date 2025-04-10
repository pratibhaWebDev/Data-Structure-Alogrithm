class Node{
    constructor(data){
        this.data = data;
        this.next=null
    }
}
let head=new Node(10)
let second=new Node(20)
let third=new Node(30)
let fourth=new Node(40)
let fivth=new Node(50)
head.next=second 
second.next=third 
third.next=fourth
fourth.next=fivth
function pos(head,position){
    if(head==null) return null 
    if(position==0) return head
    
    let prev=null;
    let current=head;
    for(i=0;i<position && current!=null;i++){
        prev=current
        current=current.next
    }
    
    prev.next=current.next
    return head
}
head=pos(head,2)

function printList(head) {
    let temp = head;
    while (temp !== null) {
        console.log(temp.data);
        temp = temp.next;
    }
}
printList(head)