/* Imports */
import { renderGoblin, renderHealth } from './render-utils.js';

/* Get DOM Elements */
const healthEl = document.querySelector('health');
const goblinEl = document.querySelector('goblins-stats');
const goblinInput = document.querySelector('goblin-input');
const addGoblinButton = document.getElementById('goblin-button')
const goblinForm = document.querySelector('form');

/* State */

let healthCount = 10;

const goblinData = [
    {
        name: 'Red Goblin',
        satisfaction: 5,
    },
    {
        name: 'Yellow Goblin',
        satisfaction: 5,
    },
];

/* Events */
addGoblinButton.addEventListener('click', () => {
    if (Math.random() > .7) {
        alert('You hit the goblin!');
    }
    else {
        alert('You missed! No damage')
    }
    else if {
        alert('You missed! You took damage')
    }
})
/* Display Functions */
function displayGoblins() {
    goblinEl.textContent = '';
    for (let goblin of goblinData) {
        const goblinEl = renderGoblin(goblins);
        goblinEl.addEventListener('click', () => {
            if (goblins.satisfaction < 2 && goblinCount > 0) {
                goblins.satisfaction++;
            }
        })
    }
}
// (don't forget to call any display functions you want to run on page load!)
displayGoblinStats();
displayHeath();
displayGoblins();
