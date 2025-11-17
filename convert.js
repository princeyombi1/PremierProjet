const celsuisToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
}

const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5/9;
}

const celsuis = document.getElementById('c');
const fahrenheit = document.getElementById('f');

celsuis.addEventListener('input', () => {
    const celsiusValue = parseFloat(celsuis.value);
    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = celsuisToFahrenheit(celsiusValue);  
        fahrenheit.value = fahrenheitValue.toFixed(2);
    } else {
        fahrenheit.value = '';
    }   
});

fahrenheit.addEventListener('input', () => {
    const fahrenheitValue = parseFloat(fahrenheit.value);
    if (!isNaN(fahrenheitValue)) {
        const celsiusValue = fahrenheitToCelsius(fahrenheitValue);  
        celsuis.value = celsiusValue.toFixed(2);
    } else {
        celsuis.value = '';
    }   
});


