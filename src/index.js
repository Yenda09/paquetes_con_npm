const messages = [
    'Oscar',
    'Jessica',
    'David',
    'Laura',
    'Diego',
    'Ana',
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };