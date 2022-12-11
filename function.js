// Function than change the background color of the rating number when mouse is over or out //
const ratingButton = document.querySelectorAll(".rating-div");

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