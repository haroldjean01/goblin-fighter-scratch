/* Imports */
import { renderGoblin, renderHealth } from './render-utils.js';
const healthEl = document.querySelector('#health');
const goblinKillEl = document.querySelector('#goblins-stats');
const imgEl = document.querySelector('#img');
const goblinForm = document.querySelector('form');
const goblinsListEl = document.querySelector('#goblins');

/* State */
let goblinAmountCount = 0;
let healthCount = 10;
let goblinData = [
    { id: 1, name: 'Green Goblin', hp: 5 },
    { id: 2, name: 'Yellow Goblin', hp: 5 },
];
let currentId = 2;

//Submit New Goblins function
goblinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(goblinForm);
    const goblinInput = data.get('goblin-input');

    const newGoblin = {
        id: currentId,
        name: goblinInput,
        hp: Math.ceil(Math.random() * 5),
    };
    currentId++;
});

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
    goblinKillEl.textContent = '';
    for (let goblin of goblinData) {
        const goblinKillEl = renderGoblin(goblin);
        goblinKillEl.addEventListener('click', () => {
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

    const data = new GoblinData(goblinKillEl);

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

// (don't forget to call any display functions you want to run on page load!)
displayGoblinStats();
displayHeath();
displayGoblins();
