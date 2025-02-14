document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

const text = "Welcome to Rohan's Dev Hub";
let index = 0;

function typeEffect() {
    const element = document.querySelector(".typing-text");
    if (element) {
        element.textContent = text.slice(0, index++);
        if (index <= text.length) {
            setTimeout(typeEffect, 100);
        }
    }
}