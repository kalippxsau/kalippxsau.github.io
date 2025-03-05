// Navigation sticky
document.addEventListener('DOMContentLoaded', function() {
    // Navigation sticky
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Mobile sidebar toggle for FAQ page
    const mobileSidebarToggle = document.getElementById('mobileSidebarToggle');
    const faqSidebar = document.getElementById('faqSidebar');
    
    if (mobileSidebarToggle && faqSidebar) {
        mobileSidebarToggle.addEventListener('click', function() {
            faqSidebar.classList.toggle('active');
            this.textContent = faqSidebar.classList.contains('active') ? 'Masquer les catégories ↑' : 'Afficher les catégories ↓';
        });
    }
    
    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Sidebar navigation for FAQ page
    const faqSidebarLinks = document.querySelectorAll('.faq-sidebar a');
    
    if (faqSidebarLinks.length > 0) {
        faqSidebarLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all links
                document.querySelectorAll('.faq-sidebar li').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to clicked link's parent
                this.parentNode.classList.add('active');
                
                // Scroll to section
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
                
                // On mobile, close the sidebar after clicking
                if (window.innerWidth < 992 && faqSidebar && mobileSidebarToggle) {
                    faqSidebar.classList.remove('active');
                    mobileSidebarToggle.textContent = 'Afficher les catégories ↓';
                }
            });
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    if (anchorLinks.length > 0) {
        anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                // Skip if it's a FAQ sidebar link (already handled above)
                if (this.closest('.faq-sidebar')) {
                    return;
                }
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navLinks) {
                        navLinks.classList.remove('active');
                    }
                }
            });
        });
    }
});
