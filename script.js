// =====================================
// Mobile Navigation Toggle
// =====================================


const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");


if (menuButton) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}




// Close mobile menu when clicking a link


const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(link => {


    link.addEventListener("click", () => {


        navLinks.classList.remove("active");


    });


});





// =====================================
// Navbar Scroll Effect
// =====================================


const header = document.querySelector("header");


window.addEventListener("scroll", () => {


    if (window.scrollY > 50) {


        header.classList.add("scrolled");


    } else {


        header.classList.remove("scrolled");


    }


});







// =====================================
// Scroll Reveal Animation
// =====================================


const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-category, .cert-card, .experience-card"
);



const revealObserver = new IntersectionObserver(
    
    entries => {


        entries.forEach(entry => {


            if(entry.isIntersecting) {


                entry.target.classList.add("show");


            }


        });


    },


    {

        threshold: 0.15

    }


);



revealElements.forEach(element => {


    element.classList.add("hidden");

    revealObserver.observe(element);


});







// =====================================
// Dynamic Footer Year
// =====================================


const year = document.querySelector(".footer-bottom p");


if(year) {


    year.innerHTML = 
    `© ${new Date().getFullYear()} YOUR NAME. All rights reserved.`;


}
// =====================================
// Active Navigation Highlight
// =====================================


const sections = document.querySelectorAll("section");

const navLinksList = document.querySelectorAll(".nav-links a");



window.addEventListener("scroll", () => {


    let current = "";



    sections.forEach(section => {


        const sectionTop = section.offsetTop - 150;


        const sectionHeight = section.offsetHeight;



        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }


    });



    navLinksList.forEach(link => {


        link.classList.remove("active");



        if(link.getAttribute("href") === `#${current}`) {


            link.classList.add("active");


        }


    });


});








// =====================================
// External Links Security
// =====================================


const externalLinks = document.querySelectorAll(
    'a[target="_blank"]'
);



externalLinks.forEach(link => {


    link.setAttribute(
        "rel",
        "noopener noreferrer"
    );


});








// =====================================
// Project Image Error Handling
// =====================================


const projectImages = document.querySelectorAll(
    ".project-card img, .featured-image img"
);



projectImages.forEach(image => {


    image.addEventListener(
        "error",
        () => {


            image.src =
            "assets/images/project-placeholder.png";


        }
    );


});








// =====================================
// Button Hover Feedback
// =====================================


const buttons = document.querySelectorAll(".btn");



buttons.forEach(button => {


    button.addEventListener(
        "mouseenter",
        () => {


            button.style.cursor = "pointer";


        }
    );


});

