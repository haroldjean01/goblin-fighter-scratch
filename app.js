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
    goblinData.push(newGoblin);
    displayGoblins();
});

/* Events */

function goblinClickHandler(goblinData) {
    if (goblinData.hp <= 0) return;
    if (Math.random() < 0.33) {
        goblinData.hp--;
        alert('you smacked ' + goblinData.name);
    } else {
        alert(goblinData.name + ' dodged it');
    }
    if (Math.random() < 0.5) {
        healthCount--;
        alert(goblinData.name + ' smacked you');
    } else {
        alert(goblinData.hp === 0) {
            goblinKillEl++;
        }
        if(healthCount === 0) {
            imgEl.classList.add('You-Lost');
            alert('YOU LOSE!');
        }
        healthEl.textContent = healthCount;
goblinKillEl.textContent = goblinAmountCount;
    }
    const hpEl = document.getElementById(`goblin-hp-${goblinData.id}`);
hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

const faceEl = document.getElementById(`goblin-face-${goblinData.id}`);
faceEl.textContent = goblinData.hp > 0 ? '👿' : '🔥';
}

// /* Display Functions */
function displayGoblins() {
    goblinsListEl.textContent = '';
    for (let goblin of goblinData) {
        const goblinEl = renderGoblin(goblin);
        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });
        goblinKillEl.append(goblinEl);
    }
}
displayGoblins();
// // (don't forget to call any display functions you want to run on page load!)
// displayGoblinStats();
// displayHeath();
// displayGoblins();
