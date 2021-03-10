function addingEventListener() {
  //the node that will be doing the listening
  const input = document.getElementById("input");
  //invocating the node with addEventListener
  //"click" -> event name to listen for
  //"function(event" ->callback function. what will be executed when the node hears the event
  input.addEventListener("click", function (event) {
    alert("I was clicked!");
  });
}
addingEventListener();
