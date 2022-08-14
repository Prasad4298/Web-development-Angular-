function Sequence() {
    console.log("display statement using Sequence\n");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("\n");
}
function Iteration_For() {
    var i = 0;
    console.log("display statement using for loop\n");
    for (i = 1; i <= 5; i++) {
        console.log("Hello");
    }
    console.log("\n");
}
function Iteration_While() {
    var i = 1;
    console.log("display statement using while loop\n");
    while (i <= 5) {
        console.log("Hello");
        i++;
    }
    console.log("\n");
}
Sequence();
Iteration_For();
Iteration_While();
