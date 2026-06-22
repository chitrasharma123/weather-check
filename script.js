async function getWeather() {

    const city = document.getElementById("cityInput").value;

    const error = document.getElementById("error");

    error.innerHTML = "";

    if(city===""){
        error.innerHTML = "Please enter a city name.";
        return;
    }

    try {

        const response = await fetch(
            `https://wttr.in/${city}?format=j1`
        );

        if(!response.ok){
            throw new Error("Unable to fetch weather data.");
        }

        const data = await response.json();

        document.getElementById("city").innerHTML = city;

        document.getElementById("temp").innerHTML =
        data.current_condition[0].temp_C;

        document.getElementById("humidity").innerHTML =
        data.current_condition[0].humidity;

        document.getElementById("wind").innerHTML =
        data.current_condition[0].windspeedKmph;

        document.getElementById("condition").innerHTML =
        data.current_condition[0].weatherDesc[0].value;

    }

    catch(err){
        error.innerHTML = "City not found or network error!";
    }
}
