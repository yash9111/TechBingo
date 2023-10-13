const logos = [

    'images/js.png',
    'images/mysql.png',
    'images/python.png'
    , "images/0001.png"
    , "images/0002.png"
    , "images/0003.png"
    , "images/0004.jpg"
    , "images/0005.jpg"
    // , "images/0006.jpg"
    , "images/0007.png"
    , "images/0008.png"
    , "images/0009.png"
    // , "images/0010.jpg"
    , "images/0011.png"
    , "images/0012.png"
    , "images/0013.png"
    , "images/0014.jpg"
    , "images/0015.png"
    , "images/0016.png"
    , "images/0017.png"
    , "images/0018.jpg"
    , "images/0019.png"
    , "images/0020.jpg"
    , "images/0021.png"
    , "images/0022.png"
    , "images/0023.png"
    , "images/0024.png"
    // , "images/0024.jpg"

];



// Function to shuffle an array (Fisher-Yates algorithm)
// const logos = [
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/js.png',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/mysql.png',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/python.png',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0001.png',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0002.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0003.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0004.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0005.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0006.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0007.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0008.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0009.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0010.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0011.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0012.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0013.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0014.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0015.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0016.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0017.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0018.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0019.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0020.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0021.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0022.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0023.jpg',
//     'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0024.jpg'

// ];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateBingoCard() {
    const card = document.createElement('div');
    // card.className = 'bingo-card';

    const shuffledLogos = [...logos]; 
    shuffleArray(shuffledLogos); 

    for (let i = 0; i < 25; i++) {
        const logo = document.createElement('img');
        logo.src = shuffledLogos[i];
        logo.className = 'logo';

        logo.addEventListener('click', () => {
            logo.classList.toggle('logo-clicked');
        });

        card.appendChild(logo);
    }

    return card;
}



function generateCard()
{
    const card = document.createElement('div');
    // card.className = 'card';
    const bingoLogo = [
        'B.png',
        'I.png',
        'N.png',
        'G.png',
        'O.png',
    ];

    for (let i = 0; i < 5; i++) {
        const logo = document.createElement('img');
        logo.src = bingoLogo[i];
        logo.className = 'logo';

        logo.addEventListener('click', () => {
            logo.classList.toggle('logo-clicked');
        });

        card.appendChild(logo);
    }

    return card;

}

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
});

function resetGame() {
    const confirmed = confirm("Are you sure you want to reset the game?");
    if (confirmed) {
        location.reload();
    }
}

function checkForBingo() {
    const card = document.getElementById('card1'); 
    const logos = card.querySelectorAll('.logo'); 
    const bingoCard = document.getElementById('bingo-card'); 
    const letters = bingoCard.textContent; 

    const shouldCut = [false, false, false, false, false]; 

    function isGroupClicked(group) {
        return group.every((logo) => logo.classList.contains('logo-clicked'));
    }

    for (let i = 0; i < 5; i++) {
        const start = i * 5;
        const row = Array.from(logos).slice(start, start + 5);
        if (isGroupClicked(row)) {
            shouldCut[i] = true;
        }
    }

    for (let i = 0; i < 5; i++) {
        const column = [];
        for (let j = 0; j < 5; j++) {
            column.push(logos[j * 5 + i]);
        }
        if (isGroupClicked(column)) {
            shouldCut[i] = true;
        }
    }

    const diagonal1 = [logos[0], logos[6], logos[12], logos[18], logos[24]];
    const diagonal2 = [logos[4], logos[8], logos[12], logos[16], logos[20]];
    if (isGroupClicked(diagonal1) || isGroupClicked(diagonal2)) {
        shouldCut[2] = true; 
    }

    let updatedLetters = '';
    for (let i = 0; i < 5; i++) {
        updatedLetters += shouldCut[i] ? ' ' : letters[i];
    }

    bingoCard.textContent = updatedLetters;

}






const BingoCard=generateCard();
const cardContainer2 = document.getElementById('card9');
cardContainer2.appendChild(BingoCard);

const card1 = generateBingoCard();
const cardContainer1 = document.getElementById('card1');
cardContainer1.appendChild(card1);
// checkForBingo();

