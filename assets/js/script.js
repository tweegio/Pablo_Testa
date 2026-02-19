/* ========================================
   LANDING PAGE PABLO TESTA
   JavaScript Vanilla - Performance Optimizado
   ======================================== */

'use strict';

// ========================================
// NAVEGACIÓN MÓVIL
// ========================================
const initMobileNav = () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!navToggle || !navMenu) return;

    // Toggle menú
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Cerrar menú al hacer click en un link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
};

// ========================================
// HEADER SCROLL EFFECT
// ========================================
const initHeaderScroll = () => {
    const header = document.getElementById('header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Añadir sombra al hacer scroll
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }

        lastScroll = currentScroll;
    });
};

// ========================================
// SMOOTH SCROLL MEJORADO
// ========================================
const initSmoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Ignorar # solo
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerHeight = document.getElementById('header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// ========================================
// CARRUSELES INDEPENDIENTES
// ========================================
class Carousel {
    constructor(carouselElement) {
        this.carousel = carouselElement;
        this.track = this.carousel.querySelector('.carousel__track');
        this.slides = Array.from(this.track.querySelectorAll('.carousel__slide'));
        this.prevButton = this.carousel.querySelector('.carousel__btn--prev');
        this.nextButton = this.carousel.querySelector('.carousel__btn--next');
        this.indicatorsContainer = this.carousel.querySelector('.carousel__indicators');
        
        this.currentIndex = 0;
        this.slideWidth = 0;
        this.isDragging = false;
        this.startPos = 0;
        this.currentTranslate = 0;
        this.prevTranslate = 0;
        this.animationID = 0;

        this.init();
    }

    init() {
        this.createIndicators();
        this.updateSlideWidth();
        this.attachEvents();
        this.updateButtons();
        this.updateIndicators();
    }

    createIndicators() {
        if (!this.indicatorsContainer) return;

        this.slides.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.classList.add('carousel__indicator');
            indicator.setAttribute('aria-label', `Ir a imagen ${index + 1}`);
            indicator.addEventListener('click', () => this.goToSlide(index));
            this.indicatorsContainer.appendChild(indicator);
        });

        this.indicators = Array.from(this.indicatorsContainer.querySelectorAll('.carousel__indicator'));
    }

    updateSlideWidth() {
        this.slideWidth = this.slides[0]?.getBoundingClientRect().width || 0;
    }

    attachEvents() {
        // Botones de navegación
        this.prevButton?.addEventListener('click', () => this.prevSlide());
        this.nextButton?.addEventListener('click', () => this.nextSlide());

        // Touch events
        this.track.addEventListener('touchstart', this.touchStart.bind(this), { passive: true });
        this.track.addEventListener('touchmove', this.touchMove.bind(this), { passive: true });
        this.track.addEventListener('touchend', this.touchEnd.bind(this));

        // Mouse events
        this.track.addEventListener('mousedown', this.touchStart.bind(this));
        this.track.addEventListener('mousemove', this.touchMove.bind(this));
        this.track.addEventListener('mouseup', this.touchEnd.bind(this));
        this.track.addEventListener('mouseleave', this.touchEnd.bind(this));

        // Resize
        window.addEventListener('resize', () => {
            this.updateSlideWidth();
            this.setPosition();
        });

        // Teclado (accesibilidad)
        this.carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }

    touchStart(e) {
        this.isDragging = true;
        this.startPos = this.getPositionX(e);
        this.animationID = requestAnimationFrame(this.animation.bind(this));
        this.track.style.cursor = 'grabbing';
    }

    touchMove(e) {
        if (!this.isDragging) return;
        const currentPosition = this.getPositionX(e);
        this.currentTranslate = this.prevTranslate + currentPosition - this.startPos;
    }

    touchEnd() {
        this.isDragging = false;
        cancelAnimationFrame(this.animationID);
        this.track.style.cursor = 'grab';

        const movedBy = this.currentTranslate - this.prevTranslate;

        // Si se movió más de 100px, cambiar de slide
        if (movedBy < -100 && this.currentIndex < this.slides.length - 1) {
            this.currentIndex++;
        } else if (movedBy > 100 && this.currentIndex > 0) {
            this.currentIndex--;
        }

        this.goToSlide(this.currentIndex);
    }

    getPositionX(e) {
        return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }

    animation() {
        this.setPosition();
        if (this.isDragging) requestAnimationFrame(this.animation.bind(this));
    }

    setPosition() {
        this.track.style.transform = `translateX(${this.currentTranslate}px)`;
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.currentTranslate = -this.currentIndex * (this.slideWidth + 16); // 16px = gap
        this.prevTranslate = this.currentTranslate;
        
        this.track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        this.setPosition();
        
        setTimeout(() => {
            this.track.style.transition = '';
        }, 500);

        this.updateButtons();
        this.updateIndicators();
    }

    nextSlide() {
        if (this.currentIndex < this.slides.length - 1) {
            this.goToSlide(this.currentIndex + 1);
        }
    }

    prevSlide() {
        if (this.currentIndex > 0) {
            this.goToSlide(this.currentIndex - 1);
        }
    }

    updateButtons() {
        if (!this.prevButton || !this.nextButton) return;

        this.prevButton.disabled = this.currentIndex === 0;
        this.nextButton.disabled = this.currentIndex === this.slides.length - 1;
    }

    updateIndicators() {
        if (!this.indicators) return;

        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }
}

const initCarousels = () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => new Carousel(carousel));
};

// ========================================
// LAZY LOADING IMÁGENES
// ========================================
const initLazyLoading = () => {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Cargar imagen
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }

                    // Añadir clase cuando se carga
                    img.addEventListener('load', () => {
                        img.classList.add('loaded');
                    });

                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px', // Comenzar a cargar 50px antes
            threshold: 0.01
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback para navegadores antiguos
        images.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    }
};

// ========================================
// INTERSECTION OBSERVER PARA ANIMACIONES
// ========================================
const initScrollAnimations = () => {
    const animatedElements = document.querySelectorAll(
        '.about__grid, .carousel-section, .process__step, .contact__grid'
    );

    if (!('IntersectionObserver' in window)) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
};

// ========================================
// ACTIVE LINK EN NAVEGACIÓN
// ========================================
const initActiveNav = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!sections.length || !navLinks.length) return;

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-80px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
};

// ========================================
// DETECCIÓN DE PREFIERE MODO OSCURO
// ========================================
const initDarkModeDetection = () => {
    // Por ahora solo detectamos, podemos implementar switch en el futuro
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Si el usuario prefiere modo oscuro, podríamos añadir clase al body
    // document.body.classList.toggle('dark-mode', prefersDark.matches);
};

// ========================================
// PERFORMANCE MONITORING
// ========================================
const initPerformanceMonitoring = () => {
    // Medir Core Web Vitals si está disponible
    if ('PerformanceObserver' in window) {
        try {
            // Largest Contentful Paint (LCP)
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // First Input Delay (FID)
            const fidObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    console.log('FID:', entry.processingStart - entry.startTime);
                });
            });
            fidObserver.observe({ entryTypes: ['first-input'] });

            // Cumulative Layout Shift (CLS)
            let clsScore = 0;
            const clsObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsScore += entry.value;
                    }
                }
                console.log('CLS:', clsScore);
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
            // Silenciar errores de observer en navegadores que no lo soporten completamente
        }
    }
};

// ========================================
// INICIALIZACIÓN GENERAL
// ========================================
const init = () => {
    // Navegación
    initMobileNav();
    initHeaderScroll();
    initSmoothScroll();
    initActiveNav();

    // Galería
    initCarousels();

    // Performance
    initLazyLoading();
    initScrollAnimations();

    // Extras
    initDarkModeDetection();
    
    // Solo en desarrollo
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        initPerformanceMonitoring();
    }

    // Log de inicialización
    console.log('🎨 Pablo Testa Landing - Inicializado correctamente');
};

// ========================================
// EJECUTAR AL CARGAR DOM
// ========================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ========================================
// OPTIMIZACIÓN: DEBOUNCE UTILITY
// ========================================
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Aplicar debounce a eventos de resize si es necesario
window.addEventListener('resize', debounce(() => {
    console.log('Resize detectado y procesado');
}, 250));

// ========================================
// ACCESSIBILITY: TRAP FOCUS EN MENÚ MÓVIL
// ========================================
const trapFocus = (element) => {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    
    if (!focusableElements.length) return;

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', (e) => {
        const isTabPressed = e.key === 'Tab';
        if (!isTabPressed) return;

        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    });
};

// ========================================
// EXPORT PARA TESTING (OPCIONAL)
// ========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Carousel, debounce, trapFocus };
}
