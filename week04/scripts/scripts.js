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
