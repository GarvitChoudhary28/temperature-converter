document.getElementById("convertBtn").addEventListener("click", function () {
  const inputTemp = parseFloat(document.getElementById("inputTemp").value);
  const unitFrom = document.getElementById("unitFrom").value;
  const unitTo = document.getElementById("unitTo").value;

  if (!isNaN(inputTemp)) {
    let convertedTemp;

    if (unitFrom === "celsius") {
      if (unitTo === "fahrenheit") {
        convertedTemp = (inputTemp * 9/5) + 32;
      } else if (unitTo === "kelvin") {
        convertedTemp = inputTemp + 273.15;
      } else {
        convertedTemp = inputTemp;
      }
    } else if (unitFrom === "fahrenheit") {
      if (unitTo === "celsius") {
        convertedTemp = (inputTemp - 32) * 5/9;
      } else if (unitTo === "kelvin") {
        convertedTemp = (inputTemp - 32) * 5/9 + 273.15;
      } else {
        convertedTemp = inputTemp;
      }
    } else if (unitFrom === "kelvin") {
      if (unitTo === "celsius") {
        convertedTemp = inputTemp - 273.15;
      } else if (unitTo === "fahrenheit") {
        convertedTemp = (inputTemp - 273.15) * 9/5 + 32;
      } else {
        convertedTemp = inputTemp;
      }
    }

    const bodyElement = document.body;
    bodyElement.style.transition = "background-image 0.5s ease-in-out";

    // Change background image of the body based on temperature range
    if (convertedTemp < 0) {
      bodyElement.style.backgroundImage = "url('images/cold-weather.jpg')";
    } 
    else if (convertedTemp >= 0 && convertedTemp < 20) {
      bodyElement.style.backgroundImage = "url('images/mild-cool weather.jpg')";
    }
    else if (convertedTemp >= 20 && convertedTemp < 27) {
      bodyElement.style.backgroundImage = "url('images/summer.jpg')";
    }
    else if (convertedTemp >= 28 && convertedTemp < 35) {
      bodyElement.style.backgroundImage = "url('images/hot summer.jpg')";
    } 
    else {
      bodyElement.style.backgroundImage = "url('images/hot weather.jpg')";
    }
    
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Converted temperature: ${convertedTemp.toFixed(2)} ${unitTo}`;
  } else {
    document.getElementById("result").textContent = "Please enter a valid temperature.";
  }
});
