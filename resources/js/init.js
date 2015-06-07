 /**
*
* JS Script used to init some variables but also to ask the user for a username.
* @author Hamed ZITOUN (zitoun.hamed@gmail.com)
* @Date: 2015-06-07
*/


var currentUser = prompt("Username", "anonymous");
var currentStatus = "online";
var userBase = new Firebase("https://resplendent-fire-5470.firebaseio.com/");
var myUserRef = userBase.push();
var connectedRef = new Firebase("https://resplendent-fire-5470.firebaseio.com//.info/connected");
connectedRef.on("value", function(isOnline) {
  if (isOnline.val()) {
    setUserStatus("online");
  }
  else {
    setUserStatus("away");
  }
});
function setUserStatus(status) {
  currentStatus = status;
  myUserRef.set({ username: currentUser, status: status });
}