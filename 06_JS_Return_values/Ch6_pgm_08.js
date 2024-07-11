// Getting strings for a player’s health and location

var getPlayerHealth;
var getPlayerPlace;
var showPlayerInfo;

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

showPlayerInfo = function (playerName, playerHealth, playerPlace){
    return playerName + " has health " + playerHealth + " is in " + playerPlace;
};

console.log(getPlayerHealth("Kandra", 50));
console.log(getPlayerPlace("Kandra", "The Dungeon of Doom"));
console.log(showPlayerInfo("kandra", 50, "The Dungeon of Doom"));



/* Further Adventures
 *
 * 1) Create a showPlayerInfo function with three
 *    parameters, playerName, playerHealth and
 *    playerPlace.
 *
 * 2) Call getPlayerHealth and getPlayerPlace
 *    from your new showPlayerInfo function.
 *
 *    e.g. showPlayerInfo("Dax", 50, "The Bath")
 *    should produce the output
 *
 *    Dax has health 50
 *    Dax is in The Bath
 *
 */