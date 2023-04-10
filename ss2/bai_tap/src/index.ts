// // happy coding 👻
// console.log("hello world");

let sum:number=0;
function finonacci(n:number){
    if(n<=1){
        return n;
    }else {
        return finonacci(n-1)+finonacci(n-2);
    }
}

for(let i=1;i<10;i++){
    console.log(finonacci(i));
    sum +=finonacci(i);
}
console.log("total = " +sum);