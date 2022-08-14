var Ret : number = 0;       // global variable


// Regular Function
function Addition1(No1 : number, No2 : number) : number  // Required arguments
{
    var Ans : number = 0;      // Local variable

    Ans = No1 + No2;
    return Ans;
}

Ret = Addition1(10,11);
console.log("Addition1 is :"+Ret);


// Anonymous Function ( Function without name)
var Addition2 = function(No1 : number, No2 : number) : number
{
    var Ans : number = 0;      // Local variable

    Ans = No1 + No2;
    return Ans;
}

Ret = Addition2(10,11);
console.log("Addition2 is :"+Ret);


//Fat arrow / Lambda / Arrow function
var Addition3 = (No1 : number, No2 : number) : number => 
{
    var Ans : number = 0;      // Local variable

    Ans = No1 + No2;
    return Ans;
}

Ret = Addition3(10,11);
console.log("Addition3 is :"+Ret);


// Fat arrow function is used to ("call function imegitely without creating the stackframe ").

// => means ( function chi body pudhe aahe !).

// Ret variable over loaded variable.
