const readlineSync =require("readline-sync")

// var userArray=readlineSync.question("Input Array comma separated ");
// var ar=userArray.split(",").map(x=> parseInt(x))
var ar=[2,4,5,8]

var val = 7;
// readlineSync.question("Input Value");

// Brute Force
// we iterate through pairs and see which one is equal to val 
// we move in forward in second array thus preventing revisit of pairs


var b;var f=0;
for( var i=0;i<ar.length-1;i++){
    b=val-ar[i];

   for(var j=i+1;j<ar.length;j++){
       if(ar[j]==b){
           console.log(`another value is ${b} at position ${j}`);f=1;break;
       }
   }
   if(f==1){
       break;
   }
   else{
       
   }

}

// Using hashmaps

// we take an additional hashmap here object
// we are calculating the diff between current element and the value
// if the diff is in the array ( which checks if the index is present then return the i)
// if not then we simply push the value of index with the key as number stored at the index in the array
// doing this enables us to use in keyword for checking if key exists in the object

// we are simply just updating the values of object hashmap with index of numbers
// 

var ar_map={}
var b2;

for(var i=0;i<ar.length;i++)
{
    b2=val-ar[i];

    if(b2 in ar_map){
        console.log(i)
        break;
    }
    ar_map[ar[i]]=i;
    
    
    

}

console.log(ar_map)

// so we are solving it in basically O(N)
