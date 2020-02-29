 /*declare date variable*/ 
let currentDate = new Date();
let fullDate;

/*day of week*/
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayOfWeek = currentDate.getDay();
fullDate = daysOfWeek[dayOfWeek];


/*day of month*/
let dayOfMonth = currentDate.getDate();
fullDate += ', ' + dayOfMonth;

/*month*/
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
fullDate += ' ' + months[currentDate.getMonth()];  

/*year*/
let year = currentDate.getFullYear();
fullDate += ' ' + year;

/*full date*/

document.querySelector('#current-date').textContent = fullDate;

function hamMenu(){
  document.querySelector(".flexnavigation").classList.toggle("responsive");  
}
/*wheather summary*/

let f, t, s;
t = 50;
s = 10;

if(t <= 50 && s >= 3){
  f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
  document.querySelector('#wind-chill').innerHTML = f.toFixed(2) + '&deg;';

} else{
  f = "N/A"
  document.querySelector('#wind-chill').innerHTML = f;

 
}

document.querySelector('#current-temp').innerHTML = `${t}&deg;`; //'50&deg;';
document.querySelector('#wind-speed').innerHTML = s + 'mph'; //'10mph;';





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