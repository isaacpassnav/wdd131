const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
]
const selectElement = document.getElementById("product-name");
// Create a default "Please select" option
const defaultOption = document.createElement("option");
defaultOption.textContent = "Please select a product";
defaultOption.value = "";
defaultOption.selected = true; 
defaultOption.disabled = true;
selectElement.appendChild(defaultOption);

products.forEach(product => {
    const option = document.querySelector("option")
    option.value = option.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

document.addEventListener("DOMContentLoaded", ()=>{

    const reviewCount = localStorage.getItem("reviewCount");
    if (!reviewCount) {
        reviewCount = 0;
    }else{
        reviewCount = parseInt(reviewCount, 10);
    }
    reviewCount ++
    localStorage.setItem("reviewCount", reviewCount);

    console.log("Cantidad de revisiones completadas:", reviewCount);
});
