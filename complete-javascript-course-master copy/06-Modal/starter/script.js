'use strict';
//modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtn = document.querySelectorAll('.show-modal'); //when we have same class for multiple we use all to print all and we can loop through them
const closeModal = function () {
  modal.classList.add('hidden'); //add hidden component to modal
  overlay.classList.add('hidden');
};
const hideModal = function () {
  //showing the paragraph which has hidden and putting on click
  modal.classList.remove('hidden'); //we don't need '.' for class here as it is not a selector
  //blur bakground
  overlay.classList.remove('hidden');
};
//Handling 'ESC' key press events or any keyboard events
//KEYBOARD EVENTS are listened on whole documents
//THere are 3 types - Keydown, keyup , key press
document.addEventListener('keydown', function (event) {
  console.log(`${event.key} is pressed`);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener('click', hideModal);
}
closeModalBtn.addEventListener('click', closeModal); //closing modal on clicking 'x'
overlay.addEventListener('click', closeModal); //closing modal on clicking anywhere on screen
