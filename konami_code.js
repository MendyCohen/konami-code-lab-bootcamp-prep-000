const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function
  let tracker = [];
  document.body.addEventListener('keydown', function(e){
    tracker.push(e.which || e.detail);
    //if length == code.length
    if(tracker.length === code.length){
      //if tracker == code : success
      alert('great job buddy!');
    } //else remove first element
      else{code.shift()}
  }); 
}