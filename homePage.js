
  function initializeSmoothScroll() {
    $(document).ready(function() {
      // Smooth scrolling when clicking on anchor links
      $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
          event.preventDefault();
          var offset = target.offset().top;
  
          // Subtract the height of any fixed navigation bar or header
          var headerHeight = $('nav').outerHeight(); // Adjust the selector based on your specific navigation bar or header element
  
          $('html, body').animate({
            scrollTop: offset - headerHeight
          }, 1000, function() {
            window.location.hash = target.selector;
          });
        }
      });
    });
  }
  

  function revealContent() {
    var elements = document.querySelectorAll('.reveal');
  
    elements.forEach(function(element) {
      var windowHeight = window.innerHeight;
      var revealTop = element.getBoundingClientRect().top;
      var revealPoint = 150;
  
      if (revealTop < windowHeight - revealPoint) {
        element.classList.add('active');
      } /*else {
        element.classList.remove('active');  -----> ESTE COMENTÁRIO FAZ QUE SEMPRE QUE SE DE SCROLL ELE NAO PRECISA DE RECARRAGER TUDO (SÓ FAZ AS "ANIMAÇÕES" NA PRIMEIRA VEZ) // se der reload na pagina ja teria que ver as animaçoes outra vez
      }*/
    });
  }
  
  // Add an event listener to the scroll event
  window.addEventListener("scroll", revealContent);
  
  // Call the revealContent function on page load
  window.addEventListener("load", revealContent);
  

  


  // Attach the revealSections function to the scroll event
  /*window.addEventListener("scroll", revealSections);
  
  // Call the revealSections function on page load
  window.addEventListener("load", revealSections);*/

// Get all image boxes
const imageBoxes = document.querySelectorAll('.image-box');

// Add event listener to the arrow left button
document.addEventListener('keydown', function (event) {
  if (event.key === 37) {
    // Loop through each image box and set them to Image1.png
    imageBoxes.forEach(function (box) {
      box.src = 'Image1.png';
    });
  }
});