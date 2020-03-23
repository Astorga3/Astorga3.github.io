const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=2e970bbe26c21090532401007b196b8f&units=imperial';

fetch(apiURL)
    .then(
        response =>{
            return response.json();
        }
    )
    .then(
        jsObject => {
            console.log(jsObject);
            document.querySelector('#current-temp')
                .textContent = jsObject.main.temp;
            let image = 'https://openweathermap.org/img/w/' +
                jsObject.weather[0].icon +'.png';

            document.querySelector('#weather-icon')
                .setAttribute('src', image);

                let alt = jsObject.weather[0].description;

            document.querySelector('#weather-icon')
            .setAttribute('alt', alt);

           /* let weatherIcon = document.querySelector('#weather-icon');
            weatherIcon.setAttribute('src', image);
            weatherIcon.setAttribute('src', alt); 
            */

        }
    );