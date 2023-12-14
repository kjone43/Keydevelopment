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

function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');

    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}