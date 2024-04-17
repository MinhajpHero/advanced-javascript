function add(num1,num2){
    return num1+num2;
}
const result=add(3,4,5);
console.log(result);



function add(num1,num2){
    console.log([...arguments]);
    return num1+num2+arguments[2];
}
const result2=add(3,4,5);
console.log(result2);
