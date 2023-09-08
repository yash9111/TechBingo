const logos = [

    'images/js.png',
    'images/mysql.png',
    'images/python.png'
    , "images/0001.png"
    , "images/0002.jpg"
    , "images/0003.jpg"
    , "images/0004.jpg"
    , "images/0005.jpg"
    , "images/0006.jpg"
    , "images/0007.jpg"
    , "images/0008.jpg"
    , "images/0009.jpg"
    , "images/0010.jpg"
    , "images/0011.jpg"
    , "images/0012.jpg"
    , "images/0013.jpg"
    , "images/0014.jpg"
    , "images/0015.jpg"
    , "images/0016.jpg"
    , "images/0017.jpg"
    , "images/0018.jpg"
    , "images/0019.jpg"
    , "images/0020.jpg"
    , "images/0021.jpg"
    , "images/0022.jpg"
    , "images/0023.jpg"
    , "images/0024.jpg"
    // , "images/0024.jpg"

];



// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to generate a random Bingo card
function generateBingoCard() {
    const card = document.createElement('div');
    card.className = 'bingo-card';

    const shuffledLogos = [...logos]; // Copy the logos array
    shuffleArray(shuffledLogos); // Shuffle the logos

    for (let i = 0; i < 25; i++) {
        const logo = document.createElement('img');
        logo.src = shuffledLogos[i];
        logo.className = 'logo';

        // Add a click event listener to toggle the 'logo-clicked' class
        logo.addEventListener('click', () => {
            logo.classList.toggle('logo-clicked');
        });

        card.appendChild(logo);
    }

    return card;
}

// Add a confirmation dialog when the page is reloaded
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
});

// Function to reset the game when the user confirms reload
function resetGame() {
    const confirmed = confirm("Are you sure you want to reset the game?");
    if (confirmed) {
        // Reload the page to reset the game
        location.reload();
    }
}

// Generate two Bingo cards with different logo combinations
const card1 = generateBingoCard();
// const card2 = generateBingoCard();

// Add the cards to the HTML document
const cardContainer1 = document.getElementById('card1');
// const cardContainer2 = document.getElementById('card2');
cardContainer1.appendChild(card1);
// cardContainer2.appendChild(card2);

