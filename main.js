const API_KEY = 'e832ce972755f272d0d9cf10f5913b38';




/* Получаем название города */
const form = document.querySelector('#form');
const input = document.querySelector('#inputCity');
// let city;
const header = document.querySelector('.header');

// Слушаем отправки формы
form.onsubmit = function(e) {
    // Отмена отправки формы
    e.preventDefault();

    // Получаем название города, обрезаем пробелы
    let city = input.value.trim();
    
    // делаем запрос на сервер
    //адрес запроса
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`

    // выполняем запрос на сервер
    fetch(url).then(response => {
        return response.json();
    })
    .then((data) => {
        //Поверка на ошибку
        console.log(data); 
        console.log(data.name); 
        console.log(data.sys.country); 
        console.log(data.main.temp);
        console.log(data.weather[0].main);





    // выводим данные на страницу

    //удаляем предыдущую карточку
    const prevCard = document.querySelector('.card');
    if (prevCard) {
        prevCard.remove();
    }
    // Разметка для карточки
        const html = `<div class="card">
        <h2 class="card-city">${data.name}<span>${data.sys.country}</span></h2>
        <div class="card-weather">
            <div class="card-value">${Math.trunc(data.main.temp)}<sup>°C</sup></div>
// <img src="./img/cloud.webp" alt="облачно" class="card-img">
            <a href="https://api.openweathermap.org/data/2.5/weather?q=${data.weather[0].icon}"><img src=".png" alt=""></a>
        </div>
        <div class="card-description">${data.weather[0].main}</div>
    </div>`;
    
    // отображаем карточку на странице
        header.insertAdjacentHTML('afterend', html);
    });
}






