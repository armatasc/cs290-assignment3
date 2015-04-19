/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  var mySnack = new Object();
  
  mySnack.type = 'Goldfish';
  mySnack.brand = 'Pepperidge Farm';
  mySnack.flavor = 'Cheddar';
  mySnack.count = 2000;
  
  return mySnack; //Modify ONLY this line
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
function MessageLog(user){
  this.user = user;
  this.msgS[];
  this.msgR[];
  this.directionS[];
  this.directionR[];
  this.countS = 0;
  this.countR = 0;
  this.lastReceivedD = 0;
  
  this.logMessage = function(messageText, direction){
    // Sent message
    if(direction == 0){
      if(this.countS >= 5){
        this.directionS.pop();
        this.directionS.unshift(directions);
        console.log("Direction: " + this.directionS[0]);
        this.countS++;
        this.lastReceivedD = 0;
      }
      else{
        this.directionS.unshift(directions);
        console.log("Direction: " + this.directionS[0]);
        this.countS++;
        this.lastReceivedD = 0;
      }}
   // Received messages 
   else if(direction == 1){
     if(this.countR >= 5){
        this.directionR.pop();
        this.directionR.unshift(directions);
        console.log("Direction: " + this.directionR[0]);
        this.countR++;
        this.lastReceivedD = 1;
      }
      else{
        this.directionR.unshift(directions);
        console.log("Direction: " + this.directionR[0]);
        this.countR++;
        this.lastReceivedD = 1;
      }}
    // messageText
    if(typeof messageText == "string"){
      // Sent messages
      if(direction == 0 && this.msgS.length == 5){
        this.msgS.pop();
        this.msgS.unshift(messageText);
        console.log("Message: " + this.msgS[0]);
      }
      else if(direction == 0){
        this.msgs.unshift(messageText);
        console.log("Message: " +  + this.msgs[0]);
      }
      // Received messages
      else if(direction == 1 && this.msgR.length == 5){
        this.msgR.pop();
        this.msgR.unshift(messageText);
        console.log("Message: " + this.msgR[0]);
      }
      else if(direction == 1){
        this.msgR.unshift(messageText);
        console.log("Message: " +  + this.msgR[0]);
      }}
  }
  
  this.getSentMessage = function(whichMsg){
    if(whichMsg > -1 && whichMsg < 5){
        return this.msgS[whichMsg];
    }}
  
  this.totalSent = function(){
    return this.countS;
  }
  this.totalReceived = function(){
    return this.countR;
  }
}
//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here
MessageLog.prototype.lastReceivedMessage = function(){
    return this.msgR[0];
}
//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var myLog = MessageLog(BlackHatGuy);
myLog.logMessage("foo", 1);
myLog.logMessage("bar", 1);
myLog.logMessage("baz", 1);
//end your code
