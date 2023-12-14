// Navigation bar data
const navLinks = [
    { text: 'Home', link: '#' },
    { text: 'About', link: '#about' },
    { text: 'Services', link: '#services' },
    { text: 'Contact', link: '#contact' }
];

// Function to create the navigation bar
function createNavBar() {
    const navbar = document.getElementById('navbar');

    const ul = document.createElement('ul');
    ul.classList.add('navigation');

    navLinks.forEach(linkData => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.textContent = linkData.text;
        a.href = linkData.link;

        li.appendChild(a);
        ul.appendChild(li);
    });

    navbar.appendChild(ul);
}

// Call the function to create the navigation bar
createNavBar();

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.getElementById('slideshow').addEventListener('click', () => {
    currentSlide++;
    if (currentSlide === slides.length) {
        currentSlide = 0;
    }
    updateSlide();
});

function updateSlide() {
    const slideWidth = slides[currentSlide].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}