function ConvertTemprature() {
    var inputTemp = parseFloat(document.getElementById("num").value);
    var fromUnit = document.getElementById("degreeSelect").value;
    var toUnit = document.getElementById("degreeSelect2").value;

    var result; 

    if (fromUnit === "Celsius") {
        if (toUnit === "Fahrenheit") {
            result = (inputTemp * 9) / 5 + 32;
        } else if (toUnit === "Kelvin") {
            result = inputTemp + 273.15;
        } else {
            result = inputTemp; 
        }
    } else if (fromUnit === "Fahrenheit") {
        if (toUnit === "Celsius") {
            result = ((inputTemp - 32) * 5) / 9;
        } else if (toUnit === "Kelvin") {
            result = ((inputTemp - 32) * 5) / 9 + 273.15;
        } else {
            result = inputTemp; 
         }
    } else if (fromUnit === "Kelvin") {
        if (toUnit === "Celsius") {
            result = inputTemp - 273.15;
        } else if (toUnit === "Fahrenheit") {
            result = ((inputTemp - 273.15) * 9) / 5 + 32;
        } else {
            result = inputTemp; 
        }
    }

    var resultBox = document.querySelector(".view");
    resultBox.innerHTML = `<h3>${result.toFixed(2)}<span style="vertical-align: super;">&deg;${toUnit.charAt(0)}</span></h3>`;
}
