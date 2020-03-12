window.onload = setTimeout(function () {
  document.querySelector('.androidNotification').className = "androidNotification animated fadeInUp";
  setTimeout(removeAnimationAndroidNotification, 850);
}, 500);

function navBarFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Removes animate.css classes from AndroidNotification to reenable :hover effects
function removeAnimationAndroidNotification() {
  document.querySelector('.androidNotification').className = "androidNotification";
  console.log("removeAnimation");
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


