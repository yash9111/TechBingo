// const logos = [

//     'images/js.png',
//     'images/mysql.png',
//     'images/python.png'
//     , "images/0001.png"
//     , "images/0002.jpg"
//     , "images/0003.jpg"
//     , "images/0004.jpg"
//     , "images/0005.jpg"
//     , "images/0006.jpg"
//     , "images/0007.jpg"
//     , "images/0008.jpg"
//     , "images/0009.jpg"
//     , "images/0010.jpg"
//     , "images/0011.jpg"
//     , "images/0012.jpg"
//     , "images/0013.jpg"
//     , "images/0014.jpg"
//     , "images/0015.jpg"
//     , "images/0016.jpg"
//     , "images/0017.jpg"
//     , "images/0018.jpg"
//     , "images/0019.jpg"
//     , "images/0020.jpg"
//     , "images/0021.jpg"
//     , "images/0022.jpg"
//     , "images/0023.jpg"
//     , "images/0024.jpg"
//     // , "images/0024.jpg"

// ];



// Function to shuffle an array (Fisher-Yates algorithm)
const logos = [
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/js.png',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/mysql.png',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/python.png',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0001.png',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0002.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0003.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0004.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0005.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0006.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0007.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0008.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0009.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0010.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0011.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0012.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0013.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0014.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0015.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0016.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0017.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0018.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0019.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0020.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0021.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0022.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0023.jpg',
    'https://raw.githubusercontent.com/yash9111/TechBingo/master/images/0024.jpg'

];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateBingoCard() {
    const card = document.createElement('div');
    card.className = 'bingo-card';

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

const card1 = generateBingoCard();

const cardContainer1 = document.getElementById('card1');
cardContainer1.appendChild(card1);

