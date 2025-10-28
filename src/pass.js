const face = document.querySelector('#face');
const message = document.querySelector('#message');
const button = document.querySelector('#button');


setTimeout(() => {
    face.innerText = "🥶";
    message.innerText = "으악! 벌써 겨울이야?";
    button.style.display = "block";
}, 3000);