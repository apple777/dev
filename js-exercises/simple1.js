
// constructor 
function Listen() {
	var x;
	console.log(x, "x =?");
	this.listen = function($msg) {
		//console.log($msg);
		x = $msg;
		//console.log(zubri);
		//return function($msg){}
		//typeof ($msg)
		//console.log(typeof $msg)
			//console.log(listen.prototype);

	};

	this.say = function() {

			//todo: return all messages pass to listen.
			//console.log(__proto__:listen);

		//this.listen = function();
		//console.log($msg);
		//a = new listen();
		//console.log(a);
		console.log(x.length, "x = b");
		return x;
		//Listen.iAm.listen()
	}
	
}
	//console.log(Listen.listen, "777");

var iAm = new Listen();

iAm.listen("a");
iAm.listen("b");
var cont = iAm.constructor.name;
//var x1=iAm.say.toString();

console.log(cont, "constructor");

//iAm.say("ab");

var say = iAm.say();
//console.log(say);
if(say == "ab") {
	console.log("good listen");
} else {
	console.log("bad listen");
}

function WhoIsListen() {

	return {
		
		'listen': function(msg, who) {
			console.log(msg, who);
		},
		
		'say': function() {

		}
	}
	
}

var dan = {'name': 'Dan'};
var michael = {'name': 'Michael'};

//console.log(v);


var whoSayWhat = new WhoIsListen();

whoSayWhat.listen("Hi", dan);
console.log(whoSayWhat.listen[msg], "ddd");
whoSayWhat.listen("Hello", michael);


for (var key in whoSayWhat) {
    if (whoSayWhat.listen) {
        console.log(key, "FFF");
    }
}

console.log(whoSayWhat.listen(msg), "f");
var conversation = whoSayWhat.say();

console.log(conversation , "conversation");
console.log(whoSayWhat , "whoSayWhat");

if (conversation == "Dan say: Hi. Michael say: Hello") {
	console.log("good conversation");
} else {
	console.log("bad conversation");
}

function ConfuseListen() {};

ConfuseListen.prototype.listen = function(msg) {
	console.log(msg);
}

ConfuseListen.prototype.say = function() {
	//todo: return string of the messages in random order.
}

someone = new ConfuseListen();

someone.listen("a");
someone.listen("b");

var msg = someone.say();
var result = false;

for(var i=0;i<10;i++) {
	if(msg == "ab" && someone.say() == "ba" 
		|| msg == "ba" && someone.say() == "ab"
	) {
		result = true;
		break;
	}
}

if(result) {
	console.log("good confuse");
} else {
	console.log("bad confuse");
}

Actor = (function () {
	return function(player, howToSay){
		var _this = {
			init: function(player, howToSay) {
			},
			
			remember: function(script) {
				//todo: get a script to say or action to perform
			},
			
			play: function() {
				//do the show of the actor
			}
		};
		_this.init(player, howToSay);
		return _this;
	};
	
	
})();

var log = '';
function howToSay(msg) {
	log += msg + " ";
}

aDan = new Actor(dan, howToSay);

aDan.remember("Hello")

aDan.remember(function(){howToSay("walk");});

aDan.remember("Good bye");

if(log == "Hello walk Good bye ") {
	console.log("Good Actor");
} else {
	console.log("Bad Actor");
}

