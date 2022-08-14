// Function defination
function fun()      // 1
{
    console.log("Inside fun");
}

// Function call
fun();

function gun(no: number)    // 2
{
    console.log("Inside gun :"+no);     // + operator is concatination operator
}

gun(11);

function sun(no : number) : number
{
    var i : number = no;    // local variable
    i++;
    return i;
}

var ret : number = 0;
var a : number = 10;
ret = sun(a);
console.log("return value is :"+ret);
