// Modal functionality
const modals = document.querySelectorAll('.modal');
const projectCards = document.querySelectorAll('.project-card');
const closeButtons = document.querySelectorAll('.close');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = "none";
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = "none";
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById("linkedin").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/your-profile", "_blank");
});

document.getElementById("github").addEventListener("click", function() {
    window.open("https://github.com/your-profile", "_blank");
});


