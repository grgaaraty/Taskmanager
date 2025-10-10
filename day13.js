function changeText() {
    document.getElementById("message").innerHTML = "Hello everyone a new text appears here!";
}

function changeColor() {
    document.getElementById("title").style.color = "purple";
    document.body.style.backgroundColor = "#f797c7ff";
}

function reset() {
    document.getElementById("message").innerHTML = "Click the button to change me!";
    document.getElementById("title").style.color = "black";
    document.body.style.backgroundColor = "white";
    document.getElementById("title").style.fontSize = 32;
    document.getElementById("message").style.display = "block"; // reset paragraph
}
let fontSize = 32;
function increaseFont() {
    fontSize += 5;
    document.getElementById("title").style.fontSize = fontSize + "px";
}

let isVisible = true;//making the paragraph visible 
function toggleParagraph() {
    let para = document.getElementById("message");
    if (isVisible) {
        para.style.display = "none";
        isVisible = false;
    } else {
        para.style.display = "block";
        isVisible = true;
    }
}

function askName() {
    let name = prompt("Enter your name to be printed:");
    if (name) {
        document.getElementById("message").innerHTML = "Hello, " + name + "! 🌺";
    }
}
