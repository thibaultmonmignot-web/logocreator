const images = [
    "images/logo1.jpg",
    "images/logo2.jpg",
    "images/logo3.jpg"
];

let index = 0;

const img = document.getElementById("logo");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function updateImage(){
    img.src = images[index];
}

prev.onclick = function(){
    index--;
    if(index < 0){
        index = images.length - 1;
    }
    updateImage();
}

next.onclick = function(){
    index++;
    if(index >= images.length){
        index = 0;
    }
    updateImage();
}

updateImage();
