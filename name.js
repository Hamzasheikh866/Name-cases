// Lower case
var personName = "Hamza";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("Uppercase:", personName.toLocaleUpperCase());
// title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
