const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const errorMessage = document.getElementById("errorMessage");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

convertBtn.addEventListener("click", convertTemperature);

function convertTemperature() {

    const inputValue = temperatureInput.value.trim();
    const unit = unitSelect.value;

    errorMessage.textContent = "";

    // Validate empty input
    if (inputValue === "") {
        showError("Please enter a temperature value.");
        clearResults();
        return;
    }

    // Validate numeric input
    const temperature = Number(inputValue);

    if (isNaN(temperature)) {
        showError("Please enter a valid numeric temperature.");
        clearResults();
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    // Convert based on selected input unit
    if (unit === "Celsius") {

        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;

    } else if (unit === "Fahrenheit") {

        fahrenheit = temperature;
        celsius = (temperature - 32) * 5 / 9;
        kelvin = celsius + 273.15;

    } else if (unit === "Kelvin") {

        kelvin = temperature;
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    // Check absolute zero
    if (celsius < -273.15 || kelvin < 0) {
        showError("Temperature cannot be below absolute zero.");
        clearResults();
        return;
    }

    // Display results
    celsiusResult.textContent = `${celsius.toFixed(2)} °C`;
    fahrenheitResult.textContent = `${fahrenheit.toFixed(2)} °F`;
    kelvinResult.textContent = `${kelvin.toFixed(2)} K`;
}

function showError(message) {
    errorMessage.textContent = message;
}

function clearResults() {
    celsiusResult.textContent = "-- °C";
    fahrenheitResult.textContent = "-- °F";
    kelvinResult.textContent = "-- K";
}