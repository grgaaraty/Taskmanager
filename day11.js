// Grab elements from HTML
let greetBtn = document.getElementById("greetBtn");
let nameInput = document.getElementById("nameInput");
let demo = document.getElementById("demo");

// Add click event to button
greetBtn.onclick = function() {
    let name = nameInput.value; 
    if(name === "") {
        demo.innerHTML = "Please enter your name!!!";
    } else {
        demo.innerHTML = "Hello, " + name + "! Welcome to Day 11 JS.";
    }
    console.log("Button clicked. Name:", name); // debug in console
}
