function imgSlider(image) {
    const imgElement = document.getElementById('phone'); 
    imgElement.src = image; 
}

function circleChange(color) {
    const circle = document.querySelector('.circle')
    circle.style.background = color; 
}


document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.log('Erro ao carregar o header:', error));
});
