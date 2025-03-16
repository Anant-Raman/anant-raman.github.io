// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        navLinks.classList.add('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('active');
        menuOpen = false;
    }
});

// Close mobile menu when clicking nav links
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (menuOpen) {
            menuBtn.classList.remove('open');
            navLinks.classList.remove('active');
            menuOpen = false;
        }
    });
});

// Sticky Header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get filter value
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Scroll Animation for Skills
const skillLevels = document.querySelectorAll('.skill-level');
const skillsSection = document.querySelector('.skills-section');

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    
    if (sectionPos < screenPos) {
        skillLevels.forEach(level => {
            level.style.width = level.style.width || level.getAttribute('style').match(/width:\s*(\d+)%/)[1] + '%';
        });
    }
});

// Form Submission Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Basic form validation
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Here you would typically send the form data to a server
    // For demonstration, we'll just log to console and show an alert
    console.log({
        name,
        email,
        subject,
        message
    });
    
    alert('Thank you for your message! You can also drop the same email to aanntraman.india@gmail.com');
    contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animate sections on scroll
const animateSections = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateSections);
window.addEventListener('load', animateSections);

// Add CSS animation class
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
});

// Initialize the animation for the skills section
window.addEventListener('load', () => {
    setTimeout(() => {
        if (window.innerHeight > skillsSection.getBoundingClientRect().top) {
            skillLevels.forEach(level => {
                const width = level.parentElement.getAttribute('data-percent') + '%';
                level.style.width = width;
            });
        }
    }, 500);
});

function downloadFile(fileName) {
    // Create an anchor element
    const link = document.createElement("a");

    // Set the file path (Ensure the file is inside the project directory)
    link.href = fileName;
    link.download = fileName.split('/').pop();  // Extracts the filename

    // Append to the body and trigger click
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
}

particlesJS("hero-particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: { speed: 2, direction: "none", out_mode: "out" }
    }

});

particlesJS("exp-particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: { speed: 2, direction: "none", out_mode: "out" }
    }

});

particlesJS("edu-particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: { speed: 2, direction: "none", out_mode: "out" }
    }

});

