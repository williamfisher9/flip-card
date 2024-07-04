const wrappers = document.querySelectorAll(".wrapper");
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "rotateY(180deg)";
    })

    card.addEventListener("mouseleave", () => {
        card.style.transform = "none";
    })
})