function cardsLoad(temples) {
    const section = document.querySelector('.section2'); 
    temples.forEach(temple => {
        const div = document.createElement("div");
        div.classList.add("card");

        const title = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const img = document.createElement("img");

        title.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        area.textContent = `Area: ${temple.area} sq ft`;

        
        img.src = temple.imageUrl;
        img.alt = `Temple of ${temple.templeName}`;
        img.loading = "lazy"; 

        div.appendChild(title);
        div.appendChild(location);
        div.appendChild(dedicated);
        div.appendChild(area);
        div.appendChild(img);

        section.appendChild(div);
    });
}

cardsLoad(temples);
