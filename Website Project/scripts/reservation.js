const happyGuests = [
    {
        id: 1,
        fullname: "Michael Wood",
        description: "My experience with Peru Rafting Adventures was incredible! The water was exhilarating, with small waves that made it thrilling yet manageable. The team was excellent, guiding us through clear routes and making sure we felt safe the entire time. Highly recommend!",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-lyyrjWIOT0SReIGrlmA_RyKcX45I1_hug&s"
    },
    {
        id: 2,
        fullname: "Roberto Durant",
        description: "Rafting with Peru Rafting Adventures was an unforgettable experience! The rapids were exciting, with wide channels that kept us on our toes. The guides were fantastic, making sure we were well-prepared for every wave and turn. I’ll definitely come back!",
        imageUrl: "https://tourtarapotoperu.com/uploads/CANOTAJE_EN_EL_RIO_MAYO-San-Martin-1.jpg"
    },
    {
        id: 3,
        fullname: "Maria Dolores",
        description: "An amazing adventure with Peru Rafting Adventures! The waves were intense and exhilarating, immersing us in the heart of nature. Navigating the narrow channels required skill, but the guides were experts, making it a safe yet thrilling experience.",
        imageUrl: "https://www.condorxtreme.com/wp-content/uploads/2022/11/Canotaje-en-Lunahuana-3.jpg"
    },
    {
        id: 4,
        fullname: "Thom Thompson",
        description: "Peru Rafting Adventures took us on a powerful and thrilling journey through the rapids! Every twist and turn required precision, but the team was outstanding, guiding us with confidence. It was an adventure I’ll remember forever!",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dkDKxu4jPf1jfuOTTeZNGEhiIz6NLY_BHg&s"
    },
    {
        id: 5,
        fullname: "Ray Chen",
        description: "If you’re looking for a heart-pounding adventure, Peru Rafting Adventures is the place! The rapids were huge and powerful, providing a serious adrenaline rush. The team’s expertise made it feel safe yet challenging. Definitely a must-do!",
        imageUrl: "https://www.discoveringincatrail.com/wp-content/uploads/rafting-apurimac-2.jpg"
    },
    {
        id: 6,
        fullname: "Solvo Company",
        description: "Peru Rafting Adventures provided an extreme and exhilarating experience! The rapids were strong and unpredictable, making it perfect for expert rafters. The team’s professionalism was top-notch, ensuring safety without compromising the thrill.",
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
        root: null, 
        threshold: 0.1 
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
