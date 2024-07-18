// game setup
const cardsContainer = document.querySelector("#cards-container");
var wrong = new Audio(".mp3");

// Create an array of card objects. Each card should have a value (or image) and a unique identifier.

var cards = [
  { name: "apple", image: "./images/apple.png", clicked: false },
  { name: "apple", image: "./images/apple.png", clicked: false },
  { name: "banana", image: "./images/banana.png", clicked: false },
  { name: "banana", image: "./images/banana.png", clicked: false },
  { name: "grapes", image: "./images/grapes.png", clicked: false },
  { name: "grapes", image: "./images/grapes.png", clicked: false },
  { name: "mango", image: "./images/mango.png", clicked: false },
  { name: "mango", image: "./images/mango.png", clicked: false },
  { name: "orange", image: "./images/orange.png", clicked: false },
  { name: "orange", image: "./images/orange.png", clicked: false },
  { name: "watermelon", image: "./images/watermelon.png", clicked: false },
  { name: "watermelon", image: "./images/watermelon.png", clicked: false },
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

var CardsClicked = [];

const CardDivs = document.querySelectorAll(".card");

CardDivs.forEach((e) => {
  e.addEventListener("click", function () {
    e.style.transform = "rotateY(180deg)";

    if (cards[e.getAttribute("index")].clicked == false) {
      CardsClicked.push(e.getAttribute("index"));
      cards[e.getAttribute("index")].clicked = true;
    }

    if (CardsClicked.length == 2) {
      let IndexA = CardsClicked[0];
      let IndexB = CardsClicked[1];

      if (cards[IndexA].name != cards[IndexB].name) {
        wrong.play();
      }
    }
  });
});

