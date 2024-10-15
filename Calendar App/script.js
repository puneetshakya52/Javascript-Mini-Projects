const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function updateDate() {
  const now = new Date();
  date.innerText = now.getDate();
  day.innerText = days[now.getDay()];
  month.innerText = months[now.getMonth()];
  year.innerText = now.getFullYear();
}

setInterval(updateDate, 1000);

updateDate();
