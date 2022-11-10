console.log("<-------------------Traversing object \"Employee\"------------------->");
var employee = {
    ID: 10001,
    Name: "Sam",
    Department: "design",
    IsPermanent: true
};
for (var key in employee) {
    console.log(key);
}
console.log("<-------------------De-structuring object \"Employee\"------------------->");
var eID = employee.ID, eName = employee.Name, eDepartment = employee.Department, eIsPermanent = employee.IsPermanent;
console.log("ID - ", eID);
console.log("Name - ", eName);
console.log("Department - ", eDepartment);
console.log("IsPermanent - ", eIsPermanent);
console.log(" ");
console.log(" ");
console.log("<-------------------Traversing array \"Demo\"------------------->");
var demo = ["J&J", "Pfizer", "Sputnik"];
for (var _i = 0, demo_1 = demo; _i < demo_1.length; _i++) {
    var element = demo_1[_i];
    console.log(element);
}
console.log("<-------------------De-structuring array \"Demo\"------------------->");
var a = demo[0], b = demo[1], c = demo[2];
console.log("first element -", a);
console.log("Second element -", b);
console.log("Third element -", c);
