// Function: Process Input
function processInput() {
    const input = document.getElementById('numberInput').value;

    if (isNaN(input) || input === '') {
        console.log('Please enter a valid number.');
        document.getElementById('output').textContent = 'Please enter a valid number.';
        return;
    }

    const number = parseFloat(input);
    let result = (number % 2 === 0) ? 'even' : 'odd';

    console.log(`The number ${number} is ${result}.`);
    document.getElementById('output').textContent = `The number ${number} is ${result}.`;
}

// Function: Calculate Total
function calculateTotal(price, quantity) {
    return price * quantity;
}

function showTotal() {
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    if (isNaN(price) || isNaN(quantity)) {
        document.getElementById('totalOutput').textContent = 'Enter valid numbers for price and quantity.';
        return;
    }
    const total = calculateTotal(price, quantity);
    document.getElementById('totalOutput').textContent = `Total: $${total.toFixed(2)}`;
}

// Function: Format Greeting
function formatGreeting(name) {
    return `Hello, ${name.trim()}! Welcome to the world of reusable functions.`;
}

function showGreeting() {
    const name = document.getElementById('nameInput').value;
    if (name.trim() === '') {
        document.getElementById('greetingOutput').textContent = 'Please enter a name.';
        return;
    }
    document.getElementById('greetingOutput').textContent = formatGreeting(name);
}

// Function: Toggle Content Visibility
function toggleVisibility() {
    const message = document.getElementById('toggleMessage');
    message.style.display = (message.style.display === 'none') ? 'block' : 'none';
}

// Function: Display Array Items
function displayArrayItems() {
    const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Peach'];
    const list = document.getElementById('arrayOutput');
    list.innerHTML = '';

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });
}

// Function: Start Countdown
function startCountdown() {
    let countdown = 10;
    const output = document.getElementById('countdownOutput');
    output.textContent = countdown;

    const intervalId = setInterval(() => {
        countdown--;
        output.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(intervalId);
            output.textContent = 'Countdown complete!';
        }
    }, 1000);
}

// Function: Change Text
function changeText() {
    const textElement = document.getElementById('textChanging');
    textElement.textContent = 'The text has been changed!';
}

// Function: Toggle Class
function toggleClass() {
    const classElement = document.getElementById('classToggle');
    classElement.classList.toggle('highlight');
}

// Function: Add Element
function addElement() {
    const container = document.getElementById('elementContainer');
    const newElement = document.createElement('p');
    newElement.textContent = 'A new element has been added dynamically!';
    container.appendChild(newElement);
}
