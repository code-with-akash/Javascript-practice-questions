// map in array
const users = [
    {name:"Akash",age:22},
    {name:"Shivam",age:24},
    {name:"Rahul",age:28}
]

console.log(users.map((user)=>{
    return {
        ...user, age:user.age +5
    }
}));

console.log(users.map(user =>({...user, age:user.age +10
})));