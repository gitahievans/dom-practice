// 1. make the colors functional.
const redColor = document.querySelector(".red");
const greyColor = document.querySelector(".gray");
const blackColor = document.querySelector(".black");
const cartButton = document.querySelector("#button");
const itemTag = document.querySelector(".tag");
const imageCard = document.querySelector(".product-image");
const feedBackBtn = document.querySelector(".feedback");
// const feedbackMessage = document.querySelector("#white-button");
const newPrice = document.querySelector(".new-price");
const oldPrice = document.querySelector(".old-price s");

redCar = 'url("car.jpg")';
greyCar = 'url("grey-benz.jpg")';
blackCar = 'url("black-benz.jpg")';

redColor.addEventListener("click", () => {
  itemTag.style.backgroundColor = "red";
  imageCard.style.backgroundImage = redCar;
  cartButton.style.backgroundColor = "red";
  newPrice.textContent = "$134000";
  oldPrice.textContent = "$140000";
});

greyColor.addEventListener("click", () => {
  itemTag.style.backgroundColor = "grey";
  imageCard.style.backgroundImage = greyCar;
  cartButton.style.backgroundColor = "grey";
  newPrice.textContent = "$154000";
  oldPrice.textContent = "$180450";
});

blackColor.addEventListener("click", () => {
  itemTag.style.backgroundColor = "black";
  imageCard.style.backgroundImage = blackCar;
  cartButton.style.backgroundColor = "black";
  newPrice.textContent = "$203700";
  oldPrice.textContent = "$275600";
});
// <<-commit->>

// 2. Implement the Cart Button
// We 1st create a fucntion that hides the cart button and displays the feedback button. We will then pass that fucntion to the cart eventlistener as the 2nd parameter (handler).
const cart = () => {
  cartButton.style.display = "none";
  feedBackBtn.style.display = "block";
};

cartButton.addEventListener("click", cart);

// <<-commit->>

// 3. Implement the Feedback Button
const feedback = () => {
  //   if ((imageCard.style.backgroundImage = redCar)) {
  //     feedbackMessage.textContent =
  //       "🥳 Woohoo, You're about to own a red benz 🎊";
  //   } else if ((imageCard.style.backgroundImage = greyCar)) {
  //     feedbackMessage.textContent =
  //       "🥳 Woohoo, You're about to own a grey benz 🎊";
  //   } else {
  //     feedbackMessage.textContent =
  //       "🥳 Woohoo, You're about to own a black benz 🎊";
  //   }

  feedBackBtn.style.display = "none";
  cartButton.style.display = "block";
};
feedBackBtn.addEventListener("click", feedback);
// <<-commit->>

// if click cart button while car is of particular color, feedback should mention the color.
