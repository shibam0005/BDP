

// Navbar scroll effects
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

}



// Testimonial carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

document.querySelector('.carousel-btn.next').addEventListener('click', () => {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    testimonials[currentTestimonial].classList.add('active');
});

document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    testimonials[currentTestimonial].classList.add('active');
});

// Auto-rotate testimonials
setInterval(() => {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    testimonials[currentTestimonial].classList.add('active');
}, 5000);

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

// Certificate verification
document.getElementById('verify-btn').addEventListener('click', () => {
    const certNumber = document.getElementById('cert-number').value.trim();
    const resultDiv = document.getElementById('verify-result');
    
    if (!certNumber) {
        showVerifyResult(false, 'Please enter a certificate number.');
        return;
    }

    // Simulate API call with sample data
    setTimeout(() => {
        // Sample valid certificates
        const validCerts = {
            'BDP-2024-001': {
                name: 'Rahul Sharma',
                course: 'Web Development Bootcamp',
                date: '15th June 2024',
                status: 'Verified'
            },
            'BDP-2024-002': {
                name: 'Priya Singh',
                course: 'Python Masterclass',
                date: '20th July 2024',
                status: 'Verified'
            }
        };

        const certData = validCerts[certNumber];
        
        if (certData) {
            showVerifyResult(true, '', certData);
        } else {
            showVerifyResult(false, 'Certificate not found or invalid number.');
        }
    }, 1500);
});

function showVerifyResult(isValid, message, data = null) {
    const resultDiv = document.getElementById('verify-result');
    const resultClass = isValid ? 'success' : 'error';
    
    if (isValid) {
        resultDiv.innerHTML = `
            <div class="verify-header ${resultClass}">
                <h3><i class="fas fa-check-circle"></i> Certificate Verified!</h3>
            </div>
            <table>
                <tr>
                    <th>Certificate Number</th>
                    <td>${data.course === 'Web Development Bootcamp' ? 'BDP-2024-001' : data.course === 'Python Masterclass' ? 'BDP-2024-002' : 'BDP-2024-003'}</td>
                </tr>
                <tr>
                    <th>Student Name</th>
                    <td>${data.name}</td>
                </tr>
                <tr>
                    <th>Course</th>
                    <td><strong>${data.course}</strong></td>
                </tr>
                <tr>
                    <th>Completion Date</th>
                    <td>${data.date}</td>
                </tr>
                <tr>
                    <th>Status</th>
                    <td><span style="color: #4CAF50; font-weight: bold;">${data.status}</span></td>
                </tr>
            </table>
        `;
    } else {
        resultDiv.innerHTML = `
            <div class="verify-header ${resultClass}">
                <h3><i class="fas fa-times-circle"></i> ${message}</h3>
            </div>
        `;
    }
    
    resultDiv.classList.add('show', resultClass);
}

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your message! We will get back to you within 24 hours.');
    e.target.reset();
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all course cards, batch cards, etc.
document.querySelectorAll('.course-card, .batch-card, .about-content, .stats, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Initialize first testimonial
document.querySelector('.testimonial').classList.add('active');
