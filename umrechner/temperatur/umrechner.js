document.getElementById("celsius-eingabefeld").addEventListener("input", celsiusUmrechnen);
document.getElementById("fahrenheit-eingabefeld").addEventListener("input", fahrenheitUmrechnen);
document.getElementById("kelvin-eingabefeld").addEventListener("input", kelvinUmrechnen);

function celsiusFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

function celsiusKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitCelsius(fahrenheit) {
    return (fahrenheit) - 32 / 1.8;
}

function fahrenheitKelvin(fahrenheit) {
    return (fahrenheit - 32) / 1.8 + 273.15;
}

function kelvinCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinFahrenheit(kelvin) {
    return (kelvin - 273.15) * 1.8 + 32;
}

function celsiusUmrechnen(event) {
    const celsius = event.target.valueAsNumber;
    document.getElementById("fahrenheit-eingabefeld").value = celsiusFahrenheit(celsius);
    document.getElementById("kelvin-eingabefeld").value = celsiusKelvin(celsius);
}

function fahrenheitUmrechnen(event) {
    const fahrenheit = event.target.valueAsNumber;
    document.getElementById("celsius-eingabefeld").value = fahrenheitCelsius(fahrenheit);
    document.getElementById("kelvin-eingabefeld").value = fahrenheitKelvin(fahrenheit);
}

function kelvinUmrechnen(event) {
    const kelvin = event.target.valueAsNumber;
    document.getElementById("celsius-eingabefeld").value = kelvinCelsius(kelvin);
    document.getElementById("fahrenheit-eingabefeld").value = kelvinFahrenheit(kelvin);
}
