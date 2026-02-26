//filtering-
// What is I tell u , given an input array , give me back all the even values from it

const arr = [1,2,3,4,5];

const ans = arr.filter((n) => {
    if(n%2 == 0){
        return true;
    }else{
        return false;
    }
});
console.log(ans);
