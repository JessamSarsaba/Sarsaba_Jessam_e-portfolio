```javascript
/* =========================================
   PROFESSIONAL COFFEE PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   TYPING ANIMATION
========================================= */

const typing =
    document.querySelector(".typing");


const words = [

    "Computer Science Student",

    "Web Developer",

    "Programmer",

    "Technology Enthusiast",

    "Future Software Developer"

];


let wordIndex = 0;

let letterIndex = 0;

let deleting = false;


function typeEffect() {

    if (!typing) return;


    const currentWord =
        words[wordIndex];


    if (!deleting) {


        typing.textContent =
            currentWord.substring(
                0,
                letterIndex + 1
            );


        letterIndex++;


        if (
            letterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1800
            );

            return;
        }


    } else {


        typing.textContent =
            currentWord.substring(
                0,
                letterIndex - 1
            );


        letterIndex--;


        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;


            if (
                wordIndex >=
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(

        typeEffect,

        deleting
            ? 50
            : 100

    );

}


typeEffect();



/* =========================================
   SCROLL REVEAL
========================================= */

const sections =
    document.querySelectorAll(
        "section"
    );


const observer =
    new IntersectionObserver(

        function(entries) {


            entries.forEach(

                function(entry) {


                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                    }

                }

            );

        },

        {
            threshold: 0.12
        }

    );


sections.forEach(

    function(section) {

        observer.observe(section);

    }

);



/* =========================================
   PROJECT BUTTONS
========================================= */

const projectButtons =
    document.querySelectorAll(
        ".project-button"
    );


projectButtons.forEach(

    function(button) {


        button.addEventListener(

            "click",

            function() {


                alert(
                    "Project details will be added soon."
                );


            }

        );

    }

);



/* =========================================
   NAVIGATION ACTIVE LINK
========================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(

    "scroll",

    function() {


        let currentSection = "";


        sections.forEach(

            function(section) {


                const sectionTop =
                    section.offsetTop - 150;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }

        );


        navLinks.forEach(

            function(link) {


                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }

        );

    }

);



/* =========================================
   COFFEE PARTICLE CLICK EFFECT
========================================= */

document.addEventListener(

    "click",

    function(event) {


        const particle =
            document.createElement(
                "span"
            );


        particle.textContent = "✦";


        particle.style.position =
            "fixed";


        particle.style.left =
            event.clientX + "px";


        particle.style.top =
            event.clientY + "px";


        particle.style.color =
            "#b78345";


        particle.style.fontSize =
            "20px";


        particle.style.pointerEvents =
            "none";


        particle.style.zIndex =
            "9999";


        particle.style.transition =
            "all 1s ease";


        document.body.appendChild(
            particle
        );


        setTimeout(

            function() {

                particle.style.transform =
                    "translateY(-70px) scale(1.8)";

                particle.style.opacity =
                    "0";

            },

            10

        );


        setTimeout(

            function() {

                particle.remove();

            },

            1000

        );

    }

);



/* =========================================
   PAGE LOAD ANIMATION
========================================= */

window.addEventListener(

    "load",

    function() {

        document.body.classList.add(
            "loaded"
        );

    }

);
```
