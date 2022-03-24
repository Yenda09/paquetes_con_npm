const messages = [
    'Oscar',
    'Jessica',
    'David',
    'Laura',
    'Diego',
    'Ana',
    'Nicolas',
    'Paulina',
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };