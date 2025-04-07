// convert object into string by JSON.stringfy() and convert string into object by JSON.parse()
const user = {
    name:"Akash Verma",
    age:23,
    profession: "Software Developer",
    experience : "fresher"
}

const jsonString = JSON.stringify(user);
console.log(jsonString);
