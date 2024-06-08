



// const images = document.querySelectorAll('.section-1-images .food-image');
// let currentIndex = 0;

// // Set interval function to rotate images
// setInterval(() => {
//     // Remove 'change' class from current image
//     images[currentIndex].classList.remove('change');

//     // Increment currentIndex and check for overflow
//     currentIndex = (currentIndex + 1) % images.length;

//     // Add 'change' class to next image
//     images[currentIndex].classList.add('change');
// }, 4000);



document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.food-image');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 3000); 
});



document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    hamburgerMenu.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });
});



