
const locationText = document.getElementById("locationText");
const statusText = document.getElementById("statusText");
const forecastCards = document.getElementById("forecastCards");

document.addEventListener("DOMContentLoaded", getUserLocation);

function getUserLocation() {
  if (navigator.geolocation) {
    statusText.textContent = "Requesting your location...";
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
  } else {
    showError("Geolocation is not supported by this browser.");
  }
}

function locationSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  locationText.textContent = `Latitude: ${latitude.toFixed(4)}, Longitude: ${longitude.toFixed(4)}`;
  getWeather(latitude, longitude);
}

function locationError(error) {
  if (error.code === error.PERMISSION_DENIED) {
    showError(
      "Location permission was denied. Please allow location access and reload the page.",
    );
  } else if (error.code === error.POSITION_UNAVAILABLE) {
    showError("Location information is unavailable right now.");
  } else if (error.code === error.TIMEOUT) {
    showError("The request to get your location timed out.");
  } else {
    showError("An unknown geolocation error occurred.");
  }
}

async function getWeather(latitude, longitude) {
  statusText.textContent = "Calling the weather API...";

  const apiUrl =
    "https://api.open-meteo.com/v1/forecast" +
    `?latitude=${latitude}` +
    `&longitude=${longitude}` +
    "&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset" +
    "&temperature_unit=fahrenheit" +
    "&timezone=auto" +
    "&forecast_days=7";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("The API request failed.");
    }

    const weatherObject = await response.json();
    statusText.textContent = "Weather loaded successfully.";
    createWeatherCards(weatherObject.daily);
  } catch (error) {
    showError(
      "The weather API could not be loaded. Please check your internet connection and try again.",
    );
    console.log(error);
  }
}

function createWeatherCards(daily) {
  forecastCards.innerHTML = "";

  for (let i = 0; i < daily.time.length; i++) {
    const card = document.createElement("div");
    card.classList.add("weather-card");

    const dateObject = new Date(daily.time[i] + "T00:00");
    const dayName = dateObject.toLocaleDateString("en-US", {
      weekday: "short",
    });
    const dateText = dateObject.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    const high = Math.round(daily.temperature_2m_max[i]);
    const low = Math.round(daily.temperature_2m_min[i]);
    const sunrise = formatTime(daily.sunrise[i]);
    const sunset = formatTime(daily.sunset[i]);

    card.innerHTML = `
            <p class="day">${dayName}</p>
            <p class="date">${dateText}</p>

            <div class="temp-row">
                <div class="temp-box">
                    <span>High</span>
                    <strong>${high}°</strong>
                </div>
                <div class="temp-box">
                    <span>Low</span>
                    <strong>${low}°</strong>
                </div>
            </div>

            <ul class="sun-info">
                <li>🌅 Sunrise: ${sunrise}</li>
                <li>🌇 Sunset: ${sunset}</li>
            </ul>
        `;

    forecastCards.appendChild(card);
  }
}

function formatTime(timeString) {
  const dateObject = new Date(timeString);
  return dateObject.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function showError(message) {
  statusText.textContent = "Something went wrong.";
  forecastCards.innerHTML = `<div class="error">${message}</div>`;
}
