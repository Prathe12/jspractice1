// Iterating over an array with forEach

var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach",
  "The Great Wall of China",
  "India Gate"
];

items.push("EiffelTower");
items.push("Machu Picchu");
items[4] = "Christ the Redeemer";
items[5] = "The Taj Mahal";
function showInfo() {
  for (let i = 0; i < items.length; i++) {
      if (items[i]) {
          console.log(`${items[i]} (Length: ${items[i].length} characters)`);
      }
  }
}
function totalNumberOfLetters() {
  let totalLetters = 0;
  for (let i = 0; i < items.length; i++) {
      if (items[i]) {
          totalLetters += items[i].length;
      }
  }
  return totalLetters;
}


showInfo();
console.log(`Total number of letters: ${totalNumberOfLetters()}`);

showInfo = function (itemToShow) {
    console.log(itemToShow);
};

items.forEach(showInfo);



/* Further Adventures
 *
 * 1) Add a few extra items to the array, some
 *    using push and some using square brackets.
 *    Run the program.
 *
 * Strings also have a length property
 * which gives the number of characters in the string.
 *
 * 2) Update the showInfo function to also
 *    display the number of letters in each item.
 *
 * 3) Write a new function that finds the total
 *    number of letters of the elements in
 *    the items array.
 *
 */