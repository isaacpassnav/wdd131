function showStatus(message, isError = true) {
    const statusMessage = document.querySelector("#status-message");
    statusMessage.textContent = message;
    statusMessage.style.color = isError ? "red" : "green";
    statusMessage.style.display = "block";

    setTimeout(() => {
        statusMessage.style.display = "none";
    }, 3000);
}

function addChapter(list, chapter) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = chapter;
    deleteButton.textContent = "❌";

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", () => {
        removeChapter(list, li);
    });

    showStatus("Chapter added successfully!", false); 
}

function removeChapter(list, chapterElement) {
    list.removeChild(chapterElement);
    showStatus("Chapter removed successfully!", false); 
}

function cardsLoad() {
    const input = document.querySelector("#favchap");
    const button = document.querySelector("button");
    const list = document.querySelector("#list");
    const maxChapter = 10;

    button.addEventListener("click", () => {
        const chapter = input.value.trim(); 
        
        if (list.children.length >= maxChapter) {
            showStatus("You can't add more than 10 chapters.");
            return;
        }
        if (chapter === "") {
            showStatus("Please enter a valid chapter.");
            return;
        }

        addChapter(list, chapter);

        input.value = "";
        input.focus();
    });
}

cardsLoad();

