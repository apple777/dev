// [part 3]

// implement the observer pattern in java script. :)
// Class.js && underscore are included

EventDispacher = function() {

    var obj = {



    //nadav : [],
    list: [],
    listeners: {},


    // contractor
    init : function() {
        // if you wont to reset vars
        this.a =3;

    },
    


    /**
     *  write / Subscribe a given callback to an event identified by eventName.
     *
     *  Multiple callbacks are allowed for a given event name.
     *  eventName is case sensitive ( "myEvent" is different "MYEVENT").
     *  
     *  @param {String} name for the event
     *  @param {Function} callback function
     *  @param {Object} optional context for callback (i,e the 'this' of the callback)
     *
     **/
    on : function(testEvent, func) {
        //this.nadav.push({a:a});
        this.listeners = [];

        this.listeners.push("6");
        console.log(this.listeners);

        function nadav(){
            alert('B!'); 
        }

        return nadav;


    },


    /**
     *  Subscribe to an event, once.    
     *
     *  @param {String} name for the event
     *  @param {Function} callback function
     *  @param {Object} optional context for callback
     *
     **/
    once : function(eventName, callback, context) {},
 


    /**
     *  Remove event listener(s). If callback is undefined all callbacks will be removed.    
     *  
     *  @param {String} name for the event
     *  @param {Function} callback function, optional.
     *
     *  @throws Error if there are 0 listeners for this eventName.
     *
     **/
    off : function(eventName, callback) {},


    /**
     *  call each listener for eventName, with eventName as the first parameter.
     *
     *  @param {String} name for the event
     *  @throws Error if there are 0 listeners for this eventName
     *
     **/
    trigger : function(eventName) {}


}

    obj.init();
    return obj;
};