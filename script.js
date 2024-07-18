// game setup
const cardsContainer = document.querySelector("#cards-container");
const wrong = new Audio("./sound/wrong.mp3");
const correct = new Audio("./sound/correct.mp3");

const music = new Audio("./sound/music.mp3");


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
    <div draggable="false" class="card" index="${Index}">
        <img draggable="false" class="front" src= ${cards[Index].image} >
        <img draggable="false" class="back" src="./images/unknown.png">
    </div>
    `;
}

// When a player clicks on a card, reveal the card by changing its state to "face up."


var CardsClicked = [];

const CardDivs = document.querySelectorAll(".card");

CardDivs.forEach((e) => {
  e.addEventListener("click", function () {
    music.play();

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


        setTimeout(() => {
          CardDivs.forEach((x)=> {
            if(x.getAttribute("index") == IndexA || x.getAttribute("index") == IndexB) {
              x.style.transform = "rotateY(360deg)"
              cards[IndexA].clicked = false;
              cards[IndexB].clicked = false;
            }
          })
        }, 1000)

        CardsClicked = []
      }

      if (cards[IndexA].name == cards[IndexB].name) {
        correct.play();
        CardsClicked = []
      }

    }
  });
});

