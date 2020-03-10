'use strict';
console.log('This is the pizza tracker linking up');


var pizzaIndex1 = 0;
var pizzaIndex2 = 1;
var totalClicks = 0;
var allPizzas =[];


//add constructor function
function Pizza(name, imageURL ) {
    this.name = name;
    this.imgURL = imageURL;
    this.timesClicked = 0;
    allPizzas.push(this);
}

//create new objects
new Pizza('Brick Oven Pizza', 'images/brickOvenPizza.jpeg');
new Pizza('Calzone', 'images/calzone.jpeg');
new Pizza('Chicago Deep Dish', 'images/chicagoDeepDish.jpeg');
new Pizza('Chicago Pizza and Oven Grinder', 'images/cpogGrinderPizza.jpeg');

function imageWasClicked() {
//track total clicks
totalClicks++;
    // console.log('image was clicked');
    if (event.srcElement.id === '1') {
        allPizzas[pizzaIndex1].timesClicked++;
        // img1Clicked++;
    } else if (event.srcElement.id === '2') {
        // img2Clicked++;
        allPizzas[pizzaIndex2].timesClicked++;
    }


    if ( totalClicks >= 5) {
        var footerElement = document.getElementById('footy')
        footerElement.textContent = `You picked pizza 1 ${Pizza[0]} times and Pizza 2 ${img2Clicked} times.`;
        console.log('running');
    }
}
//Pick a random picture to display
imageElements[0].src = allPizzas[pizzaIndex1].imageURL;
imageElements[1].src = allPizzas[pizzaIndex2].imageURL;

var nextPizzaIndex1 = Math.floor(Math.random() * allPizzas.length);
while ((nextPizzaIndex1 === pizzaIndex1) || (nextPizzaIndex1 === pizzaIndex2)) {
    nextPizzaIndex1 = Math.floor(Math.random() * allPizzas.length);
} 
var nextPizzaIndex2 = Math.floor(Math.random() * allPizzas.length);
while ((nextPizzaIndex2 === pizzaIndex2) || (nextPizzaIndex2 === pizzaIndex1)) {
    nextPizzaIndex2 = Math.floor(Math.random() * allPizzas.length);
}

//add logic so that we dont see the same images from click to click



//set up a ref to a pizzaIndex1
pizzaIndex1 = nextPizzaIndex1;
pizzaIndex2 = nextPizzaIndex2;




var imageElements = document.getElementsByTagName('img');

for (var i = 0; i < imageElements.length; i++) {
    console.log('this is the event listener for the click on pizza element');
    // debugger;
    imageElements[i].addEventListener('click', imageWasClicked);
}