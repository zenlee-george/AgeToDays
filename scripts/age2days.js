const ageInput = document.getElementById('age');
const resultParagraph = document.getElementById('result');

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const age = ageInput.value;
        const days = calculateDays(age);
        resultParagraph.textContent = `You are ${days} days old!`;
    });
});

function calculateDays(age) {
    const daysInYear = 365;
    return age * daysInYear;
}