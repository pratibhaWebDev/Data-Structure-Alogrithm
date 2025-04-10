const LinkedListNode=class{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
let head=new LinkedListNode(10);
second=new LinkedListNode(20);
let third=new LinkedListNode(30)
head.next=second
second.next=third
console.log(head)