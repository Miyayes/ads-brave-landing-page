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


