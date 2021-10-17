  // DOM MANIPULATION WITH EVENTS CHECKLIST
  // 1 Element dispatching event - '#form' & '#delet-all button'
  // 2 Event to listen for - 'submit' & 'click'
  // 3 Code to Run - 'handleFormSubmit' & 'handleDeleteAllClick' callback functions
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form'); // 1
  form.addEventListener('submit', handleFormSubmit); // 2 & 3

  const deleteAllButton = document.querySelector('#delete-all'); // 1
  deleteAllButton.addEventListener('click', handleDeleteAllClick); // 2 & 3
});

// DOM MANIPULATION CHECKLIST
// 1 create element
// 2 give new element content
// 3 add to the DOM attach to parent element
// 4 use DOM method appendChild

// callback function 'handleFormSubmit' - pass 'event' parameter, can be named anything
const handleFormSubmit = function (event) {
  event.preventDefault(); // prevent default page refresh behaviour when form submitted which resets everything

  console. dir(event.target);

  const carListItem = createCarListItem(event.target); // 1
  // 2 SKIP
  const carList = document.querySelector('#car-list'); // 3
  carList.appendChild(carListItem); // 4
  
  event.target.reset(); // reset target value whenever form submitted
};

// callback function 'createCarListItem' - pass 'form' parameter, can be named anything
const createCarListItem = function (form) {
  const carListItem = document.createElement('li'); // 1
  carListItem.classList = 'list-item'; // 2
  // 3 & 4 SKIP

  const carMake = document.createElement('h2'); // 1
  carMake.textContent = form.make.value; // 2
  // 3 SKIP
  carListItem.appendChild(carMake); // 4

  const carModel = document.createElement('h3'); // 1
  carModel.textContent = form.model.value; // 2
  // 3 SKIP
  carListItem.appendChild(carModel); // 4

  const carFuelType = document.createElement('p'); // 1
  carFuelType.textContent = form.fuel.value; // 2
  // 3 SKIP
  carListItem.appendChild(carFuelType); // 4

  const carNewOrUsed = document.createElement('p'); // 1
  carNewOrUsed.textContent = document.querySelector('input[name = new-used]:checked').value; // 2
  carListItem.appendChild(carNewOrUsed); // 

  return carListItem;
}

const handleDeleteAllClick = function (event) {
  const carList = document.querySelector('#car-list'); // 3
  carList.innerHTML = '';
}