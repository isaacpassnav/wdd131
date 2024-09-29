const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;


// Store the selected elements that we are going to use. 
const mainNav = document.querySelector(".nav");
const hamButton = document.querySelector("#menu");

if (mainNav && hamButton) {
    hamButton.addEventListener("click", () => {
        mainNav.classList.toggle("show");  
        hamButton.classList.toggle("show"); 
    });
}

// const header = document.getElementById("responsive-header");
// const listNav = document.querySelectorAll("menu-link")

// listNav.forEach(link => {
//     link.addEventListener("click", (event) =>{
//         event.preventDefault();

//         const data = event.target.getAttribute("data-section");
//         header.textContent = `${data}`;
//     })
// });
