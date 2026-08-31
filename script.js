```javascript
/* =================================
   TYPING ANIMATION
================================= */

const typingText = document.querySelector(".typing");

const words = [
  "Computer Science Student",
  "Web Developer",
  "Programmer",
  "Technology Enthusiast",
  "Cat Lover 🐱"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingAnimation() {

  const currentWord = words[wordIndex];

  if (!deleting) {

    typingText.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {

      deleting = true;

      setTimeout(typingAnimation, 1500);

      return;
    }

  } else {

    typingText.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      deleting = false;

      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }

    }
  }

  setTimeout(
    typingAnimation,
    deleting ? 60 : 100
  );
}

typingAnimation();


/* =================================
   SCROLL REVEAL
================================= */

const sections =
  document.querySelectorAll("section");

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

        }

      });

    },

    {
      threshold: 0.15
    }
  );


sections.forEach(section => {
  observer.observe(section);
});


/* =================================
   CAT CLICK EFFECT
================================= */

document.addEventListener("click", function(event) {

  const paw = document.createElement("span");

  paw.innerHTML = "🐾";

  paw.style.position = "fixed";
  paw.style.left = event.clientX + "px";
  paw.style.top = event.clientY + "px";

  paw.style.pointerEvents = "none";
  paw.style.fontSize = "25px";
  paw.style.zIndex = "9999";

  paw.style.animation =
    "pawPop 1s ease-out forwards";

  document.body.appendChild(paw);

  setTimeout(() => {
    paw.remove();
  }, 1000);

});


/* =================================
   PAW CLICK ANIMATION
================================= */

const style = document.createElement("style");

style.innerHTML = `

@keyframes pawPop {

  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }

  50% {
    transform: translate(-50%, -100px) scale(1.2) rotate(15deg);
    opacity: 0.8;
  }

  100% {
    transform: translate(-50%, -160px) scale(0.7) rotate(-15deg);
    opacity: 0;
  }

}

`;

document.head.appendChild(style);


/* =================================
   PROJECT BUTTON
================================= */

const projectButtons =
  document.querySelectorAll(".project-card button");

projectButtons.forEach(button => {

  button.addEventListener("click", () => {

    alert(
      "🐱 Project details coming soon!"
    );

  });

});
```
