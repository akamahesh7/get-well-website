/* =====================================
   OPEN LETTER
===================================== */

function openLetter() {

    const letter = document.getElementById("letter");

    letter.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================
   HUG BUTTON
===================================== */

function sendHug() {

    const message =
        document.getElementById("hugMessage");

    message.innerHTML = `
        🫂❤️🫂<br>
        <strong>मिठी मिळाली बाळ!</strong><br>
        <span style="font-size:20px;">
        आता अशी कल्पना कर की मी तुला
        खूप घट्ट मिठी मारली आहे. ❤️
        </span>
    `;

    heartExplosion();

}


/* =====================================
   HEART EXPLOSION
===================================== */

function heartExplosion() {

    for (let i = 0; i < 30; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            ["❤️", "💕", "💗", "💖", "🫶"]
            [Math.floor(Math.random() * 5)];

        heart.style.position = "fixed";

        heart.style.left = "50%";

        heart.style.top = "65%";

        heart.style.fontSize =
            Math.random() * 25 + 15 + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "999";

        heart.style.transition =
            "1.5s ease-out";

        document.body.appendChild(heart);


        const x =
            (Math.random() - 0.5) * 600;

        const y =
            (Math.random() - 0.5) * 500;


        setTimeout(() => {

            heart.style.transform =
                `translate(${x}px, ${y}px)
                 scale(1.5)`;

            heart.style.opacity = "0";

        }, 50);


        setTimeout(() => {

            heart.remove();

        }, 1600);

    }

}


/* =====================================
   FLOATING HEARTS
===================================== */

function createFloatingHeart() {

    const container =
        document.getElementById("hearts");

    const heart =
        document.createElement("div");

    heart.classList.add(
        "floating-heart"
    );


    const heartTypes = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💞",
        "🫶"
    ];


    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        Math.random() * 20 + 12 + "px";


    heart.style.animationDuration =
        Math.random() * 5 + 6 + "s";


    container.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 12000);

}


/* Create hearts */

setInterval(
    createFloatingHeart,
    700
);