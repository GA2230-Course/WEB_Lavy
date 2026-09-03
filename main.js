const button = document.getElementById('button');
const rect = button.getBoundingClientRect();

const text = document.getElementById('button-text');

document.addEventListener('click', function(event) {
    if (event.clientX > rect.left & event.clientX < rect.right & event.clientY > rect.top & event.clientY < rect.bottom) {
        text.style.visibility = "hidden";
        setTimeout(() => {text.style.visibility = "visible";}, 1000)
    }
});