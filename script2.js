// find key in object
const checkKeyInObject = (key, object)=>{
    if(!object){
        return false;
    }
    return Object.prototype.hasOwnProperty.call(object, key); 

};

const obj = {name:"Akash", age :23};

console.log(checkKeyInObject("name",obj));
console.log(checkKeyInObject("toString",obj));
console.log(checkKeyInObject("gender",obj));
