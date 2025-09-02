function findPower(a,b){
    if(b==0){
        return 1
    }else{
        return a*findPower(a,b-1)
    }
}
console.log(findPower(2,4))