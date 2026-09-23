/* =================================================
   FLOATING PARTICLES
================================================= */

const particleContainer =
    document.getElementById("particles");

const symbols = ["✦", "✧", "·", "♡"];

for (let i = 0; i < 35; i++) {

    const particle =
        document.createElement("span");

    particle.classList.add("particle");

    particle.innerText =
        symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.fontSize =
        (Math.random() * 12 + 8) + "px";

    particle.style.animationDuration =
        (Math.random() * 12 + 8) + "s";

    particle.style.animationDelay =
        (Math.random() * 8) + "s";

    particleContainer.appendChild(particle);
}


/* =================================================
   TYPEWRITER
================================================= */

const typingElement =
    document.querySelector(".typing-text");

const text =
    "Today is all about celebrating you... ✨";

let textIndex = 0;

function typeWriter() {

    if (textIndex < text.length) {

        typingElement.textContent +=
            text.charAt(textIndex);

        textIndex++;

        setTimeout(typeWriter, 55);
    }
}

typingElement.textContent = "";

typeWriter();


/* =================================================
   MOBILE MENU
================================================= */

function toggleMenu() {

    const nav =
        document.querySelector(".nav-links");

    nav.classList.toggle("open");
}


/* Close mobile menu after clicking */

document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .querySelector(".nav-links")
                .classList.remove("open");

        });

    });


/* =================================================
   SCROLL REVEAL
================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

revealElements.forEach(element => {

    observer.observe(element);

});


/* =================================================
   SURPRISE
================================================= */

function showSurprise() {

    document
        .getElementById("surprise")
        .classList.add("show");

    createConfetti();

}


function closeSurprise() {

    document
        .getElementById("surprise")
        .classList.remove("show");

}


/* =================================================
   PARTY CHOICE
================================================= */

function partyChoice(choice) {

    const result =
        document.getElementById("choiceResult");

    result.innerHTML =
        "Sounds perfect! ✨ <br>" +
        "<strong>" + choice + "</strong>";

    createConfetti();

}


/* =================================================
   REPLY
================================================= */

function sendReply() {

    const input =
        document.getElementById("replyText");

    const result =
        document.getElementById("replyResult");

    const message =
        input.value.trim();

    if (message === "") {

        result.innerText =
            "Write something first 😊";

        return;
    }

    result.innerText =
        "Message saved on this page ♡";

    input.value = "";

}


/* =================================================
   RSVP YES
================================================= */

function rsvpYes() {

    const result =
        document.getElementById("rsvpResult");

    result.innerHTML =
        "Yay! 🎉 Party mode activated! ✨";

    createConfetti();

}


/* =================================================
   RSVP MAYBE
================================================= */

function rsvpMaybe() {

    const result =
        document.getElementById("rsvpResult");

    result.innerHTML =
        "Okay okay... take your time 😌✨";

}


/* =================================================
   CONFETTI
================================================= */

function createConfetti() {

    const colors = [
        "#e7a1ff",
        "#c77ee5",
        "#ffd36f",
        "#ff9ed8",
        "#ffffff"
    ];

    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.left = "50%";
        confetti.style.top = "50%";

        confetti.style.width = "7px";
        confetti.style.height = "12px";

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        confetti.style.zIndex = "2000";

        confetti.style.pointerEvents =
            "none";

        confetti.style.borderRadius = "2px";

        document.body.appendChild(confetti);


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 400 + 150;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;


        confetti.animate(

            [
                {
                    transform:
                        "translate(0,0) rotate(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px, ${y}px)
                         rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }

            ],

            {
                duration:
                    Math.random() * 1200 + 900,

                easing: "cubic-bezier(.2,.8,.3,1)"
            }

        );


        setTimeout(() => {

            confetti.remove();

        }, 2200);

    }

}


/* =================================================
   CLICK OUTSIDE POPUP
================================================= */

document
    .getElementById("surprise")
    .addEventListener("click", function(e) {

        if (e.target === this) {

            closeSurprise();

        }

    });