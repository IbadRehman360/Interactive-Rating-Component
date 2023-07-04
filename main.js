const feedbackContainer = document.querySelector('.feedback-container');
const thankyou = document.querySelector('.thank-you-container');
const ratingCircles = document.querySelectorAll('.rating-circle');
const selectedRatingElement = document.getElementById('selected-rating');
const submitButton = document.querySelector('.feedback-button');

let selectedRating = null;

ratingCircles.forEach(ratingElement => {
  ratingElement.addEventListener('click', function () {

    ratingCircles.forEach(circle => {
      circle.classList.remove('selected');
    })

    this.classList.add('selected');
    selectedRating = this.textContent
    selectedRatingElement.textContent = selectedRating;


  })
})

submitButton.addEventListener('click', function () {
  
  if (selectedRating) {
    feedbackContainer.classList.add('hidden');
    thankyou.classList.remove('hidden');
    thankyou.classList.add('show');
  } else {
    alert('Please select a rating before submitting.');
  }
})