/*const button = document.querySelector(' [data-id="enviar"]');
const url = document.querySelector('[data-id="url"]');
const rootImage = document.querySelector('[data-id="rootImage"]');

button.addEventListener('click', function() {
  if (url.value === '') {
    alert('Coloque a url da imagem');
    return;
  }
  rootImage.src = url.value;
})*/

interact('.draggable')
  .draggable({
    inertia: true,
    restrict: {
      restriction: "parent",
      endOnly: false,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    autoScroll: true,
    onmove: dragMoveListener
  });

  function dragMoveListener (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
    target.querySelector('[data-id="left"]').innerHTML = parseInt(x);
    target.querySelector('[data-id="top"]').innerHTML = parseInt(y);
  }
  window.dragMoveListener = dragMoveListener;