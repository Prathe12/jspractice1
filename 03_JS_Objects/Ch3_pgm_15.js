// A player object

var player;

player = {
    name: "Kandra",
    health: 50,
    place: "The Dungeon of Doom",
    items: "a rusty key, The Sword of Destiny, a piece of cheese"
};

console.log(player.name);
console.log(player.name + " is in " + player.place);
console.log(player.name + " has health " + player.health);
console.log("Items: " + player.items);

player2 = {
    name : "Dhoni",
    age : 43,
    place : "Ranchi",
    work : "Indian Cricketer"

};
console.log(player2.name);
console.log(player2.name + " age is " + player2.age);
console.log(" He was born in " + player2.place);
console.log("He is a " + player2.work);


/* Further Adventures
 *
 * 1) Create a second player.
 *
 * 2) Log their details to the console.
 *
 * Notice how storing the items as a string
 * isn't a great approach. If the player
 * drops an item you'll have to manipulate
 * the string to remove the item.
 *
 * JavaScript has a way of storing lists
 * of items called an array. See Chapter 8.
 *
 */