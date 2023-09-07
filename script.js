const logos = [
    // Add your logo URLs here
    // Example: 'logo1.png', 'logo2.png', ...

    'images/js.png',
    'images/mysql.png',
    'images/python.png',
    'images/js.png',
    'images/mysql.png',
    'images/python.png',
    'images/js.png',
    'images/mysql.png',
    'images/python.png',
    'images/js.png',
    'images/mysql.png',
    'images/python.png',
    'images/js.png',
    'images/mysql.png',
    'images/python.png',
    'images/js.png',
    'images/mysql.png',
    'images/python.png',
    'images/js.png',
    'images/mysql.png',
    'images/python.png',
    'images/js.png',
    'images/mysql.png',
    'images/python.png',
    'images/js.png',
    'images/mysql.png',
    'images/python.png',
    'images/js.png',
    'images/mysql.png',
    'images/python.png',
    'images/js.png',
    'images/mysql.png',
    'images/python.png',
    'images/js.png',
    'images/mysql.png',
    'images/python.png',
    'images/js.png',
    'images/mysql.png',
    'images/python.png',
    'images/js.png',
    'images/mysql.png',
    'images/python.png',
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

// Generate two Bingo cards with different logo combinations
const card1 = generateBingoCard();
// const card2 = generateBingoCard();

// Add the cards to the HTML document
const cardContainer1 = document.getElementById('card1');
// const cardContainer2 = document.getElementById('card2');
cardContainer1.appendChild(card1);
// cardContainer2.appendChild(card2);
