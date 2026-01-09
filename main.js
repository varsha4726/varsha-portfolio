(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    $(document).ready(function () {
        // Sticky Navbar with Neon Glow Effect
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $('.navbar').addClass('nav-sticky');
            } else {
                $('.navbar').removeClass('nav-sticky');
            }
        });
    
        // Smooth scrolling on navbar links
        $(".navbar-nav a").on("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
    
                $("html, body").animate(
                    {
                        scrollTop: $(this.hash).offset().top - 45,
                    },
                    1500,
                    "easeInOutExpo"
                );
    
                // Update active class and indicator position
                $(".navbar-nav .active").removeClass("active");
                $(this).addClass("active");
                updateIndicator($(this));
            }
        });
    
        // Function to update the sliding indicator position
        function updateIndicator(element) {
            let position = element.position();
            let width = element.outerWidth();
            $(".nav-indicator").css({
                left: position.left + "px",
                width: width + "px",
            });
        }
    
        // Icon Hover Effects
        $(".nav-item").hover(
            function () {
                let icon = $(this).find("i");
                icon.addClass("icon-glow");
                $(this).find(".nav-label").fadeIn(200);
                icon.css("transform", "translateY(-5px)");
            },
            function () {
                let icon = $(this).find("i");
                icon.removeClass("icon-glow");
                $(this).find(".nav-label").fadeOut(200);
                icon.css("transform", "translateY(0)");
            }
        );
    
        // Dynamic Background Effect
        let colors = ["#0B0C10", "#1A1B21", "#0D1B2A", "#091833"];
        let currentColor = 0;
    
        function changeBackground() {
            $(".navbar").animate(
                { backgroundColor: colors[currentColor] },
                3000,
                function () {
                    currentColor = (currentColor + 1) % colors.length;
                    changeBackground();
                }
            );
        }
        changeBackground();
    
        // Set initial position of the indicator
        let activeNavItem = $(".navbar-nav .active");
        if (activeNavItem.length) {
            updateIndicator(activeNavItem);
        }
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        const brand = document.getElementById("shafolio-brand");
        const letters = brand.querySelectorAll(".brand-letter");
        
        function scatterLetters() {
            letters.forEach(letter => {
                let x = (Math.random() - 0.5) * 40; // Random horizontal movement
                let y = (Math.random() - 0.5) * 40; // Random vertical movement
                letter.style.transform = `translate(${x}px, ${y}px)`;
            });
        }

        function resetLetters() {
            letters.forEach(letter => {
                letter.style.transform = "translate(0, 0)";
            });
        }
        
        // Trigger scatter effect on hover
        brand.addEventListener("mouseenter", scatterLetters);
        brand.addEventListener("mouseleave", resetLetters);

        // Trigger scatter effect on click for mobile
        brand.addEventListener("click", () => {
            scatterLetters();
            setTimeout(resetLetters, 600);
        });
    });

    document.addEventListener("mousemove", function (event) {
        let trail = document.createElement("div");
        trail.className = "mouse-trail";
        document.body.appendChild(trail);
    
        trail.style.left = `${event.clientX}px`;
        trail.style.top = `${event.clientY}px`;
    
        setTimeout(() => {
            trail.remove();
        }, 500); // Remove trail after 0.5s
    });
    
    const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const numParticles = 30; // Adjust number of particles

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)"; // White particles
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// Adjust canvas size on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    initParticles();
});

document.addEventListener("DOMContentLoaded", function () {
    const greeting1 = document.getElementById("greeting1");

    const now = new Date();
    const hours = now.getHours();
    let greetingText = "";

    if (hours >= 5 && hours < 12) {
        greetingText = "Gud Morning!";
    } else if (hours >= 12 && hours < 17) {
        greetingText = "Gud Afternoon!";
    } else if (hours >= 17 && hours < 21) {
        greetingText = "Gud Evening!";
    } else {
        greetingText = "Gud Night!🌙"; // 🌙 Add night greeting
    }

    greeting1.innerText = greetingText;
    greeting1.style.display = "block";

    // ✅ Auto-hide after 3 seconds
    setTimeout(() => {
        greeting1.style.opacity = "0";
        setTimeout(() => {
            greeting1.style.display = "none";
        }, 500);
    }, 3000);
});

    
    // Typed Initiate 
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    document.addEventListener("click", function (event) {
        // Create the wave animation
        let wave = document.createElement("div");
        wave.className = "sound-wave";
        document.body.appendChild(wave);
    
        wave.style.left = `${event.clientX}px`;
        wave.style.top = `${event.clientY}px`;
    
        setTimeout(() => {
            wave.remove();
        }, 1000); // Removes after animation
    
        // Play click sound
        let audio = new Audio("img/click-sound.mp3"); // Ensure correct path
        audio.volume = 0.5; // Adjust volume (0.0 to 1.0)
        audio.play();
    });
    
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", function () {
            this.classList.toggle("expanded");
        });
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

// gaminggggg



document.addEventListener("DOMContentLoaded", function () { 
    const greetings = [
        "Hey @<span class='username'>[Name]</span>😍 you just made this place brighter😊",
        "Hello @<span class='username'>[Name]</span>❤️ If words were stars let's make a galaxy🥰",
        "Hello @<span class='username'>[Name]</span>✨ Keep shining and stay awesome😍",
        "Welcome @<span class='username'>[Name]</span>💖 I’m so glad you’re here🤗",
        "Keep shining @<span class='username'>[Name]</span>😍 You bring light wherever you go🌟",
        "If kindness had a name it would be @<span class='username'>[Name]</span>😚",
        "Welcome, @<span class='username'>[Name]</span>! I hope your day is as amazing as your smile! 😊"
    ];

    const nameInput = document.getElementById("nameInput"); // Input field
    const greetingDisplay = document.getElementById("greetingMessage"); // Greeting display element

    nameInput.addEventListener("input", function () {
        let userName = nameInput.value.trim();
        if (userName.length > 0) {
            let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
            greetingDisplay.innerHTML = randomGreeting.replace("[Name]", userName);
            greetingDisplay.style.display = "block"; // Show greeting

            // Add a fade-in effect
            greetingDisplay.style.opacity = "1";
            greetingDisplay.style.transform = "translateY(0)";
        } else {
            // Hide with a fade-out effect
            greetingDisplay.style.opacity = "0";
            greetingDisplay.style.transform = "translateY(-10px)";
            setTimeout(() => {
                greetingDisplay.style.display = "none";
            }, 300); // Give time for animation
        }
    });
});



document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-item.nav-link");

    let scrollPosition = window.scrollY + 51;

    sections.forEach((section) => {
        if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href").substring(1) === section.id) {
                    link.classList.add("active");
                }
            });
        }
    });
});

document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-item.nav-link");

    let scrollPosition = window.scrollY + 51;

    sections.forEach((section) => {
        if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href").substring(1) === section.id) {
                    link.classList.add("active");
                }
            });
        }
    });
});


//modal popup

let images = [];
let currentIndex = 0;

function openModal(imageArray, title, desc) {
  images = imageArray;
  currentIndex = 0;

  document.getElementById("modalImage").src = images[currentIndex];
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;

  document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("modalImage").src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("modalImage").src = images[currentIndex];
}









