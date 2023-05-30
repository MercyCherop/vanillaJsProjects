// Feature One
function currentTime() {
  let timeNow = new Date();
  let hours = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let seconds = timeNow.getSeconds();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[timeNow.getDay()];
  // Format the time as HH:MM:SS
  let formattedTime = `${currentDay} ${hours}:${minutes}:${seconds}`;
  let currentTimeElement = document.querySelector("li#timeNow");
  currentTimeElement.textContent = formattedTime;
}

// Call the currentTime function to update the time initially
currentTime();

// Update the time every second using setInterval
setInterval(currentTime, 1000);

//Feature two

function displayCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-search").value;
  let h1 = document.querySelector("#currentCity");
  h1.innerHTML = cityInput;
}

let searchForm = document.querySelector("#form-id");
searchForm.addEventListener("submit", displayCity);

//Feature three

function tempConvert(event) {
  event.preventDefault();
  let changeTemp = document.querySelector("#tempNow");
  changeTemp.innerHTML = 40;
}

let tempValue = document.querySelector("#fahrenheit-temp");
tempValue.addEventListener("click", tempConvert);
