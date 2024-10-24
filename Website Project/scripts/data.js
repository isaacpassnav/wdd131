const imagesRafting = [
    {
        id: 1,
        nameLocation: "Utcubamba River, Chachapoyas",
        description: "Immerse yourself in the wild beauty of the Utcubamba River in Chachapoyas, perfect for adventurers seeking thrilling rapids and lush Amazonian jungle scenery.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-lyyrjWIOT0SReIGrlmA_RyKcX45I1_hug&s"
    },
    {
        id: 2,
        nameLocation: "Mayo River, Tarapoto",
        description: "Discover the serene yet adventurous Mayo River in Tarapoto, a fantastic destination for exploring both stunning nature and exciting white-water rafting.",
        imageUrl: "https://tourtarapotoperu.com/uploads/CANOTAJE_EN_EL_RIO_MAYO-San-Martin-1.jpg"
    },
    {
        id: 3,
        nameLocation: "Cañete River, Lunahuana",
        description: "Feel the rush of rafting through the fast-paced rapids of the Cañete River in Lunahuaná, renowned for its breathtaking valley views and exhilarating waters.",
        imageUrl: "https://www.condorxtreme.com/wp-content/uploads/2022/11/Canotaje-en-Lunahuana-3.jpg"
    },
    {
        id: 4,
        nameLocation: "Urubamba River, Cusco",
        description: "Raft the historical waters of the Urubamba River in Cusco, surrounded by the majestic Andes and ancient Incan ruins for an unforgettable adventure.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dkDKxu4jPf1jfuOTTeZNGEhiIz6NLY_BHg&s"
    },
    {
        id: 5,
        nameLocation: "Apurimac River, Cusco",
        description: "Tackle the challenging rapids of the Apurímac River in Cusco, often considered one of the world's most thrilling and scenic rafting experiences.",
        imageUrl: "https://www.discoveringincatrail.com/wp-content/uploads/rafting-apurimac-2.jpg"
    },
    {
        id: 6,
        nameLocation: "Tambopata River, Puno",
        description: "Navigate the pristine Tambopata River in Puno, a hidden gem in the Peruvian jungle, ideal for nature lovers and adventure seekers alike.",
        imageUrl: "https://riverexplorers.com/wp-content/uploads/2023/01/Tambopata-rafting-peru.jpg"
    },
    {
        id: 7,
        nameLocation: "Colca River, Arequipa",
        description: "Raft through the awe-inspiring Colca Canyon in Arequipa, where adventure meets stunning landscapes in one of the world's deepest canyons.",
        imageUrl: "https://www.deaventura.pe/aplication/webroot/js/tinymce/jscripts/tiny_mce/plugins/imagemanager/files/canotaje_canon_del_rio_colca.png"
    },
    {
        id: 8,
        nameLocation: "Cotahuasi River, Arequipa",
        description: "Enjoy the dramatic depths of the Cotahuasi Canyon in Arequipa, one of the deepest canyons in the world, offering a paradise for rafting enthusiasts.",
        imageUrl: "https://www.pelago.co/img/products/PE-Peru/chili-river-rafting-arequipa/d5b4f412-1db4-4bf9-abe4-29be27aad96c_chili-river-rafting-arequipa.jpg"
    },
    {
        id: 9,
        nameLocation: "Cotahuasi River, Arequipa",
        description: "Experience the thrill of rafting in Cotahuasi Canyon, Arequipa, where towering canyon walls frame the adventure through one of the world's most incredible natural settings.",
        imageUrl:"https://cdn.getyourguide.com/img/tour/78d83f9d610e597ee5237d95a6cfa3a6b03a8b6cb224b4135e58156b05a156a8.jpg/98.jpg"
    }
];

const tooltipTrips = document.querySelector('.tooltip-trips');
let currentIndex = 0;

function createCarousel(images) {
    tooltipTrips.innerHTML = '';    

    images.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${image.imageUrl}" alt="${image.nameLocation}" loading="lazy">
            <h3>${image.nameLocation}</h3>
            <p>${image.description}</p>
        `;
        tooltipTrips.appendChild(card);
    });

    showSlide(currentIndex);
}
function showSlide(index) {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
        if ((i >= index && i < index + 3) || (index + 3 > cards.length && i < (index + 3) % cards.length)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % imagesRafting.length;
    showSlide(currentIndex);
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + imagesRafting.length) % imagesRafting.length;
    showSlide(currentIndex);
}
document.addEventListener('DOMContentLoaded', function() {
    createCarousel(imagesRafting);
    setInterval(nextSlide, 3000); 
});

