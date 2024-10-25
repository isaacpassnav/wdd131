const riverClassification = [
    {
        id: 1,
        class: "Class I - Easy",
        description: "Moving water, small waves, and clear routes, almost totally unobstructed.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-lyyrjWIOT0SReIGrlmA_RyKcX45I1_hug&s"
    },
    {
        id: 2,
        class: "Class II - Rookie",
        description:"Rapids with wide, clear channels, evident without scouting. The waves, rocks and other obstacles are easily spotted.",
        imageUrl: "https://tourtarapotoperu.com/uploads/CANOTAJE_EN_EL_RIO_MAYO-San-Martin-1.jpg"
    },
    {
        id: 3,
        class: "Class III - Intermediate",
        description:"Rapids with higher, irregular and constant waves, capable of immersing a raft. Narrow channels that often require complex manoeuvring against the rapids and good control of the raft.",
        imageUrl: "https://www.condorxtreme.com/wp-content/uploads/2022/11/Canotaje-en-Lunahuana-3.jpg"
    },
    {
        id: 4,
        class: "Class IV - Advanced",
        description:"Quick, powerful, but predictable rapids that require precise boat-handling in turbulent water.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dkDKxu4jPf1jfuOTTeZNGEhiIz6NLY_BHg&s"  
    },
    {
        id: 5,
        class: "Class V - Expert",
        description:"Very large, powerful, bumpy rapids. A high level of training is required.",
        imageUrl: "https://www.discoveringincatrail.com/wp-content/uploads/rafting-apurimac-2.jpg"

    },
    {
        id: 5,
        class: "Class VI - Extreme",
        description:"These rapids are strong, unpredictable and potentially life-threatening. For teams of experts only.",
        imageUrl: "https://riverexplorers.com/wp-content/uploads/2023/01/Tambopata-rafting-peru.jpg",
    }
];

const toursContainer = document.querySelector(".tours-container");

riverClassification.forEach((trip) => {
    const tourCard = document.createElement("div");
    tourCard.classList.add("tour-card");

    const img = document.createElement("img");
    img.src = trip.imageUrl;
    img.alt = trip.class;

    const tourInfo = document.createElement("div");
    tourInfo.classList.add("tour-info");

    const tripClass = document.createElement("h3");
    tripClass.textContent = trip.class;

    const description = document.createElement("p");
    description.textContent = trip.description;

    const button = document.createElement("button");
    button.textContent = "Book Now";
    button.classList.add("book-now-btn");

    button.addEventListener('click', () => {
        window.location.href = '/Website Project/reservations.html'; 
    });

    tourInfo.appendChild(tripClass);
    tourInfo.appendChild(description);
    tourInfo.appendChild(button);

    tourCard.appendChild(img);
    tourCard.appendChild(tourInfo);

    toursContainer.appendChild(tourCard);
});
