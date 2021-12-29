const board = document.querySelector('#board');
const SQUARES_NUMBER = 506;
const colors = ['#00ff9f', '#00b8ff', '	#001eff', '#bd00ff', '#d600ff', '#fcec0c', '#ff124f'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
}

function setColor(element) {
    const color = colors[getRandomColor()]
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    const index = Math.floor(Math.random() * (colors.length - 1));
    return index;
}