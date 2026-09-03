const element = document.getElementById('button');
const rect = element.getBoundingClientRect();

document.addEventListener('click', function(event) {
    if (event.clientX > rect.left & event.clientX < rect.right & event.clientY > rect.top & event.clientY < rect.bottom) {
        setTimeout(() => {
            console.log("Pressed!")
        }, 1000)
    }
});