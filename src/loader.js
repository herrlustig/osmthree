
var name = "Loader";

function greet() {
	console.log("Hello, my name is " + name);
}


module.exports = function() {
	this.name = name;
	this.greet = greet;
}