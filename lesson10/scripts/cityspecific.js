/*wheather summary*/
let page = document.getElementById('page').innerHTML
let town = ""
switch (page) {
  case "Preston":
  townID = "5604473";
  break;

  case "Soda Springs":
  townID = "5607916"
  break;
  
  case "Fish Haven":
  townID = "5585010"
  break;
  
  default:
    console.log("Error")
    break;
}
const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=" + townID + "&units=imperial&APPID=2e970bbe26c21090532401007b196b8f"
fetch(weatherAPI)
  .then((response) => response.json())
  .then((jsObject) =>{
    let temp = document.getElementById('temp');
    let speed = document.getElementById('speed');
    temp.textContent = jsObject.main.temp;
    speed.textContent = jsObject.wind.speed;
    windchill(temp.textContent, speed.textContent);
  });

  const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=" + townID + "&units=imperial&APPID=2e970bbe26c21090532401007b196b8f"
  fetch(forecastAPI)
    .then((response) =>response.json())
    .then((jsObject) =>{
    
      let tablerow = document.getElementsByClassName('tablerow');
      let tablehead = document.getElementsByClassName('forecastHead');
      let x = 0;
      for (i = 0; i < jsObject.list.length; i++) {
          if (jsObject.list[i].dt_txt.substring(11, 19) == "18:00:00" && x < tablerow.length) {
            
            //Temperature
            let text = document.createElement('p')
            text.innerHTML = jsObject.list[i].main.temp + "&#176;F";
            //Weather Icon
            let icon = jsObject.list[i].weather[0].icon;
            let image = document.createElement('img');
            let desc = jsObject.list[i].weather[0].description
            image.setAttribute('src', "https://openweathermap.org/img/wn/" + icon + ".png");
            //fill table
            tablerow[x].appendChild(image);
            tablerow[x].appendChild(text);
            //table header
            let day = new Date(jsObject.list[i].dt_txt.substring(0, 11));
            day = day.getDay();
            tablehead[x].innerHTML = daysOfWeek[day];
            x++

          }
        }
    });
function windchill(temp, speed){


let f, t, s;
t = temp;
s = speed;

if(t <= 50 && s >= 3){
  f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
  document.querySelector('#wind-chill').innerHTML = f.toFixed(2) + '&deg;';

} else{
  f = "N/A"
  document.querySelector('#wind-chill').innerHTML = f;

 
}

}
//document.querySelector('#current-temp').innerHTML = `${t}&deg;`; //'50&deg;';
//document.querySelector('#wind-speed').innerHTML = s + 'mph'; //'10mph;';

/*pancake*/

const aside =  document.querySelector('aside');

if(currentDate.getDay() === 4){
    aside.style.display = 'block';
} else {
  aside.style.display = 'none';
}

/*Web Font*/
WebFont.load({
  google: {
    families: [
       'Press Start 2P'
    ]
  }
});

/*Adjust Rating*/
function adjustRating(rating) {
  document.querySelector('#rating').textContent = rating;
}

let y = true

function disable(){
  let x = document.getElementById("defaultStorm");
if (y == true){
  x.setAttribute("disabled", "");
  y = false;
}
}