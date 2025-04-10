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
function deleteEnd(head){
    let current=head
    let temp
    if(head===null || head.next==null){
        return head
    }
    while(current.next.next!==null){
        current=current.next
    }
    current.next=null
    return head

}
 head=deleteEnd(head)
console.log(head)