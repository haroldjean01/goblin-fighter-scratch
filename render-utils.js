export function renderHealth() {
    const div = document.createElement('div');
    div.classList.add('health');

    return div;
}

export function renderGoblin(goblin) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');

    div.classList.add('goblin');
    nameEl.classList.add('name');
    emojiEl.classList.add('emoji');

    nameEl.textContent = goblin.name;

    if (goblin.satisfaction === 1) {
        emojiEl.textContent = '😒';
    }

    if (goblin.satisfaction === 2) {
        emojiEl.textContent = '😐';
    }

    if (goblin.satisfaction === 3) {
        emojiEl.textContent = '😀';
    }

    div.append(nameEl, emojiEl);
    return div;
}
