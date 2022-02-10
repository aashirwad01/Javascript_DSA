// https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209

// Implementing map inbuilt
// Features of map : It returns an entire new array return statement is manadatory
// it takes in a callback function with array element and returns new array with operation defined in return statement

const arr=[
    {
        'name':'Aashirwad',
        'roll':4

    },
    {
        'name':'Pankaj',
        'roll':78

    },
    {
        'name':'Ayush',
        'roll':70

    },
    {
        'name':'Nisha',
        'roll':33

    },


]

 const arr_names=arr.map((a)=>{
     return a.name
 })
 console.log(arr_names)

// implementing map from scratch 

let mymap =(ar,callback)=>{
    const new_ar=[];
    ar.forEach((e) => {
        new_ar.push(callback(e))

        
    });
    return new_ar;

}



console.log(mymap(arr,(a)=>{
    return a.name
}))

//Using Array.prototype

Array.prototype.makemap=function(callback){
    const new_ar2=[];
    this.forEach((e,i)=>{
        new_ar2.push(callback(this[i],this))
    })
    
    return new_ar2;
}

console.log(arr.makemap((e)=>{
    return e.name 
}))


// implementing filter function inbuilt
// Filter as name tells is used to filter out values from array based on certain conditions 
// i.e push only those values in new array which satisfy the given condition in the return statement
// return is must here also

console.log(arr.filter(e => e.roll<20))

// iplementing filter from scratch

const myfilter= function(arr,callback){
    const filter_arr=[];
    arr.forEach((e)=>{
        if(callback(e)){
            filter_arr.push(e);
        }

    })

    return filter_arr;
}

console.log(myfilter(arr,(e)=>{
    return e.roll>4
}))

// using Array prototyping

Array.prototype.makefilter = function(callback){

    const makefilter_arr=[];
    this.forEach((e,i)=>{
        if(callback(this[i],this))
        makefilter_arr.push(this[i])

    })

    return makefilter_arr

}

console.log(arr.makefilter((e)=>{
    return e.roll>70
}))


// implementing reduce method builtin
// reduce takes all the elements in an array and reduces them to a single value
// we take in two values previous and current and return after performing an operation over them 
// so kind of like sum of all roll nos  we pass in a second value alongside callback function to use as first value of previous


console.log(arr.reduce((previous,current)=>{
    return previous+current.roll

},0))

// implementing reduce method from scratch 

let myreduce = function(arr,callback,initial){
    let acc =initial || 0;
    
    arr.forEach((e,i)=>{
        acc=callback(acc,arr[i])
    })
    return acc;
}

console.log(myreduce(arr,(previous,current)=>{
    return previous*current.roll

},1))
