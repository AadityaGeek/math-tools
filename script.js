// script.js

let currentOpenTool = null;

function toggleTool(toolId) {
    const toolContent = document.getElementById(toolId);
    if (currentOpenTool && currentOpenTool !== toolContent) {
        currentOpenTool.style.display = 'none';
        clearCurrentToolInputs();
    }
    if (toolContent.style.display === 'none' || toolContent.style.display === '') {
        toolContent.style.display = 'block';
        currentOpenTool = toolContent;
    } else {
        toolContent.style.display = 'none';
        clearCurrentToolInputs();
    }
}

function clearCurrentToolInputs() {
    if (currentOpenTool) {
        const inputs = currentOpenTool.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
        const results = currentOpenTool.querySelectorAll('.result');
        results.forEach(result => {
            result.innerText = '';
            result.classList.remove('visible');
        });
        const rootSlider = document.getElementById('root');
        if (rootSlider) {
            rootSlider.value = '2';
            updateRootValue('2');
        }
    }
}

function calculatePower() {
    const base = parseFloat(document.getElementById('base').value);
    const exponent = parseFloat(document.getElementById('exponent').value);
    const result = Math.pow(base, exponent);
    displayResult('powerResult', `Result: ${result}`);
}

function clearPower() {
    clearInputs('powerTool');
}

function updateRootValue(value) {
    document.getElementById('rootValue').innerText = value;
}

function calculateRoot() {
    const number = parseFloat(document.getElementById('number').value);
    const root = parseFloat(document.getElementById('root').value);
    const result = Math.pow(number, 1 / root);
    displayResult('rootResult', `Result: ${result}`);
}

function clearRoot() {
    clearInputs('rootTool');
    document.getElementById('root').value = '2';
    updateRootValue('2');
}

function calculateLCM() {
    const numbers = document.getElementById('lcmRange').value.split(',').map(Number);
    const lcm = (a, b) => (a * b) / gcd(a, b);
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const result = numbers.reduce((acc, num) => lcm(acc, num));
    displayResult('lcmResult', `LCM: ${result}`);
}

function clearLCM() {
    clearInputs('lcmTool');
}

function calculateHCF() {
    const numbers = document.getElementById('hcfRange').value.split(',').map(Number);
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const result = numbers.reduce((acc, num) => gcd(acc, num));
    displayResult('hcfResult', `HCF: ${result}`);
}

function clearHCF() {
    clearInputs('hcfTool');
}

function calculateQuotientAndRemainder() {
    const dividend = parseFloat(document.getElementById('dividend').value);
    const divisor = parseFloat(document.getElementById('divisor').value);
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
    displayResult('quotientResult', `Quotient: ${quotient}`);
    displayResult('remainderResult', `Remainder: ${remainder}`);
}

function clearQuotient() {
    clearInputs('quotientTool');
}

function calculateFactorsAndPrimeFactors() {
    const number = parseInt(document.getElementById('factorNumber').value);
    let factors = [];
    let primeFactors = [];
    let n = number;
    
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            primeFactors.push(i);
            n /= i;
        }
    }
    
    displayResult('factorResult', `Factors: ${factors.join(', ')}`);
    displayResult('primeFactorResult', `Prime Factorization: ${primeFactors.join(' x ')}`);
}

function clearFactors() {
    clearInputs('factorTool');
}

function clearInputs(toolId) {
    const tool = document.getElementById(toolId);
    const inputs = tool.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
    const results = tool.querySelectorAll('.result');
    results.forEach(result => {
        result.innerText = '';
        result.classList.remove('visible');
    });
}

function displayResult(resultId, text) {
    const resultElement = document.getElementById(resultId);
    resultElement.innerText = text;
    resultElement.classList.add('visible');
}
