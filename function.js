// Function than change the background color of the rating number when mouse is over or out //
const ratingButton = document.querySelectorAll(".rating-div");
let arr = [];
function changeClassRatingButton(){
  for (let i = 0; i < ratingButton.length; i++) {
      ratingButton[i].addEventListener("mouseover", () => {
        ratingButton[i].classList.toggle("rating-hover");
      });
      ratingButton[i].addEventListener("mouseout", () => {
         ratingButton[i].classList.remove("rating-hover")
      });
  }
};
changeClassRatingButton();

// Function than change the backgound of the submit button

const submitBtn = document.querySelector('.submit-btn');

function changeBackgroundSubmitButton(){
  submitBtn.addEventListener('mouseover', () => {
    console.log('oui')
    submitBtn.classList.toggle('submit-click')
  })
  submitBtn.addEventListener('mouseout', () => {
    console.log('oui')
    submitBtn.classList.remove('submit-click')
  })
};

changeBackgroundSubmitButton();
 
// Function than take the rating value

let ratingButton1 = document.querySelector("#btn-1");
let ratingButton2 = document.querySelector("#btn-2");
let ratingButton3 = document.querySelector("#btn-3");
let ratingButton4 = document.querySelector("#btn-4");
let ratingButton5 = document.querySelector("#btn-5");

ratingButton1 = 1;
ratingButton2 = 2;
ratingButton3 = 3;
ratingButton4 = 4;
ratingButton5 = 5;


// Reprend au moment ou tu dois prendre la valeur des note pour les implanter dans le paragraphe qui suit
// "You selected ... out of 5"