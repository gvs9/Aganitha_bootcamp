function sortNumber(arr,compareFn){


return arr.sort(compareFn);
};


const num=[1,4,6,3,7,9,2];
//descending sorting
const sortnumdesc=function(a,b){
    return b-a;
}

const ans=sortNumber(num,sortnumdesc);
console.log(ans);