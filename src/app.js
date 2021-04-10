/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const suits = ["♣", "♠", "♥", "♦"];
  const cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  function randomCard() {
    let randomNumberSuit = Math.floor(Math.random() * 4);
    let randomValue = Math.floor(Math.random() * 13);

    return {
      suit: suits[randomNumberSuit],
      value: cardValues[randomValue]
    };
  }

  let cardContent = randomCard();

  const table = document.getElementById("table");
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="card-data" id="top">${cardContent.suit}</div>
    <div class="card-data" id="middle">${cardContent.value}</div>
    <div class="card-data" id="bottom">${cardContent.suit}</div>
  `;
  table.appendChild(card);
};
