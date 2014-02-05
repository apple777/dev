


var e = new EventDispacher ();

var check = [];  // init global var declertion 

var obj1 = {'a': 1};
var obj2 = {'a': 2};

//		 .on receve anonimus function -> MAKE THIS FUNC CALL

e.on("testEvent", function() { //  
	check.push(["a", this.a]); // obj1 argument let this.a to know - obj1 param// 
}, obj1);

//e.on(" arg ", arg() {
e.on("testEvent", function() {
	check.push(["b", this.a]); // definition only f // on not calling util 
}, obj2);

var msg = check.length == 0 ? "good" : "bad";  //			good 
console.log("test0 : " + msg);

// make thing happen
e.trigger('testEvent'); // we need to call to .on -> func - in order that check is full 

//MAKE on : {}, add value 
// CALL .on FUNC FROM OBS.JS FILE 
var result = (check.length == 2 &&
	check[0][0] == "a" && check[0][1] == 1 &&			// check if first .on work 
	check[1][0] == "b" && check[1][1] == 2				//  check if sec .on work 
	);

var msg = result ? "good" : "bad";  //			bad ?
console.log("test1 : " + msg);

check = [];
e.off("testEvent");

e.once("testEvent", function() {
	check.push(["c", this.a]);
}, obj2);

e.trigger('testEvent');

var result = (check.length == 1 &&
	check[0][0] == "c" && check[0][1] == 2
	);

var msg = result ? "good" : "bad";  //			bad ?
console.log("test2 : " + msg);

check = [];

e.trigger('testEvent');

//result throw error (no listeners  to this event)
