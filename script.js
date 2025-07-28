
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Hero Slider
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev-slide');
        const nextBtn = document.querySelector('.next-slide');
        
        let currentSlide = 0;
        const totalSlides = slides.length;
        
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
            currentSlide = index;
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }
        
        // Auto slide change every 5 seconds
        let slideInterval = setInterval(nextSlide, 5000);
        
        // Pause on hover
        heroSlider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        heroSlider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
        
        // Manual controls
        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                clearInterval(slideInterval);
                nextSlide();
                slideInterval = setInterval(nextSlide, 5000);
            });
            
            prevBtn.addEventListener('click', () => {
                clearInterval(slideInterval);
                prevSlide();
                slideInterval = setInterval(nextSlide, 5000);
            });
        }
        
        // Initialize first slide
        showSlide(0);
    }
    
    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        const testimonials = document.querySelectorAll('.testimonial');
        const prevTestimonial = document.querySelector('.prev-testimonial');
        const nextTestimonial = document.querySelector('.next-testimonial');
        
        let currentTestimonial = 0;
        const totalTestimonials = testimonials.length;
        
        function showTestimonial(index) {
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            testimonials[index].classList.add('active');
            currentTestimonial = index;
        }
        
        function nextTestimonialSlide() {
            currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
            showTestimonial(currentTestimonial);
        }
        
        function prevTestimonialSlide() {
            currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
            showTestimonial(currentTestimonial);
        }
        
        // Auto slide change every 7 seconds
        let testimonialInterval = setInterval(nextTestimonialSlide, 7000);
        
        // Pause on hover
        testimonialSlider.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });
        
        testimonialSlider.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(nextTestimonialSlide, 7000);
        });
        
        // Manual controls
        if (nextTestimonial && prevTestimonial) {
            nextTestimonial.addEventListener('click', () => {
                clearInterval(testimonialInterval);
                nextTestimonialSlide();
                testimonialInterval = setInterval(nextTestimonialSlide, 7000);
            });
            
            prevTestimonial.addEventListener('click', () => {
                clearInterval(testimonialInterval);
                prevTestimonialSlide();
                testimonialInterval = setInterval(nextTestimonialSlide, 7000);
            });
        }
        
        // Initialize first testimonial
        showTestimonial(0);
    }
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your enquiry! Our admission team will contact you shortly.');
            admissionForm.reset();
        });
    }
    
    // Scroll Animation
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .slide-in-right, .slide-in-left');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
            }
        });
    };
    
    // Initialize elements as hidden
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
    });
    
    document.querySelectorAll('.slide-in-right').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(50px)';
    });
    
    document.querySelectorAll('.slide-in-left').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-50px)';
    });
    
    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                if (hamburger && navMenu && hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    });
});


// Optional: Add marquee effect on desktop
document.addEventListener('DOMContentLoaded', function() {
    const slideText = document.querySelector('.slide-text');
    
    function checkWidth() {
        if (window.innerWidth > 768) {
            slideText.innerHTML = 'ADMISSIONS OPEN 2025-26 • ADMISSIONS OPEN 2025-26 • ADMISSIONS OPEN 2025-26 • ';
            slideText.style.whiteSpace = 'nowrap';
            slideText.style.animation = 'marquee 15s linear infinite';
            
            // Add marquee keyframes dynamically
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `;
            document.head.appendChild(style);
        } else {
            slideText.innerHTML = 'ADMISSIONS OPEN 2024-25';
            slideText.style.animation = 'none';
        }
    }
    
    // Run on load and resize
    checkWidth();
    window.addEventListener('resize', checkWidth);
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
});
