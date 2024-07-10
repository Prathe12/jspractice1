// Using an argument to determine the return value

var getHelloTo;
var fullMessage;
var getMsgTo;

getHelloTo = function (name) {
    return "Hello to " + name;
};

fullMessage = getHelloTo("Kandra");

console.log(fullMessage);

getMsgTo = function (name){
    return "Welcome to" + name;
};
fullMessage = getMsgTo(" Dax");
console.log(fullMessage);



/* Further Adventures
 *
 * 1) Change the definition of getHelloTo
 *    to accept two parameters, name1 and name2.
 *
 * 2) Make the function return a string of
 *    the form "Hello to Kandra and Dax"
 *
 */