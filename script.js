const greeting = document.getElementById('greeting');
const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');

const redBox = document.getElementById('redBox');
const blueBox = document.getElementById('blueBox');
const greenBox = document.getElementById('greenBox');
const yellowBox = document.getElementById('yellowBox');

// Function to change box color 
function changeBoxColor(box, color) {
    if (box.style.backgroundColor == color) {
        box.style.backgroundColor = "";
    } else {
        box.style.backgroundColor = color;
    }
}

redBox.addEventListener('click', () => changeBoxColor(redBox, 'red'));
blueBox.addEventListener('click', () => changeBoxColor(blueBox, 'blue'));
greenBox.addEventListener('click', () => changeBoxColor(greenBox, 'green'));
yellowBox.addEventListener('click', () => changeBoxColor(yellowBox, 'yellow'));

// Function to change greetMessage
function greetMessage() {
    const name = nameInput.value.trim();
    if (name == "") {
        alert("Please enter your name");
        return;
    }else{
        greeting.innerHTML = "Hello.. " + name;
    }

    redBox.style.backgroundColor = 'red';
    blueBox.style.backgroundColor = 'blue';
    greenBox.style.backgroundColor = 'green';
    yellowBox.style.backgroundColor = 'yellow';
}

// Add event listener to button
greetButton.addEventListener('click', greetMessage);