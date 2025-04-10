let nums1 = [1,2,3,0,0,0]
let nums2 = [2,5,6]
let m = 3,n=3;
let i=m-1,j=n-1;
let last = m+n-1
while(i>=0 && j>=0){
    if(nums1[i]>nums2[j]){
        nums1[last]=nums1[i]
        i--
    }else{
        nums1[last]=nums2[j]
        j--
    }
    last--
}
while(j>=0){
    nums1[last]=nums2[j]
    j--
    last--
}
console.log(nums1)