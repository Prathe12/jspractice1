// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var getMonthlyVisitorReport = function (monthArray, week, dayInWeek) {
  var weekArray = monthArray[week - 1];
  return getVisitorReport(weekArray, dayInWeek);
};


var week1 = [100, 200, 150, 250, 300, 100, 50];
var week2 = [110, 210, 160, 260, 310, 110, 60];
var week3 = [120, 220, 170, 270, 320, 120, 70];
var week4 = [130, 230, 180, 280, 330, 130, 80];

var month = [week1, week2, week3, week4];


console.log(getMonthlyVisitorReport(month, 1, 1)); 
console.log(getMonthlyVisitorReport(month, 2, 5)); 
console.log(getMonthlyVisitorReport(month, 3, 7)); 
console.log(getMonthlyVisitorReport(month, 4, 6));

var visitors = [ 354, 132, 210, 221, 481, 315, 205 ];

var report = getVisitorReport(visitors, 5);

console.log(report);



/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */