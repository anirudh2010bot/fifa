function scrollToSection() {

document.getElementById("about")
.scrollIntoView({
behavior:"smooth"
});

}

function toggleTheme() {

document.body.classList.toggle("light-mode");

}

function animateValue(id,end,duration){

let start = 0;

let increment = end/100;

let current = start;

let timer = setInterval(()=>{

current += increment;

if(current >= end){

current = end;

clearInterval(timer);

}

document.getElementById(id)
.innerText = Math.floor(current);

},duration/100);

}

animateValue("cups",22,2000);
animateValue("teams",211,2000);
animateValue("goals",172,2000);
animateValue("fans",5000,2000);

const winners = [
"Brazil",
"Germany",
"Italy",
"Argentina",
"France",
"Uruguay",
"England",
"Spain"
];

function displayWinners(list){

let container =
document.getElementById("winnersList");

container.innerHTML="";

list.forEach(country=>{

container.innerHTML += `
<div class="winner">
🏆 ${country}
</div>
`;

});

}

displayWinners(winners);

function filterWinners(){

let value =
document.getElementById("searchInput")
.value.toLowerCase();

let filtered =
winners.filter(item =>
item.toLowerCase().includes(value)
);

displayWinners(filtered);

}

function showYear(year,info){

document.getElementById("timelineInfo")
.innerHTML =
`<h3>${year}</h3><p>${info}</p>`;

}

const countryData = {

Brazil:{
cups:5,
finals:7,
description:"Most successful World Cup nation"
},

Germany:{
cups:4,
finals:8,
description:"European football powerhouse"
},

Argentina:{
cups:3,
finals:6,
description:"Home of Messi and Maradona"
},

Italy:{
cups:4,
finals:6,
description:"Legendary defensive football"
},

France:{
cups:2,
finals:4,
description:"Modern football giant"
}

};

function showCountryInfo(){

let country =
document.getElementById("country").value;

let data =
countryData[country];

document.getElementById("countryInfo")
.innerHTML = `

<h3>${country}</h3>

<p>🏆 World Cups: ${data.cups}</p>

<p>⚽ Finals Reached: ${data.finals}</p>

<p>${data.description}</p>

`;

}
