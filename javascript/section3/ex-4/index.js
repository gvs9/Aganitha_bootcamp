
function operateOnArray(arr,operationFn){
const result=[];

for(let i=0;i<arr.length;i++){
    result.push(operationFn(arr[i]));
}
return result;
};

const num=[1,2,3,4,5,6];

const cube=function(num){
    return num*num*num;
}

 const cubenumber=operateOnArray(num,cube);
 console.log(cubenumber);