// A function to create planets

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;

buildPlanet = function (name, position, type, radius, rank) {
    return {
        name: name,
        position: position,
        type: type,
        radius: radius,
        sizeRank: rank
    };
};

getPlanetInfo = function (planet) {
    return planet.name.toUpperCase() + ": planet " + planet.position;
};

planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));

var buildCar;
var getCarInfo;
var car1;
var car2;

buildCar = function (make, color, type, model, year) {
    return{
        make: make,
        color: color,
        type: type,
        model: model,
        year: year
    };

};

getCarInfo = function(car) {
    return car.make.toUpperCase() + ":car " + car.color;
};
car1 = buildCar("Tata", "Black", "Coupe", "Tigor" , 2024);
car2 = buildCar("Toyota", "white", "sedan", "Innova", 2019);

console.log(getCarInfo(car1));
console.log(getCarInfo(car2));

/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */