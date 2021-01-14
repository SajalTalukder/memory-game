document.addEventListener("DOMContentLoaded", () => {
  const cardArr = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
  ];
  cardArr.sort(() => 0.5 - Math.random());
  const resultDisplay = document.querySelector(".result");
  const score = document.getElementById("score");
  let selectedId = [];
  let selectedName = [];
  let won = [];

  function checkForMath() {
    const cards = document.querySelectorAll("img");
    const idOne = selectedId[0];
    const idTwo = selectedId[1];

    if (idOne === idTwo) {
      cards[idOne].setAttribute("src", "images/blank.png");
      cards[idTwo].setAttribute("src", "images/blank.png");
      alert("You clicked The same picture");
    } else if (selectedName[0] === selectedName[1]) {
      cards[idOne].setAttribute("src", "images/white.png");
      cards[idTwo].setAttribute("src", "images/white.png");
      cards[idOne].removeEventListener("click", flip);
      cards[idTwo].removeEventListener("click", flip);
      won.push(selectedName);
    } else {
      cards[idOne].setAttribute("src", "images/blank.png");
      cards[idTwo].setAttribute("src", "images/blank.png");
      //   alert("sorry");
    }
    selectedName = [];
    selectedId = [];
    score.innerHTML = won.length;
    if (won.length === cardArr.length / 2) {
      const form = document.createElement("form");
      form.innerHTML = `<button>Reload<button>`;
      document.body.appendChild(form);
    }
  }

  function createBoard() {
    cardArr.forEach((item, index) => {
      const element = document.createElement("img");
      element.setAttribute("src", "images/blank.png");
      element.setAttribute("data-id", index);
      element.addEventListener("click", flip);
      resultDisplay.appendChild(element);
    });
  }

  function flip() {
    const cardId = this.getAttribute("data-id");
    this.setAttribute("src", cardArr[cardId].img);
    selectedId.push(cardId);
    selectedName.push(cardArr[cardId].name);

    if (selectedName.length === 2) {
      setTimeout(checkForMath, 1000);
    }
  }

  createBoard();
});
