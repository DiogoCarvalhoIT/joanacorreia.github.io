window.addEventListener('load', function() {
    // Select the elements
    var textoNomeCompleto = document.getElementById('textoNomeCompleto');
    var texto = document.getElementById('texto');
    var text = document.getElementById('text');
    var buttons = document.getElementById('buttons');
  
    // Animate "textoNomeCompleto" to appear from the top after 0ms
    setTimeout(function() {
      textoNomeCompleto.style.opacity = 1;
      textoNomeCompleto.style.top = 0;
    }, 0);
  
    // Animate "texto" to appear from the top after 1000ms (1s)
    setTimeout(function() {
      texto.style.opacity = 1;
      texto.style.top = 0;
    }, 1000);
  
    // Animate "text" to appear from the top after 2000ms (2s)
    setTimeout(function() {
      text.style.opacity = 1;
      text.style.top = 0;
    }, 2000);
  
    // Animate "buttons" to appear from the top after 3000ms (3s)
    setTimeout(function() {
      buttons.style.opacity = 1;
      buttons.style.top = 0;
    }, 3000);
  });
  