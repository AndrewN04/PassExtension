const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const userGenPass = document.getElementById('generatedPassword');

const passwordLength = document.querySelector('input[type=range');

const allCheckboxes = document.querySelectorAll('input[type=checkbox]');

const generatePassword = (length) => {
    document.getElementById('charLengthSpan').textContent = passwordLength.value;

    const checkDigits = document.getElementById('includeDigits').checked;
    const checkSpec = document.getElementById('includeSpec').checked;
    const checkCap = document.getElementById('includeCap').checked;

    userGenPass.value = '';

    let possibleChars = [];
    if (checkDigits) { digits.forEach(digit => possibleChars.push(digit)); }
    if (checkSpec) { specials.forEach(special => possibleChars.push(special)); }
    if (checkCap) {
        upperCase.forEach(cap => possibleChars.push(cap));
        lowerCase.forEach(lower => possibleChars.push(lower));
    }else{
        lowerCase.forEach(lower => possibleChars.push(lower));
    }

    for(let i = 0; i < length; i++){
        userGenPass.value += possibleChars[Math.floor(Math.random() * possibleChars.length)];
    }

}

generatePassword(passwordLength.value);

passwordLength.addEventListener('change', e => {
    let value = e.target.value;
    generatePassword(value);
});

allCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        generatePassword(passwordLength.value);
    });
});

const copyPassBtn = document.getElementById('copyPass');
const confirmation = document.getElementById('confirmation');
copyPassBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(userGenPass.value);
    confirmation.classList.add('active');
    setTimeout(() => {
        confirmation.classList.remove('active');
    }, 1500);
});