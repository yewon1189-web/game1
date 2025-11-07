const face = document.querySelector('#face');
const message = document.querySelector('#message');
const button = document.querySelector('#button');


setTimeout(() => {
    image.style.opacity = 0;
    face.innerText = "🥶";
    message.innerText = "으악! 벌써 겨울이야?";
    button.style.display = "block";
}, 3000);

setTimeout(() => {
    document.querySelector("#image1").classList.add("fadeOut");
}, 2000);