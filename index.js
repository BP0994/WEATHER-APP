
const apikey = "f7d8a52748ca495ea1d9ce7481746179"

const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const search_box = document.querySelector('.search input');
const search_btn = document.querySelector('.search button');


async function checkwether(city) {
          const response = await fetch(apiurl + city + `&appid=${apikey}`);
          var data = await response.json();
          if (response.status == 404) {
                    document.querySelector('.error').style.display = "block";
                    document.querySelector('.weather').style.display = "none";

          } else {

                    document.querySelector('.city').innerHTML = data.name;
                    document.querySelector('.temp').innerHTML = (Math.round(data.main.temp) + " °C");
                    document.querySelector('.humidity').innerHTML = data.main.humidity + " %";
                    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " Km/h";
                    
                    document.querySelector('.error').style.display = "none";
                    document.querySelector('.weather').style.display = "block";

          }
}

search_btn.addEventListener('click', () => {

          checkwether(search_box.value);
})
