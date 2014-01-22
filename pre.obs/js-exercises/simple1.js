

function Listen() {
	
	this.listen = function($msg) {
		
	};
	
	this.say = function() {
		//todo: return all messages pass to listen.
	}
	
}

var iAm = new Listen();

iAm.listen("a");
iAm.listen("b");

var say = iAm.say();

if(say == "ab") {
	console.log("good listen");
} else {
	console.log("bad listen");
}

function WhoIsListen() {
	
	return {
		
		'listen': function(msg, who) {
			
		},
		
		'say': function() {
		
		}
	}
	
}

var dan = {'name': 'Dan'};
var michael = {'name': 'Michael'};

var whoSayWhat = new WhoIsListen();

whoSayWhat.listen("Hi", dan);
whoSayWhat.listen("Hello", michael);

var conversation = whoSayWhat.say();

if (conversation == "Dan say: Hi. Michael say: Hello") {
	console.log("good conversation");
} else {
	console.log("bad conversation");
}

function ConfuseListen() {};

ConfuseListen.prototype.listen = function(msg) {
	
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

