const happyGuests = [
    {
        id: 1,
        fullname: "Michael Wood",
        description: "Moving water, small waves, and clear routes, almost totally unobstructed.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-lyyrjWIOT0SReIGrlmA_RyKcX45I1_hug&s"
    },
    {
        id: 2,
        fullname: "Roberto Durant",
        description: "Rapids with wide, clear channels, evident without scouting. The waves, rocks, and other obstacles are easily spotted.",
        imageUrl: "https://tourtarapotoperu.com/uploads/CANOTAJE_EN_EL_RIO_MAYO-San-Martin-1.jpg"
    },
    {
        id: 3,
        fullname: "Maria Dolores",
        description: "Rapids with higher, irregular, and constant waves, capable of immersing a raft. Narrow channels require complex manoeuvring.",
        imageUrl: "https://www.condorxtreme.com/wp-content/uploads/2022/11/Canotaje-en-Lunahuana-3.jpg"
    },
    {
        id: 4,
        fullname: "Thom Thompson",
        description: "Quick, powerful, but predictable rapids that require precise boat-handling in turbulent water.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dkDKxu4jPf1jfuOTTeZNGEhiIz6NLY_BHg&s"
    },
    {
        id: 5,
        fullname: "Ray Chen",
        description: "Very large, powerful, bumpy rapids. A high level of training is required.",
        imageUrl: "https://www.discoveringincatrail.com/wp-content/uploads/rafting-apurimac-2.jpg"
    },
    {
        id: 6,
        fullname: "Solvo Company",
        description: "These rapids are strong, unpredictable, and potentially life-threatening. For teams of experts only.",
        imageUrl: "https://riverexplorers.com/wp-content/uploads/2023/01/Tambopata-rafting-peru.jpg"
    }
];

const carouselItems = [...happyGuests, ...happyGuests];

const carousel = document.querySelector(".carousel");
let currentSlide = 0;

// Crear las tarjetas de invitados
carouselItems.forEach((guest) => {
    const tourCard = document.createElement("div");
    tourCard.classList.add("tour-card");

    const img = document.createElement("img");
    img.src = guest.imageUrl;
    img.alt = guest.fullname;

    const guestInfo = document.createElement("div");
    guestInfo.classList.add("guest-info");

    const fullname = document.createElement("h3");
    fullname.textContent = guest.fullname;

    const description = document.createElement("p");
    description.textContent = guest.description;

    guestInfo.appendChild(fullname);
    guestInfo.appendChild(description);

    tourCard.appendChild(img);
    tourCard.appendChild(guestInfo);

    carousel.appendChild(tourCard);
});
function updateSlide() {
    const slideWidth = carousel.children[0].clientWidth;
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    if (currentSlide === carouselItems.length - happyGuests.length) {
        setTimeout(() => {
            carousel.style.transition = "none";
            currentSlide = 0;
            carousel.style.transform = `translateX(0)`;
        }, 500);
    } else {
        carousel.style.transition = "transform 0.5s ease-in-out";
    }
}
document.querySelector(".next").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % carouselItems.length;
    updateSlide();
});
document.querySelector(".prev").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
    updateSlide();
});
// efectos para form y div contact
document.addEventListener("DOMContentLoaded", () => {
    const formContainer = document.querySelector(".form-container");

    const observerOptions = {
        root: null, // viewport
        threshold: 0.1 // 10% del elemento visible
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); 
            }
        });
    }, observerOptions);
    observer.observe(formContainer); 
});
