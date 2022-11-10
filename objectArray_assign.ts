console.log(`<-------------------Traversing object "Employee"------------------->`);
var employee = {
    ID : 10001,
    Name : "Sam",
    Department : "design",
    IsPermanent : true 
}
for (const key in employee) {
    console.log(key);   
}
console.log(`<-------------------De-structuring object "Employee"------------------->`);
var {ID : eID, Name: eName, Department: eDepartment, IsPermanent: eIsPermanent} = employee;
console.log(`ID - `, eID);
console.log(`Name - `, eName);
console.log(`Department - `, eDepartment);
console.log(`IsPermanent - `, eIsPermanent);
console.log(" ");
console.log(" ");
console.log(`<-------------------Traversing array "Demo"------------------->`);

var demo = ["J&J", "Pfizer", "Sputnik"];

for (const element of demo) {
    console.log(element);
}
console.log(`<-------------------De-structuring array "Demo"------------------->`);
var [a, b, c ] = demo;

console.log(`first element -`, a);
console.log(`Second element -`, b);
console.log(`Third element -`, c);








