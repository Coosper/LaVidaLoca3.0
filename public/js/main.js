import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';

// Menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            // Toggle 'open' class instead of 'hidden'
            const isOpen = mobileMenu.classList.toggle("open");
            menuBtn.setAttribute("aria-expanded", isOpen.toString());
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Your existing swiper
    const swiper = new Swiper('.mySwiper', {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // NEW: Menu navigation swiper
    const menuNavSwiper = new Swiper('.menuNavSwiper', {
        modules: [FreeMode],
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
        grabCursor: true,
    });
});