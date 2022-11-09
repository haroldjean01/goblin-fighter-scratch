/* Imports */
import { renderGoblin, renderHealth } from './render-utils.js';

/* Get DOM Elements */
const healthEl = document.querySelector('health');
const goblinEl = document.querySelector('goblins-stats');
const goblinInput = document.querySelector('goblin-input');
const addGoblinButton = document.getElementById('goblin-button');
const goblinForm = document.querySelector('form');

/* State */
let GoblinData = 0;
let healthCount = 10;
let goblinCount = 10;
const goblinData = [
    { id: 1, name: 'Mean One', hp: 5 },
    { id: 2, name: 'Big Bad One', hp: 5 },
];

/* Events */
goblinInput.addEventListener('click', () => {
    if (Math.random() > 0.7) {
        alert('You hit the goblin!');
    } else if (Math.random() > 0.5) {
        alert('You missed! No damage');
    } else {
        alert('You missed! You took damage');
    }
});
/* Display Functions */
function displayGoblins() {
    goblinEl.textContent = '';
    for (let goblin of goblinData) {
        const goblinEl = renderGoblin(goblin);
        goblinEl.addEventListener('click', () => {
            if (goblin.satisfaction < 2 && goblinCount > 0) {
                goblin.satisfaction++;
                displayGoblins();
            }
        });
    }
}
//add new names
addGoblinButton.addEventListener('submit', (e) => {
    // prevent default behavior of a form submit
    e.preventDefault();

    const data = new GoblinData(goblinEl);

    //make a new goblin object with the user input
    const goblinId = {
        id: goblinData,
        name: data.get('goblin-name'),
        hp: Math.ceil(Math.random() * 5),
    };

    goblinId++;

    //add newgoblin object to the array of goblins in state
    goblins.push(newGoblin);

    displaygoblins();
});

/* Display Functions */

// function displaygoblins() {
//     goblinEl.textContent = '';

//     for (let goblin of goblins) {
//         const goblinEl = renderGoblin(goblin);
//         goblinEl.addEventListener('click', () => {
//             goblinClickHandler(goblin);
//         });
//         goblinListEl.append(goblinEl);
//     }
// }

displayGoblins();
// (don't forget to call any display functions you want to run on page load!)
displayGoblinStats();
displayHeath();
displayGoblins();
