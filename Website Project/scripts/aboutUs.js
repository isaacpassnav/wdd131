const teamMembers = [
    {
        id: 1,
        fullName: "Laura Fernández",
        position: "CEO",
        description: "Passionate about adventure tourism, Laura founded Rafting Adventures with the mission of connecting people with the natural beauty of Peru. With over 15 years of experience in the tourism industry, Laura has led the company to become a leader in the sector.",
        img: "https://lighthouse.mq.edu.au/__data/assets/image/0004/917194/women-ceo-tile700x400.jpg"
    },
    {
        id: 2,
        fullName: "Javier Martínez and Sofía González",
        position: "President and Vice President",
        description: "Javier and Sofía are the pillars of our organization, working together since the early days of Rafting Adventures. Javier, with his extensive experience in business management, and Sofía, with her keen sense of marketing and sales, form an unstoppable duo.",
        img: "https://www.nicolascorrea.com/media/uploads/noticias/BibianaJaime_web.jpg"
    },
    {
        id: 3,
        fullName: "Daniela Vargas",
        position: "HR Director",
        description: "Daniela is responsible for maintaining team cohesion and well-being. Her focus on training and professional development ensures that every guide and staff member is prepared to offer exceptional service.",
        img: "https://img.freepik.com/premium-photo/smile-happy-proud-business-woman-entrepreneur-leader-working-corporate-office-portrait-accounts-executive-hr-manager-administrator-startup-agency-with-happiness-work_590464-81360.jpg"
    },
    {
        id: 4,
        fullName: "Alejandro Ramírez",
        position: "Commercial Director",
        description: "With a strategic vision and a focus on growth, Alejandro leads the company's commercial initiatives and strategic alliances. His passion for rafting and adventure is reflected in every project he undertakes.",
        img: "https://boardroomadvisors.co/wp-content/uploads/2018/12/AdobeStock_7795111-770x406.jpg"
    },
    {
        id: 5,
        fullName: "Valeria Ríos",
        position: "Marketing Director",
        description: "Valeria is the creative mind behind our marketing campaigns. With her ability to tell stories and create engaging content, Valeria has helped position Rafting Adventures as a leading brand in adventure tourism.",
        img: "https://vivahr.com/wp-content/uploads/2023/02/channel-marketing-manager-job-description-template.jpg"
    },
    {
        id: 6,
        fullName: "Isaac Pasapera",
        position: "Tech Development Director",
        description: "Passionate about technology and system development, Isaac leads Rafting Adventures' technical team. With expertise in HTML, JavaScript, React, MySQL, TypeScript, CSS, C#, and Python, he creates advanced tools to enhance customer experience and operational efficiency.",
        img: "https://raw.githubusercontent.com/isaacpassnav/wdd131/refs/heads/main/Website%20Project/images/isaac-pasapera.webp"
        
    }
]

const teamSection = document.querySelector(".team-section");

teamMembers.forEach((member, index) => {
    const teamCard = document.createElement("div");
    teamCard.classList.add("team-card", index % 2 === 0 ? "left" : "right");

    const img = document.createElement("img");
    img.src = member.img;
    img.alt = `${member.fullName} - ${member.position}`;

    const teamInfo = document.createElement("div");
    teamInfo.classList.add("team-info");

    const name = document.createElement("h3");
    name.textContent = member.fullName;

    const position = document.createElement("h4");
    position.textContent = member.position;

    const description = document.createElement("p");
    description.textContent = member.description;

    teamInfo.appendChild(name);
    teamInfo.appendChild(position);
    teamInfo.appendChild(description);

    teamCard.appendChild(img);
    teamCard.appendChild(teamInfo);

    teamSection.appendChild(teamCard);
});

// Función para aplicar las animaciones cuando el elemento entra en la vista
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const teamCard = entry.target;
            const text = teamCard.querySelector('.team-info');
            const img = teamCard.querySelector('img');
            
            // Aplicar las animaciones
            if (teamCard.classList.contains('left')) {
                text.classList.add('show-left');
            } else {
                text.classList.add('show-right');
            }
            img.classList.add('fade-in');
            
            // Una vez animado, dejar de observar ese elemento
            observer.unobserve(teamCard);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.team-card').forEach(card => observer.observe(card));


