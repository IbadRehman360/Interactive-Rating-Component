const ratingCircles = document.querySelectorAll('.rating-circle');
const submitButton = document.querySelector('.feedback-button');

let selectedRating = null;

ratingCircles.forEach(ratingElement => {
  ratingElement.addEventListener('click', function () {

    ratingCircles.forEach(circle => {
      circle.classList.remove('selected');
    })

    this.classList.add('selected');


  })
})

