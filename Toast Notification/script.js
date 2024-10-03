const successBtn = document.querySelector('.success');
const errorBtn = document.querySelector('.error');
const invalidBtn = document.querySelector('.invalid');
const toastWrapper = document.querySelector('.toast-wrapper');
const toast = document.querySelector('.toast');


successBtn.addEventListener('click', () => {

  const card = document.createElement('div');
  card.classList.add('toast');
  card.innerHTML = `<p class="green"><i class="fa-solid fa-circle-check green"></i> Successful</p>`;
  toastWrapper.appendChild(card);

  card.classList.add('success');

  setTimeout(()=>{
    card.remove();
  },4000);

});

errorBtn.addEventListener('click', () => {

  const card = document.createElement('div');
  card.classList.add('toast');
  card.innerHTML = `<p class="red"><i class="fa-solid fa-circle-exclamation red"></i> Error</p>`;
  toastWrapper.appendChild(card);

  card.classList.add('error');

  setTimeout(()=>{
    card.remove();
  },4000);
  
});

invalidBtn.addEventListener('click', () => {

  const card = document.createElement('div');
  card.classList.add('toast');
  card.innerHTML = `<p class="orange"><i class="fa-solid fa-triangle-exclamation orange"></i> Invalid</p>`;
  toastWrapper.appendChild(card);

  card.classList.add('invalid');
  
  setTimeout(()=>{
    card.remove();
  },4000);
  
});