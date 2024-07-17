// game setup
const cardsContainer = document.querySelector("#cards-container");

// Create an array of card objects. Each card should have a value (or image) and a unique identifier.

var cards = [
  { name: "apple1", image: "./images/apple.png" },
  { name: "apple2", image: "./images/apple.png" },
  { name: "banana1", image: "./images/banana.png" },
  { name: "banana2", image: "./images/banana.png" },
  { name: "grapes1", image: "./images/grapes.png" },
  { name: "grapes2", image: "./images/grapes.png" },
  { name: "mango1", image: "./images/mango.png" },
  { name: "mango2", image: "./images/mango.png" },
  { name: "orange1", image: "./images/orange.png" },
  { name: "orange2", image: "./images/orange.png" },
  { name: "watermelon1", image: "./images/watermelon.png" },
  { name: "watermelon2", image: "./images/watermelon.png" },
];

// Randomly shuffle the array to mix up the card positions.

const shuffle = (array) => {
  for (let i = cards.length - 1; i > 0; i--) {
    // 12,11,10,9,8,7,6,5,4,3,2,1,0
    const randomNum = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[randomNum];
    array[randomNum] = temp;
  }
};

shuffle(cards);

console.log(cards);

// Render the cards face down on the game board (typically a grid layout).
var Index = -1;

for (let i = 0; i < 12; i++) {
  Index++;
  cardsContainer.innerHTML += `
    <div class="card" index="${Index}">
        <img class="front" src= ${cards[Index].image} >
        <img class="back" src="./images/unknown.png">
    </div>
    `;
}

// When a player clicks on a card, reveal the card by changing its state to "face up."

//transform: rotate(180deg) for .card

var CardsClicked = []

const CardDivs = document.querySelectorAll(".card");

CardDivs.forEach((e) => {
  e.addEventListener("click", function () {
    e.style.transform = "rotateY(180deg)";
    CardsClicked.push( e.getAttribute('index'))
  });
});

// Keep track of the first and second card selected, If two cards are face up

if(CardsClicked.length == 2) {
    let IndexA = CardsClicked[0];
    let IndexB = CardsClicked[1];

    if(cards[IndexA].name !== cards[IndexB].name) {
        console.log("both cards are not same!")
    }
}