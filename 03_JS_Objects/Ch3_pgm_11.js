// Using a property in a calculation

var player1;

player1 = {
	  name: "Max",
	  score: 10
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 100;

console.log(player1.name + " has scored " + player1.score);

player2 = {
	name : "Dhoni",
	score : 100
};
console.log(player2.name + " has scored " + player2.score);
/* Further Adventures
 *
 * 1) Write code to increase player1's score by 10%.
 *
 * 2) Add a second player.
 *
 * 3) Use the players' properties to find the sum
 *    of their scores and log it to the console,
 *    along with an appropriate message that includes
 *    their names.
 *
 */