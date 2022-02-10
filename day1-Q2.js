const arr=[
    {
        'name':"Aashirwad",
        'marks':27
    },
    {
        'name':"Yuvraj",
        'marks':35
    },
    {
        'name':"Abhineash",
        'marks':32
    },
    {
        'name':"Muskan",
        'marks':28
    },

]

let updateArray=function(i,arr,new_value){
    arr[i].marks=new_value

}

updateArray(3,arr,36)

console.log(arr)
