let hasBlackJack;
let isAlive;
let message = "";
let cards;
let sum;
const messageEl = document.getElementById("message-el");
const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");
const startBtnEl = document.getElementById("start-btn");
const newcardBtnEl = document.getElementById("newcard-btn");
const playerEl = document.getElementById("player-el");

let player = {
  name: "SL",
  chips: 145
}

startBtnEl.addEventListener("click", startGame);
newcardBtnEl.addEventListener("click", newCard);



function getRandomCard() {
  return Math.floor(Math.random() * 10 ) + 2;
}

function startGame () {
  isAlive = true;
  hasBlackJack = false;
  cards = [getRandomCard(), getRandomCard()]
  sum = cards.reduce((acc, card) => acc + card, 0)
  renderGame()
}

function newCard() {
  if (isAlive && !hasBlackJack)
  {
    const newcard = getRandomCard();
    console.log("Drawing a new card from the deck!", newcard)
    sum += newcard;
    cards.push(newcard);
    renderGame()
  }
}

function renderGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂"
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭"
    isAlive = false;
  }
  messageEl.textContent = message
  cardsEl.textContent = "Cards: "
  for (let i=0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  sumEl.textContent = `Sum: ${sum}`
  playerEl.textContent = `${player.name}: $${player.chips}`   

}




