// ==========================================
// 1. SECURITY: Disable Inspect Element
// ==========================================
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if(e.keyCode == 123) return false; // F12
    if(e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 67 || e.keyCode === 74)) return false; 
    if(e.ctrlKey && e.keyCode === 85) return false; // Ctrl+U
};

// ==========================================
// 2. SMOOTH SCROLL ROUTING
// ==========================================
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Map every single button to its target screen
const buttonMap = {
    'beginBtn': 'screen-2',
    'toScreen3Btn': 'screen-3',
    'toScreen4Btn': 'screen-4',
    'toScreen5Btn': 'screen-5',
    'toScreen6Btn': 'screen-6',
    'toScreen7Btn': 'screen-7',
    'toScreen8Btn': 'screen-8',
    'toScreen9Btn': 'screen-9',
    'toScreen10Btn': 'screen-10',
    'toScreen11Btn': 'screen-11',
    'toScreen12Btn': 'screen-12',
    'toScreen13Btn': 'screen-13',
    'toScreen14Btn': 'screen-14',
    'toScreen15Btn': 'screen-15',
    'toScreen16Btn': 'screen-16',
    'toScreen17Btn': 'screen-17',
    'toScreen18Btn': 'screen-18',
    'toScreen19Btn': 'screen-19',
    'toScreen20Btn': 'screen-20',
    'toScreen21Btn': 'screen-21',
    'toScreen22Btn': 'screen-22',
    'toScreen23Btn': 'screen-23',
    'toScreen24Btn': 'screen-24',
    'toScreen25Btn': 'screen-25',
    'toScreen26Btn': 'screen-26',
    'toScreen27Btn': 'screen-27',
    'toScreen28Btn': 'screen-28',
    'toScreen29Btn': 'screen-29',
    'toScreen30Btn': 'screen-30',
    'toScreen31Btn': 'screen-31',
    'toScreen32Btn': 'screen-32',
    'toScreen33Btn': 'screen-33',
    'toScreen34Btn': 'screen-34',
    'toScreen35Btn': 'screen-35'
};

// Automatically attach click events to all mapped buttons
for (const [btnId, targetScreenId] of Object.entries(buttonMap)) {
    const btn = document.getElementById(btnId);
    if (btn) {
        btn.addEventListener('click', () => scrollToSection(targetScreenId));
    }
}

// ==========================================
// 3. IMAGE CAROUSELS (Home & Diva)
// ==========================================

// Home Page Carousel (1.5s)
const heroImages = [
    "Home page/hpg1.png", "Home page/hpg2.png", 
    "Home page/hpg3.png", "Home page/hpg4.png"
];
let heroIndex = 0;
const carouselEl = document.getElementById('hero-carousel');
if (carouselEl) {
    setInterval(() => {
        carouselEl.style.opacity = 0.8; 
        setTimeout(() => {
            heroIndex = (heroIndex + 1) % heroImages.length;
            carouselEl.src = heroImages[heroIndex];
            carouselEl.style.opacity = 1; 
        }, 150); 
    }, 1500); 
}

// Diva Auto-Cam Carousel (1.2s)
const divaImages = [
    "diva/v1.png", "diva/v2.png", "diva/v3.png", 
    "diva/v4.png", "diva/v5.png", "diva/v6.png", "diva/v7.png"
];
let divaIndex = 0;
const divaCarouselEl = document.getElementById('diva-carousel');
if (divaCarouselEl) {
    setInterval(() => {
        divaCarouselEl.style.opacity = 0.8; 
        setTimeout(() => {
            divaIndex = (divaIndex + 1) % divaImages.length;
            divaCarouselEl.src = divaImages[divaIndex];
            divaCarouselEl.style.opacity = 1; 
        }, 150); 
    }, 1200); 
}

// ==========================================
// 4. FAMILY GALLERY SLIDER MECHANIC (Screen 9)
// ==========================================
const familyGallery = document.getElementById('familyGallery');
const familyBtn = document.getElementById('familyGalleryBtn');
const totalFamilySlides = 7; // Total number of slides including the punchline
let currentFamilySlide = 0;

if (familyGallery && familyBtn) {
    familyBtn.addEventListener('click', () => {
        currentFamilySlide++;

        // If there are more slides to show, scroll to the next one
        if (currentFamilySlide < totalFamilySlides) {
            const slideWidth = familyGallery.clientWidth;
            familyGallery.scrollTo({
                left: slideWidth * currentFamilySlide,
                behavior: 'smooth'
            });

            // If they just landed on the final punchline slide, update the button
            if (currentFamilySlide === totalFamilySlides - 1) {
                familyBtn.innerText = "Enter The Fashion Era";
                familyBtn.classList.add('pulse'); // Add a subtle pulse effect
            }
        } 
        // If they click the button while on the final slide, jump to Screen 10
        else {
            scrollToSection('screen-10');
        }
    });
}

// ==========================================
// 5. GRAND FINALE MEMORY GRID (Screen 35)
// ==========================================
const finalGridScreen = document.getElementById('screen-35');
const gridContainer = document.getElementById('finalGrid');

// Array of all memories used in the project to flood the background
const allMemories = [
    "Home page/hpg1.png", "child/v_c1.png", "child/v_2014.png", 
    "fam/fam_m.png", "fam/fam_d.png", "fam/itz%20mom%20fr.png", 
    "fashion/vc.png", "fashion/diva%20.png", "fashion/5.png", 
    "diva/v1.png", "diva/v4.png", "diva/v7.png", 
    "Confident/vb1.png", "Confident/champ_1.png", "Confident/leader.png",
    "Home page/hpg3.png", "child/hair.png", "fam/mom.png", 
    "fashion/v23.png", "Confident/v5.png", "Confident/v6.png"
];

let gridGenerated = false;

if (finalGridScreen && gridContainer) {
    const gridObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Trigger the grid generation only when she reaches the final screen
            if (entry.isIntersecting && !gridGenerated) {
                gridGenerated = true; // Prevent it from running twice
                
                // Shuffle the memories so it looks organic
                const shuffledMemories = allMemories.sort(() => 0.5 - Math.random());
                
                // Create the image elements and cascade them in
                shuffledMemories.forEach((src, index) => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.className = 'grid-item';
                    
                    // Stagger the fade-in animation (0.1s delay per image)
                    img.style.animationDelay = `${index * 0.1}s`;
                    
                    gridContainer.appendChild(img);
                });

                // Fire confetti when the grid loads!
                if (typeof confetti === 'function') {
                    setTimeout(() => {
                        confetti({
                            particleCount: 120,
                            spread: 80,
                            origin: { y: 0.6 },
                            colors: ['#D4AF37', '#ffffff', '#1a1a1a']
                        });
                    }, 1000); // Fire 1 second after she hits the screen
                }
            }
        });
    }, { threshold: 0.3 }); // Triggers when 30% of the final screen is visible

    gridObserver.observe(finalGridScreen);
}