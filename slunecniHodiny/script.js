// Gallery data with all sundial projects
const galleryData = [
    // Simple sundials
    {
        id: 1,
        category: 'simple',
        title: 'Krompach - Valy, 2009',
        description: 'První oficiální velké sluneční hodiny na jižní stěně domu. Plocha přibližně 4 m², hodinové čáry v rozsahu 8 až 18 hodin.',
        image: 'https://slunecnihodinylipa.wz.cz/obr/2009kro1.jpg',
        year: 2009,
        location: 'Krompach - Valy, Liberecký kraj'
    },
    {
        id: 2,
        category: 'simple',
        title: 'Manuščice 1, 2012',
        description: 'Východní hodiny s azimutem -70°. Číselník v rozsahu 6 až 12 hodin s latinským nápisem.',
        image: 'https://slunecnihodinylipa.wz.cz/obr/2012man1.jpg',
        year: 2012,
        location: 'Manuščice, okres Česká Lípa'
    },
    {
        id: 3,
        category: 'simple',
        title: 'Manuščice 2, 2013',
        description: 'Západní hodiny na štítu zahrádní chatky. Rozsah 14 až 19 hodin, ideální pro večerní posezení na zahradě.',
        image: 'https://slunecnihodinylipa.wz.cz/obr/2013man1.jpg',
        year: 2013,
        location: 'Manuščice, okres Česká Lípa'
    },
    {
        id: 4,
        category: 'simple',
        title: 'Manuščice 3, 2014',
        description: 'Západní hodiny na hospodářské budově. Rozsah 14 až 18 hodin, viditelné z celého dvora a od bazénu.',
        image: 'https://slunecnihodinylipa.wz.cz/obr/2014man1.jpg',
        year: 2014,
        location: 'Manuščice, okres Česká Lípa'
    },
    {
        id: 5,
        category: 'simple',
        title: 'Mistrovice 2, 2018',
        description: 'Jižní hodiny na zateplené fasádě s plastikou slunce. Číslice vyřezané laserem, rozměry 180 x 130 cm.',
        image: 'https://slunecnihodinylipa.wz.cz/obr/2018mis1.jpg',
        year: 2018,
        location: 'Mistrovice u Nového Oldřichova'
    },
    {
        id: 6,
        category: 'simple',
        title: 'Manuščice 4, 2019',
        description: 'Unikátní hodiny na sedlové střeše. Plocha 120 x 140 cm, malované bílou barvou na asfaltové šindele.',
        image: 'https://slunecnihodinylipa.wz.cz/obr/2019man1.jpg',
        year: 2019,
        location: 'Manuščice, okres Česká Lípa'
    },

    // Complex sundials
    {
        id: 7,
        category: 'complex',
        title: 'Kamenický Šenov, 2012',
        description: 'Jihov-východní hodiny s obratn-íky a latinským textem. Rozměry 1.8 x 1.3 m, hodinové čáry od 5. do 14. hodiny.',
        image: 'https://slunecnihodinylipa.wz.cz/obr/2012kam1.jpg',
        year: 2012,
        location: 'Kamenický Šenov'
    },
    {
        id: 8,
        category: 'complex',
        title: 'Mistrovice 1, 2012',
        description: 'Velké hodiny s rozměry 2.6 x 1.2 m a pískovovou plastikou Slunce. Obsahují čáry "do Slunce západu".',
        image: 'https://slunecnihodinylipa.wz.cz/obr/2012mis1.jpg',
        year: 2012,
        location: 'Mistrovice u Nového Oldřichova'
    },
    {
        id: 9,
        category: 'complex',
        title: 'Bítouchov, 2019',
        description: 'Hodiny s tabulkou časové korekce. Majitel jimi žije a využívá všechny jejich funkce při pobytu na zahradě.',
        image: 'https://slunecnihodinylipa.wz.cz/obr/2019bit1.jpg',
        year: 2019,
        location: 'Bítouchov'
    },
    {
        id: 10,
        category: 'complex',
        title: 'Kurort Jonsdorf (DE), 2019',
        description: 'Mezinárodní projekt v Německu. Jihoz-ápadní hodiny s obratn-íky, rozměr 170 x 120 cm.',
        image: 'https://slunecnihodinylipa.wz.cz/obr/2019jon1.jpg',
        year: 2019,
        location: 'Kurort Jonsdorf, Německo'
    },

    // Reconstruction
    {
        id: 11,
        category: 'reconstruction',
        title: 'Polevsko, 2013',
        description: 'Rekonstrukce slunečních hodin na kostele Nejsvětější Trojice podle dobových fotografií. Jihov-východní hodiny.',
        image: 'https://slunecnihodinylipa.wz.cz/obr/2013pol1.jpg',
        year: 2013,
        location: 'Polevsko, Liberecký kraj'
    }
];

// DOM elements
const galleryGrid = document.getElementById('gallery-grid');
const galleryNavBtns = document.querySelectorAll('.gallery-nav-btn');
const modal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalClose = document.querySelector('.modal-close');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
// Navigation elements will be defined in initializeNavigation

let currentImageIndex = 0;
let currentCategory = 'all';

// Expandable Process Steps Functionality
function initExpandableSteps() {
    const expandableSteps = document.querySelectorAll('.expandable-step');

    if (expandableSteps.length === 0) {
        return; // No expandable steps found, exit early
    }

    expandableSteps.forEach(step => {
        const header = step.querySelector('.step-header');

        if (header) {
            header.addEventListener('click', () => {
                // Close other expanded steps
                expandableSteps.forEach(otherStep => {
                    if (otherStep !== step && otherStep.classList.contains('expanded')) {
                        otherStep.classList.remove('expanded');
                    }
                });

                // Toggle current step
                step.classList.toggle('expanded');
            });
        }
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeGallery();
    initializeNavigation();
    initializeModal();
    initializeScrollEffects();
    initExpandableSteps();
});

// Gallery functionality
function initializeGallery() {
    renderGallery('all');
    
    galleryNavBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active button
            galleryNavBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Render gallery
            renderGallery(category);
            currentCategory = category;
        });
    });
}

function renderGallery(category) {
    const filteredData = category === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.category === category);
    
    galleryGrid.innerHTML = '';
    
    filteredData.forEach((item, index) => {
        const galleryItem = createGalleryItem(item, index);
        galleryGrid.appendChild(galleryItem);
    });
    
    // Add click listeners to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openModal(index));
    });
}

function createGalleryItem(data, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
        <img src="${data.image}" alt="${data.title}" loading="lazy">
        <div class="gallery-item-content">
            <h3>${data.title}</h3>
            <p>${data.description}</p>
            <div class="gallery-item-meta">
                <span class="year">${data.year}</span>
                <span class="location">${data.location}</span>
            </div>
        </div>
    `;
    return item;
}

// Modal functionality
function initializeModal() {
    modalClose.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', showPrevImage);
    modalNext.addEventListener('click', showNextImage);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'block') {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });
}

function openModal(index) {
    const filteredData = currentCategory === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.category === currentCategory);
    
    currentImageIndex = index;
    const data = filteredData[index];
    
    modalImage.src = data.image;
    modalTitle.textContent = data.title;
    modalDescription.innerHTML = `
        <p>${data.description}</p>
        <div class="modal-meta">
            <p><strong>Rok:</strong> ${data.year}</p>
            <p><strong>Místo:</strong> ${data.location}</p>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showPrevImage() {
    const filteredData = currentCategory === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.category === currentCategory);
    
    currentImageIndex = currentImageIndex > 0 
        ? currentImageIndex - 1 
        : filteredData.length - 1;
    
    const data = filteredData[currentImageIndex];
    modalImage.src = data.image;
    modalTitle.textContent = data.title;
    modalDescription.innerHTML = `
        <p>${data.description}</p>
        <div class="modal-meta">
            <p><strong>Rok:</strong> ${data.year}</p>
            <p><strong>Místo:</strong> ${data.location}</p>
        </div>
    `;
}

function showNextImage() {
    const filteredData = currentCategory === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.category === currentCategory);
    
    currentImageIndex = currentImageIndex < filteredData.length - 1 
        ? currentImageIndex + 1 
        : 0;
    
    const data = filteredData[currentImageIndex];
    modalImage.src = data.image;
    modalTitle.textContent = data.title;
    modalDescription.innerHTML = `
        <p>${data.description}</p>
        <div class="modal-meta">
            <p><strong>Rok:</strong> ${data.year}</p>
            <p><strong>Místo:</strong> ${data.location}</p>
        </div>
    `;
}

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !navMenu) {
        console.log('Navigation elements not found');
        return; // Elements not found, exit early
    }

    console.log('Navigation initialized');

    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Nav toggle clicked');
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Scroll effects
function initializeScrollEffects() {
    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.feature, .step, .gallery-item, .model');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
window.addEventListener('load', function() {
    // Preload critical images
    const criticalImages = galleryData.slice(0, 6).map(item => item.image);
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Touch support for mobile gallery navigation
let touchStartX = 0;
let touchEndX = 0;

modal.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

modal.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            showNextImage(); // Swipe left - next image
        } else {
            showPrevImage(); // Swipe right - previous image
        }
    }
}




