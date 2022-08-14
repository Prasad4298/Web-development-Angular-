// Optional arguments
function Demo(no1 : number, no2 ? : number)
{
    console.log("Inside demo");
    console.log("Vaue of no1 : "+no1);
    //console.log("value of no2 : "+no2);       // output : undefined

    if(no2 != undefined)
    {
        console.log("Value of no2 :"+no2);
    }
}

Demo(10,11);       // no1 = 10      no2 = 11
Demo(10);          // no1 = 10      no2 = undefined