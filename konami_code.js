/* const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function
  let tracker = [];
  document.body.addEventListener('keydown', function(e){
    tracker.push(e.which);
    //if length == code.length
    if(tracker.length === code.length){
      //if tracker == code : success
      console.alert('great job buddy!');
    } //else remove first element
      else{code.shift()}
  }); 
} */

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var counter = 0;
  document.body.addEventListener('keydown', function(e) {
    var key = parseInt(e.which) || parseInt(e.detail);  
    if (code[counter] === key) {
      counter++ 
    } else {
      counter = 0;
    }

    if (counter === code.length -1){
      alert("Hurray");
    }
  })
}

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var counter = 0;
  // everytime a keydown event is triggered we will run the below code
  document.body.addEventListener('keydown', function(e) {
    // we are setting key to the value of what E is
    var key = parseInt(e.which) || parseInt(e.detail);
    // the first time this function is called our counter will be at 0
    // we want to see if the user is pressing his keybored in the exact sequence of our code Array
    // so we check if code[0] (remember, its 0 in our case bc its the first time running) 
    if (code[counter] === key) {
      // code[0] === the value of key, so we know that so far the user has pressed the right sequence
      // we go ahead and increase the counter by one
      counter++
    } else {
      // in this case, the user pressed the wrong key, so we restart our counter bc the user needs to get everything in the right sequence
      counter = 0;
    }
    // here we check to see if the counter is the same length of our code (minus one bc we started at zero)
    // if counter === code.length then we know that the user pressed the right keys in the right sequence, so we log our oue alert 
    if (counter === code.length -1){
      alert("Hurray");
    }
  })
}