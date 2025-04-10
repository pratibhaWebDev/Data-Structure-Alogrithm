const LinkedListNode=class{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
let head=new LinkedListNode(10);
let node2=new LinkedListNode(20);
let node3=new LinkedListNode(30);
head.next=node2;
node2.next=node3;
function deleteBeg(head){
   if(head==null) return null 
   let temp=head 
   head=head.next
   temp=null 
   return head

}
let current=head 
while(current){
    console.log(current.data)
    current=current.next
}
 head=deleteBeg(head)
console.log(head)