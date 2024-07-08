
const cities = ['Москва', 'Казань', 'Оренбург'];
let temperatures = [];
const block = document.createElement('div');
for (let i = 0; i < cities.length; i++) {
    temperature = Number(prompt(`Введите температуру для города ${cities[i]}`));
    temperatures.push(temperature);
    console.log(`Температура в городе ${cities[i]} равна: ${temperatures[i]}°С`);
    
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `Температура в городе <strong>${cities[i]}</strong> равна: <strong>${temperatures[i]}°С</strong>`
    block.appendChild(paragraph);
};
document.body.appendChild(block);



const minTemperature = Math.min(...temperatures);
console.log('min temperature is ' + minTemperature);
const minTemp= document.createElement('p');
minTemp.innerHTML = `Минимальная температура: <strong> ${minTemperature}</strong>`;
block.appendChild(minTemp);

const maxTemperature = Math.max(...temperatures);
console.log('max temperature is ' + maxTemperature);
const maxTemp= document.createElement('p');
maxTemp.innerHTML = `Максимальная температура:  <strong> ${maxTemperature}</strong>`;
block.appendChild(maxTemp);





