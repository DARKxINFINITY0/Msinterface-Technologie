// script.js

document.getElementById('convertButton').addEventListener('click', function() {
    const input = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelect').value;
    const output = document.getElementById('resultOutput');
    
    if (isNaN(input) || input === '') {
        output.textContent = 'Please enter a valid number.';
        return;
    }

    const temperature = parseFloat(input);

    let celsius, fahrenheit, kelvin;

    if (unit === 'celsius') {
        celsius = temperature;
        fahrenheit = (temperature * 9/5) + 32;
        kelvin = temperature + 273.15;
    } else if (unit === 'fahrenheit') {
        celsius = (temperature - 32) * 5/9;
        fahrenheit = temperature;
        kelvin = celsius + 273.15;
    } else if (unit === 'kelvin') {
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = temperature;
    }

    output.innerHTML = `
        ${celsius.toFixed(2)} °C<br>
        ${fahrenheit.toFixed(2)} °F<br>
        ${kelvin.toFixed(2)} K
    `;
});
