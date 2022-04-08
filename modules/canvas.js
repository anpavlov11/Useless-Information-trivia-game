const target = document.querySelector(".directions");

target.addEventListener('click', () => target.style.opacity = '0');
target.addEventListener('transitionend', () => target.remove());

export {target};