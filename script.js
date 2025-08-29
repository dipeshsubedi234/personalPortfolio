// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

// Scroll animations
function checkScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
    
    // Animate skill bars when in view
    const skillSection = document.getElementById('skills');
    if (skillSection) {
        const skillSectionPosition = skillSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (skillSectionPosition < screenPosition) {
            skillSection.classList.add('skill-animate');
        }
    }
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// // Form submission handling
// document.getElementById('contactForm').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     // Get form values
//     const name = this.querySelector('input[type="text"]').value;
//     const email = this.querySelector('input[type="email"]').value;
//     const subject = this.querySelector('input[placeholder="Subject"]').value;
//     const message = this.querySelector('textarea').value;
    
//     // Create mailto link
//     const mailtoLink = `mailto:dipeshsubedi563.2@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
//         `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
//     )}`;
    
//     // Open email client
//     window.location.href = mailtoLink;
    
//     // Show success message
//     alert('Your email client is opening with your message. Please click send to complete the process.');
    
//     // Reset form
//     this.reset();
// });

// Initialize animations on load
document.addEventListener('DOMContentLoaded', function() {
    checkScroll();
});