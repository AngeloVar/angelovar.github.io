const banner = document.getElementById("banner");
const logo = document.getElementById('logo');
let lastScrollPosition = 0;
let ticking = false;
const smallLogo = '../images/VPE_SMALL_LOGO.png';
const bigLogo = '../images/VPE_BIG_LOGO.png';

function updateBanner() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    const scrolled = currentScroll > 10;
    
    if (scrolled !== banner.classList.contains('scrolled')) {
        banner.classList.toggle("scrolled", scrolled);
        logo.src = scrolled ? smallLogo : bigLogo;
    }
    
    lastScrollPosition = currentScroll;
    ticking = false;
}

// pre-loading images so we dont constantly reassign (causes jitter)
const img1 = new Image(); img1.src = smallLogo;
const img2 = new Image(); img2.src = bigLogo;
function handleScroll() {
    lastScrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    if (!ticking) {
        window.requestAnimationFrame(updateBanner);
        ticking = true;
    }
}

window.addEventListener('scroll', handleScroll, { passive: true });

// Init
updateBanner();