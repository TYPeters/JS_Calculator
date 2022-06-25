let num1 = parseInt(prompt("Enter the First Number"));
let oper = prompt("Enter the Operator:")
let num2 = parseInt(prompt("Enter the Second Number"));

if(oper == "+"){
    alert("The Sum of" + num1 + "and" + num2 + "is" + (num1+num2));
}
else if(oper == "-"){
    alert("The Difference of" + num1 + "and" + num2 + "is" + (num1-num2));
}
if(oper == "*"){
    alert("The Product of" + num1 + "and" + num2 + "is" + (num1*num2));
}
if(oper == "/"){
    alert("The Divide of" + num1 + "and" + num2 + "is" + (num1/num2));
}
