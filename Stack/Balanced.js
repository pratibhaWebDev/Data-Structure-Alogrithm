function balanced(str){
    let st=[]
    for(let i=0;i<str.length;i++){
        let ch=str[i]
        if(ch=='(' || ch=='{' || ch=='['){
            st.push(ch)
        }else{
            let temp=st.pop()
            if(ch==')'&& temp!='(') return false
            if(ch=='}' && temp!='{') return false
            if(ch==']' && temp!='[') return false
        }

    }
    return st.length==0?"Yes":"No"
}
let data=balanced('[')
console.log(data)