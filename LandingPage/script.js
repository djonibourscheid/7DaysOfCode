const newsletterForm = document.querySelector('.newsletter_form');

newsletterForm.addEventListener('submit', event => {
  event.preventDefault()
  console.log(event)
})