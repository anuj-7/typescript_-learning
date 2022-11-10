// enum Gender {
//     Male,
//     Female
// }
// console.log(Gender.Female);
// console.log(Gender.Male);
// console.log(Gender[1]);
// console.log(Gender[0]);
// enum Weekends {
//     Saturday = 6,
//     Sunday = 7
// }
// console.log(Weekends[6]);
// console.log(Weekends[7]);
var Directions;
(function (Directions) {
    Directions[Directions["East"] = 0] = "East";
    Directions[Directions["West"] = 1] = "West";
    Directions[Directions["North"] = 2] = "North";
    Directions[Directions["South"] = 3] = "South";
})(Directions || (Directions = {}));
console.log("1. Directions ");
console.log(Directions[0], Directions[1], Directions[2], Directions[3]);
console.log("------------------------------------------------------------");
var days;
(function (days) {
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
    days[days["Sunday"] = 7] = "Sunday";
})(days || (days = {}));
console.log("2. Days");
console.log(days[1], days[2], days[3], days[4], days[5], days[6], days[7]);
console.log("------------------------------------------------------------");
var months;
(function (months) {
    months[months["January"] = 1] = "January";
    months[months["February"] = 2] = "February";
    months[months["March"] = 3] = "March";
    months[months["April"] = 4] = "April";
    months[months["May"] = 5] = "May";
    months[months["June"] = 6] = "June";
    months[months["July"] = 7] = "July";
    months[months["August"] = 8] = "August";
    months[months["September"] = 9] = "September";
    months[months["October"] = 10] = "October";
    months[months["November"] = 11] = "November";
    months[months["December"] = 12] = "December";
})(months || (months = {}));
console.log("3. Months");
console.log(months[1], months[2], months[3], months[4], months[5], months[6], months[7], months[8], months[9], months[10], months[11], months[12]);
console.log("------------------------------------------------------------");
var Planets;
(function (Planets) {
    Planets[Planets["MERCURY"] = 1] = "MERCURY";
    Planets[Planets["VENUS"] = 2] = "VENUS";
    Planets[Planets["EARTH"] = 3] = "EARTH";
    Planets[Planets["MARS"] = 4] = "MARS";
    Planets[Planets["JUPITER"] = 5] = "JUPITER";
    Planets[Planets["SATURN"] = 6] = "SATURN";
    Planets[Planets["URANUS"] = 7] = "URANUS";
    Planets[Planets["NEPTUNE"] = 8] = "NEPTUNE";
})(Planets || (Planets = {}));
console.log("4. Planets");
console.log(Planets[1], Planets[2], Planets[3], Planets[4], Planets[5], Planets[6], Planets[7], Planets[8]);
console.log("------------------------------------------------------------");
