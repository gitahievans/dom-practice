// 1. make the colors functional.
const redColor = document.querySelector(".red");
const greyColor = document.querySelector(".gray");
const blackColor = document.querySelector(".black");
const cartButton = document.querySelector("#button");
const itemTag = document.querySelector(".tag");
const imageCard = document.querySelector(".product-image");
const feedBackBtn = document.querySelector(".feedback");

redColor.addEventListener("click", () => {
  itemTag.style.backgroundColor = "red";
  imageCard.style.backgroundImage = 'url("car.jpg")';
  cartButton.style.backgroundColor = "red";
});

greyColor.addEventListener("click", () => {
  itemTag.style.backgroundColor = "grey";
  imageCard.style.backgroundImage = 'url("grey-benz.jpg")';
  cartButton.style.backgroundColor = "grey";
});
blackColor.addEventListener("click", () => {
  itemTag.style.backgroundColor = "black";
  imageCard.style.backgroundImage = 'url("black-benz.jpg")';
  cartButton.style.backgroundColor = "black";
});
// <<-commit->>

// 2. Implement the Cart Button
// We 1st create a fucntion that hides the cart button and displays the feedback button. We will then pass that fucntion to the cart eventlistener as the 2nd parameter (handler).
const hideCartShowFeedback = () => {
  cartButton.style.display = "none";
  feedBackBtn.style.display = "block";
};

cartButton.addEventListener("click", hideCartShowFeedback);

// <<-commit->>
// 3. Implement the Feedback Button

// <<-commit->>
