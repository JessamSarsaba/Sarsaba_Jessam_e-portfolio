```javascript
/* =====================================
   TYPING EFFECT
===================================== */

const typing = document.querySelector(".typing");

const words = [
    "Computer Science Student",
    "Web Developer",
    "Programmer",
    "Technology Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


/* =====================================
   SCROLL REVEAL
===================================== */

const sections =
    document.querySelectorAll("section");

const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


sections.forEach(function(section) {

    observer.observe(section);

});


/* =====================================
   PROJECT BUTTON
===================================== */

const buttons =
    document.querySelectorAll(
        ".project-card button"
    );

buttons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            alert(
                "Project details will be added soon."
            );

        }
    );

});
```
