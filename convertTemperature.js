document.getElementById('degreeSelect').addEventListener('click' , function(){

    var fromUnit = document.getElementById("degreeSelect").value;
    var toUnitDropdown = document.getElementById("selectDegree");

if (fromUnit === "Celsius") {
    toUnitDropdown.value = "Fahrenheit";
} else if (fromUnit === "Fahrenheit") {
    toUnitDropdown.value = "Celsius";
};  
})
  
function ConvertTemprature() {
    var inputTemperature = parseFloat(document.getElementById("num").value);
    var fromUnit = document.getElementById("degreeSelect").value;
    var toUnit = document.getElementById("selectDegree").value;

    if (fromUnit === "Celsius") {
        if (toUnit === "Fahrenheit") {
            result = (inputTemperature * 9 / 5) + 32;
        } else {
            result = inputTemperature; 
        }
    } else if (fromUnit === "Fahrenheit") { 
        if (toUnit === "Celsius") {
            result = ((inputTemperature - 32) * 5) / 9;
        } else {
            result = inputTemperature; 
        }
    }

    var resultBox = document.querySelector(".view");
    resultBox.innerHTML = `<h4>${result.toFixed(2)}<span style="vertical-align: super; font-size: 20px;">&deg;${toUnit.charAt(0)}</span></h4>`;
}
