const formButton = document.querySelector(".js-form button");

formButton.addEventListener('click', event => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();

  const birthDateEl = document.getElementById('birth-date').value.trim();
  const birthDate = birthDateEl.split('-').reverse().join('/');
      
  document.querySelector('.result').innerHTML = `${name} <br> ${birthDate}`;
});