const LinkedListNode=class{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function insertNodeAtHead(head,data){
    var temp=new LinkedListNode(data)
    temp.next=head;
    head=temp;
    return head; 
}
let head = new LinkedListNode(10);
head = insertNodeAtHead(head, 20);
head = insertNodeAtHead(head, 30);
function printList(head) {
    let current = head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}
printList(head);