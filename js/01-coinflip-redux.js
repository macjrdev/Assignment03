let coinFlip
for (let i = parseInt(prompt('Enter a number')); i <= 10; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("Heads")
    } else {
        console.log("Tails")
    };
};