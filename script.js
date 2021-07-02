// go to top button
var goToTopButton = document.getElementById("goToTop");

// Quand l'utilisateur scrolle vers le bas.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Quand l'utilisateur scrolle vers le bas, dès 50px le bouton apparaît.
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    goToTopButton.style.display = "block";
    // Sinon, il est invisible.
  } else {
    goToTopButton.style.display = "none";
  }
}

// Quand l'utilisateur clique sur le bouton, il revient en haut de la page.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
  var landingPopUp = sessionStorage.getItem('landingPopUp') || '';
  if (landingPopUp != 'yes') {
      $('#popUp').removeAttr('hidden');
      sessionStorage.setItem('landingPopUp','yes');
  }
})
