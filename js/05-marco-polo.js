for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.write(`Marco! Polo!<br>`);
    } else if (i % 5 === 0) {
        document.write(`Polo!<br>`);
    } else if (i % 3 === 0) {
        document.write(`Marco!<br>`);
    } else {
        document.write(`${i}<br>`);
    }
};