const temperature = 8;
const windSpeed = 15;

function calculateWindChill(temp,windSpeed){
    let windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
    return windChill.toFixed(2); 
}
function displayWindChill(){
    const windChillElement = document.querySelector(".wind-chill");

    if (temperature <= 10 && windSpeed > 4.8) {
        let windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill} °C`
        
    } else {
        windChillElement.textContent = "N/A";
    }
};

window.onload = function() {
    displayWindChill(); 
};
