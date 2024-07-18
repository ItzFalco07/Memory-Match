// game setup
const cardsContainer = document.querySelector("#cards-container");

// Create an array of card objects. Each card should have a value (or image) and a unique identifier.

var cards = [
  { name: "apple1", image: "./images/apple.png", clicked: false},
  { name: "apple2", image: "./images/apple.png", clicked: false},
  { name: "banana1", image: "./images/banana.png", clicked: false },
  { name: "banana2", image: "./images/banana.png", clicked: false },
  { name: "grapes1", image: "./images/grapes.png", clicked: false },
  { name: "grapes2", image: "./images/grapes.png", clicked: false },
  { name: "mango1", image: "./images/mango.png", clicked: false },
  { name: "mango2", image: "./images/mango.png", clicked: false },
  { name: "orange1", image: "./images/orange.png", clicked: false },
  { name: "orange2", image: "./images/orange.png", clicked: false },
  { name: "watermelon1", image: "./images/watermelon.png", clicked: false },
  { name: "watermelon2", image: "./images/watermelon.png", clicked: false },
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

    if(cards[e.getAttribute("index")].clicked == false) {
      CardsClicked.push(e.getAttribute("index"));
      cards[e.getAttribute("index")].clicked = true;
    }

  });
});

// Keep track of the first and second card selected, If two cards are face up



if(CardsClicked.length == 2) {

  console.log("2 cards clicked!")
    // let IndexA = CardsClicked[0];
    // let IndexB = CardsClicked[1];

    // if(cards[IndexA].name != cards[IndexB].name) {
    //     console.log("both cards are not same!")
    // }
}