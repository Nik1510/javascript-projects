const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Show saved notes on load
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
    attachDeleteAndSaveEvents();
}
showNotes();

// Update localStorage with current notes
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Create a new note
createBtn.addEventListener("click", () => {
    const inputBox = document.createElement("div");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    const deleteImg = document.createElement("img");
    deleteImg.src = "/notes-app-img/images/delete.png";
    deleteImg.alt = "Delete";

    inputBox.appendChild(deleteImg);
    notesContainer.appendChild(inputBox);

    updateStorage();
    attachDeleteAndSaveEvents();
});

// Handle delete and input save for all notes
function attachDeleteAndSaveEvents() {
    const inputBoxes = document.querySelectorAll(".input-box");

    inputBoxes.forEach(box => {
        const deleteImg = box.querySelector("img");

        deleteImg.onclick = () => {
            box.remove();
            updateStorage();
        };

        box.onkeyup = () => {
            updateStorage();
        };
    });
}
