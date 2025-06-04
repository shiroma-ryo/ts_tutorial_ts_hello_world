var greet;
greet = "Hello";
console.log(greet);
var isWeekday = function (dayOfWeek) {
    return dayOfWeek !== "Sun" && dayOfWeek !== "Sat";
};
console.log(isWeekday("Mon"));
console.log(isWeekday("Sun"));
var showUserOptions = function (options) {
    console.log("User: name: ".concat(options.name, ", age: ").concat(options.age));
};
showUserOptions({ name: 'Ken the Ninja', age: 20 });
