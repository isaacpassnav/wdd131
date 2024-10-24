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

//index to TIPEWRITTER EFFECT
document.addEventListener('DOMContentLoaded', function() {
    const headers = document.getElementsByClassName('header');
    const lists = document.getElementsByClassName('list');

    Array.from(headers).forEach(header => {
        const text = header.textContent;
        header.textContent = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                header.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                Array.from(lists).forEach(list => list.classList.add('show'));
            }
        }
        header.style.opacity = 1;
        typeWriter();
    });
});


