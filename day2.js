// write a code to check if tow arrays are cyclic rotations of each other
// Write a program to check  whether two array has the same elements in the same order. May be Cyclic

// -  examples : take array  [1,2,3,4].

// The test should return true for [2,3,4,1], [3,4,1,2], [4,1,2,3] but not for [1,3,2,4], [1,4,2,3] or [1,2,3,5] 

// First assume array don't have duplicates if done then try solving for arrays having duplicates also

const readlineSync =require("readline-sync")

var userArray=readlineSync.question("Input Array comma separated ");
var ar1=userArray.split(",").map(x=> parseInt(x))
// 
var userArray2=readlineSync.question("");
var ar2=userArray2.split(",").map(x=> parseInt(x))


for(var i=0;i<ar1.length;i++){
    if(ar1[i]==ar2[0]){
        break;
    }
}

var j;var f=0;
for(j=0;j<ar2.length;j++){
    console.log(` ar2= ${ar2[j]} , ar1= ${ar1[i]}`)
    if(ar1[i]==ar2[j]){
       i++;
    }
    else if(ar1[i]!==ar2[j]){
        f=1;
        break;
    }
    
    if(i==ar1.length){
        i=0;
    }
    
}
if(f==0){
    console.log("Voila arrays match")
}
else{
    console.log("Jaah arrays don't match")
}


