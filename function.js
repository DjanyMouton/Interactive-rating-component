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
    submitBtn.classList.toggle('submit-click')
  })
  submitBtn.addEventListener('mouseout', () => {
    submitBtn.classList.remove('submit-click')
  })
};

changeBackgroundSubmitButton();