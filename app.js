const APIKYE = 'c4b469446da64a62a7455412241903';
// API URL format example: https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London&aqi=yes

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

// Referencing output fields
const cityName = document.getElementById('city-name');
const countryName = document.getElementById('countryName');
const localTime = document.getElementById('loc-time');
const temp = document.getElementById('temp');
const sup = document.getElementById('sup');

// Function to fetch weather data
async function getData(KYE, city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${KYE}&q=${city}&aqi=yes`);
    return await response.json();
}

// Event listener for search button click
searchBtn.addEventListener('click', async () => {
    const input = cityInput.value;
    document.getElementById('outputCard').style.visibility = 'visible';

    try {
        const result = await getData(APIKYE, input);

        cityName.innerText = `${result.location.name}, ${result.location.region}`;
        countryName.innerText = result.location.country;
        temp.innerText = result.current.temp_c;
        sup.innerText = '°C';
        localTime.innerText = result.location.localtime;

    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Could not fetch weather data. Please check the city name or try again later.");
    }
});
