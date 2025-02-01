// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
var json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);
var u = true;
//u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
//Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
if (u == true) {
    console.log("u é boolean");
}
var v = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
