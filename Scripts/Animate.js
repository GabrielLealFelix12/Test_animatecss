const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });



function Button1() {
  var texto = document.getElementById("anim");
  texto.innerHTML = ":)";
  animateCSS('#anim', 'bounce');
}

function Button2() {
  var texto = document.getElementById("anim");
  texto.innerHTML = ":/";
  animateCSS('#anim', 'flash');
}

function Button3() {
  var texto = document.getElementById("anim");
  texto.innerHTML = ">:/";
  animateCSS('#anim', 'rubberBand');
}