// Main JavaScript functionality

window.addEventListener('load', function() {
  console.log('Page fully loaded, initializing JavaScript...'); // Debug log
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');
  
  console.log('Mobile menu elements found:', {
    button: !!mobileMenuBtn,
    menu: !!mobileMenu,
    close: !!mobileClose
  }); // Debug log
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      console.log('Mobile menu button clicked'); // Debug log
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
  
  if (mobileClose) {
    mobileClose.addEventListener('click', function() {
      console.log('Mobile menu close clicked'); // Debug log
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  
  // Close mobile menu when clicking a link
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Scroll reveal animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe fade-in elements
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => observer.observe(el));
  
  // Form validation
  const forms = document.querySelectorAll('.form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      const formData = new FormData(this);
      
      // Clear previous errors
      const errorElements = this.querySelectorAll('.form-error');
      errorElements.forEach(el => el.remove());
      
      // Validate required fields
      const requiredFields = this.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          showFieldError(field, 'This field is required');
          isValid = false;
        }
      });
      
      // Validate email
      const emailFields = this.querySelectorAll('input[type="email"]');
      emailFields.forEach(field => {
        if (field.value && !isValidEmail(field.value)) {
          showFieldError(field, 'Please enter a valid email address');
          isValid = false;
        }
      });
      
      if (isValid) {
        // Show success message
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success';
        successDiv.textContent = 'Thank you! We\'ll be in touch soon.';
        this.insertBefore(successDiv, this.firstChild);
        
        // Reset form
        this.reset();
        
        // Scroll to success message
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
  
  function showFieldError(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
  }
  
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  // Modal functionality
  const modals = document.querySelectorAll('.modal');
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const modalCloses = document.querySelectorAll('.modal-close');
  
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  modalCloses.forEach(close => {
    close.addEventListener('click', function() {
      const modal = this.closest('.modal');
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Close modal on background click
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Header background on scroll
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.style.background = 'rgba(248, 250, 252, 0.98)';
      } else {
        header.style.background = 'rgba(248, 250, 252, 0.95)';
      }
    });
  }
  
  // Set active navigation item
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath === href || 
        (currentPath === '/index.html' && href === '/') ||
        (currentPath === '/' && href === '/index.html') ||
        currentPath.startsWith(href.replace('.html', '')) && href !== '/') {
      link.classList.add('active');
    }
  });

  // Exit intent detection for lead magnets (moved inside window.onload)
  let exitIntentShown = false;

  document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0 && !exitIntentShown && window.innerWidth > 768) {
      showExitIntentModal();
      exitIntentShown = true;
    }
  });

  function showExitIntentModal() {
    const modal = document.getElementById('exit-intent-modal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  // Lazy loading for images (moved inside window.onload)
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
          imageObserver.unobserve(img);
        }
      });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
  
  console.log('JavaScript initialization complete'); // Debug log
});