const weatherStatus = document.getElementById("weather-status");
const weatherCard = document.getElementById("weather-card");
const refreshButton = document.getElementById("refresh-weather");

const weatherDescriptions = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Light freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Slight snow",
  73: "Moderate snow",
  75: "Heavy snow",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

async function loadWeather() {
  const params = new URLSearchParams({
    latitude: "52.2297",
    longitude: "21.0122",
    current: "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m",
    timezone: "Europe/Warsaw",
    temperature_unit: "celsius",
    wind_speed_unit: "kmh",
    precipitation_unit: "mm",
  });

  refreshButton.disabled = true;
  weatherStatus.textContent = "Loading current weather…";

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
    if (!response.ok) throw new Error("Weather request failed");

    const data = await response.json();
    const current = data.current;
    if (!current) throw new Error("Weather data is unavailable");

    document.getElementById("temperature").textContent = Math.round(current.temperature_2m);
    document.getElementById("condition").textContent = weatherDescriptions[current.weather_code] ?? "Conditions unavailable";
    document.getElementById("apparent-temperature").textContent = Math.round(current.apparent_temperature);
    document.getElementById("humidity").textContent = current.relative_humidity_2m;
    document.getElementById("wind-speed").textContent = Math.round(current.wind_speed_10m);
    document.getElementById("precipitation").textContent = current.precipitation;

    const time = document.getElementById("weather-time");
    time.dateTime = current.time;
    time.textContent = current.time.replace("T", " ");

    weatherCard.hidden = false;
    weatherStatus.textContent = "";
  } catch (error) {
    weatherStatus.textContent = "Could not load the weather right now. Please try again.";
  } finally {
    refreshButton.disabled = false;
  }
}

refreshButton.addEventListener("click", loadWeather);
loadWeather();
