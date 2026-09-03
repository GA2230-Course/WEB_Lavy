document.addEventListener('click', function(event) {
    const element = document.getElementById('button');
    const rect = element.getBoundingClientRect();

    if (event.clientX > rect.left & event.clientX < rect.right & event.clientY > rect.top & event.clientY < rect.bottom) {
        console.log("Pressed!")
    }
});