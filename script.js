

//Code to change the carousel captions whenever slide is pressed
// JavaScript to handle the caption change on slide
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#carouselExampleCaptions');
    const captions = document.querySelectorAll('.carousel-caption-outside > div');

    function updateCaptions() {
        const activeItem = carousel.querySelector('.carousel-item.active');
        const activeIndex = parseInt(activeItem.getAttribute('data-index'), 10);

        captions.forEach((caption, index) => {
            if (index === activeIndex) {
                caption.classList.remove('d-none');
            } else {
                caption.classList.add('d-none');
            }
        });
    }

    carousel.addEventListener('slid.bs.carousel', function () {
        updateCaptions(); // Adjust the timeout to match the carousel slide transition duration
    });
});

//torch controls
/*document.addEventListener('DOMContentLoaded', function () {
    const torch = document.querySelector('.torch');

    document.addEventListener('mousemove', function (e) {
        console.log('Mouse X:', e.clientX, 'Mouse Y:', e.clientY); // Log coordinates
        torch.style.top = `${e.clientY}px`;
        torch.style.left = `${e.clientX}px`;
    });
});*/
//tree height controller
/*document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.querySelector('.aboutSection');
    const trees = document.querySelectorAll('.treeContainer img');

    function updateTreeHeight() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionHeight = aboutSection.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;

        // Calculate the scroll percentage within the about section
        let scrollPercent = (windowHeight - sectionTop) / (windowHeight + sectionHeight);

        // Clamp the scroll percentage between 0 and 1
        scrollPercent = Math.max(0, Math.min(1, scrollPercent));

        // Calculate tree height percentage from 10% to 100%
        const treeHeightPercent = 10 + scrollPercent * 90;

        // Update the height of each tree
        trees.forEach(tree => {
            tree.style.height = `${treeHeightPercent}%`;
            tree.style.width = `${treeHeightPercent}%`;
        });

        // Request the next animation frame
        requestAnimationFrame(updateTreeHeight);
    }

    // Initial call to start the animation
    requestAnimationFrame(updateTreeHeight);
});*/

//create stars
document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.aboutSection');
    
    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3 + 1}px`; // Random size between 1px and 4px
        star.style.height = star.style.width; // Make it a circle
        section.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 3000); // Star lifespan
    }

    setInterval(createStar, 100); // Frequency of new stars
});

//move clouds
document.addEventListener('DOMContentLoaded', function() {
    const cloudsContainer = document.querySelector('.moving-clouds-container');
    const numberOfClouds = 10;

    function createCloud() {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        cloud.style.left = `${Math.random() * 100}%`;
        cloud.style.bottom = `${Math.random() * 100}%`;
        cloud.style.width = `${Math.random() * 200 + 100}px`; // Random width between 100px and 300px
        cloud.style.height = `${Math.random() * 100 + 50}px`; // Random height between 50px and 150px
        cloud.style.animationDuration = `${Math.random() * 20 + 10}s`; // Random duration between 10s and 30s

        cloudsContainer.appendChild(cloud);

        // Remove cloud after animation ends to avoid too many elements
        setTimeout(() => {
            cloud.remove();
        }, parseFloat(cloud.style.animationDuration) * 1000);
    }

    // Create initial clouds
    for (let i = 0; i < numberOfClouds; i++) {
        createCloud();
    }

    // Continuously create new clouds
    setInterval(createCloud, 1000);
});



//shooting stars 
document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.querySelector('.shooting-stars-container');
    const numberOfStars = 30;

    function createShootingStar() {
        const star = document.createElement('div');
        star.classList.add('shooting-star');
        star.style.top = `${Math.random() * 100}%`; // Random position near the top
        star.style.left = `${Math.random() * 100}%`; // Random position near the left
        star.style.animationDuration = `${Math.random() * 1 + 5}s`; // Random duration between 0.5s and 1.5s

        starsContainer.appendChild(star);

        // Remove star after animation ends to avoid too many elements
        setTimeout(() => {
            star.remove();
        }, (parseFloat(star.style.animationDuration)) * 1000);
    }

    // Create initial stars
    for (let i = 0; i < numberOfStars; i++) {
        createShootingStar();
    }

    // Continuously create new stars
    setInterval(createShootingStar, 500);
});
//flying birds

document.addEventListener('DOMContentLoaded', () => {
    const birds = document.querySelectorAll('.bird');
    birds.forEach((bird, index) => {
        bird.style.animationDelay = `${index * 2}s`;
    });
});

//for navbar 
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust this value based on when you want the color to change
        navbar.classList.add('navbar-dark-custom');
        navbar.classList.remove('navbar-light', 'bg-light');
    } else {
        navbar.classList.remove('navbar-dark-custom');
        navbar.classList.add('navbar-light', 'bg-light');
    }
});

//Code for sending email from form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm("service_ad4uzxw", "template_ph28jx9", this)
        .then(function() {
            alert('Your message has been sent successfully!');
        }, function(error) {
            alert('Failed to send the message. Please try again later.');
        });
});

