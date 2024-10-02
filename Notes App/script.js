const addIconBtn = document.querySelector(".add-icon");
const notesContainer = document.querySelector(".notes-container");

const bgColor = ['#c9e4ca','#87ceeb','#c7b8ea','#ffe9d6','#ffb6c1'];
let colorIndex = 0;

addIconBtn.addEventListener('click',()=>{
  
  const container = document.createElement('div');
  container.classList.add('note');
  container.style.backgroundColor = bgColor[colorIndex];
  colorIndex = (colorIndex + 1) % bgColor.length;

  const noteHeading = document.createElement('h1');
  noteHeading.setAttribute('contenteditable','true');
  noteHeading.textContent = 'Notes Heading Here';
  container.appendChild(noteHeading);

  const notePara = document.createElement('p');
  notePara.setAttribute('contenteditable','true');
  notePara.textContent = 'Notes here...';
  container.appendChild(notePara);

  const binIcon = document.createElement('img');
  binIcon.setAttribute('src','images/bin.svg');
  binIcon.setAttribute('alt','delete-icon');
  container.appendChild(binIcon);

  binIcon.addEventListener('click',()=>{
    container.remove();
  });
  
  notesContainer.appendChild(container);

})