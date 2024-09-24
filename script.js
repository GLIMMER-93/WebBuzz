// Sticky Navbar on Scroll
// Sticky Navbar on Scroll
window.onscroll = function () {
    const navbar = document.getElementById("navbar");
    if (window.pageYOffset > 100) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

// Modal handling for registration form
const modal = document.getElementById("registrationModal");
const openFormBtn = document.getElementById("openForm");
const closeFormBtn = document.getElementById("closeForm");

openFormBtn.onclick = function () {
    modal.classList.remove("hidden");
};

closeFormBtn.onclick = function () {
    modal.classList.add("hidden");
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.classList.add("hidden");
    }
};

// Form submission
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const data = {
        format: document.getElementById('format').value,
        team: document.getElementById('team').value,
        email: document.getElementById('email').value
    };
    console.log(data); // Demo output
    modal.classList.add("hidden");
    alert('Registration successful!');
});

// Dummy live score data
const liveScores = [
    { match: "ECE  vs  CSE", score: "145/4 (18 overs)" },
    { match: "EEE  vs  MME", score: "MME won by 5 Wickets" },
    { match: "CVILL vs CHE", score: "120/2 (15 overs)" }
];

// Populate live score content
const liveScoreContent = document.getElementById('liveScoreContent');
liveScores.forEach(score => {
    const scoreCard = document.createElement('div');
    scoreCard.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-lg');
    scoreCard.innerHTML = `
        <h3 class="text-xl font-bold mb-4">${score.match}</h3>
        <p class="text-gray-700">${score.score}</p>
    `;
    liveScoreContent.appendChild(scoreCard);
});

// Dummy schedule data
const schedule = [
    { date: "01/12/2024", match: "EEE vs ECE", venue: "Stadium 1" },
    { date: "03/12/2024", match: "CSE C vs CVILL", venue: "Stadium 2" },
    { date: "05/12/2024", match: "CHE vs  MME", venue: "Stadium 3" }
];

// Populate schedule content
const scheduleContent = document.getElementById('scheduleContent');
schedule.forEach(game => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class="border px-4 py-2">${game.date}</td>
        <td class="border px-4 py-2">${game.match}</td>
        <td class="border px-4 py-2">${game.venue}</td>
    `;
    scheduleContent.appendChild(row);
});
// Animate header text and button on page load
window.onload = function() {
    const headerText = document.querySelector('header h1');
    const headerButton = document.querySelector('header a');
    headerText.style.opacity = '0';
    headerButton.style.opacity = '0';

    setTimeout(() => {
        headerText.style.transition = 'opacity 2s';
        headerButton.style.transition = 'opacity 3s';
        headerText.style.opacity = '1';
        headerButton.style.opacity = '1';
    }, 500);
};
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Animate form submit button on click
const registerButton = document.querySelector('#registrationForm button');
registerButton.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
});
