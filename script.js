// Select the button and container
const addNoteBtn = document.getElementById("add-note-btn");
const notesContainer = document.getElementById("notes-container");

function createNote() {
    const note = document.createElement("div");
    note.classList.add("note");

    const textarea = document.createElement("textarea");

    // Create a delete button for the note
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Append the textarea and delete button to the note
    note.appendChild(textarea);
    note.appendChild(deleteBtn);

    // Add delete functionality to the button
    deleteBtn.addEventListener("click", () => {
        notesContainer.removeChild(note);
    });

    notesContainer.appendChild(note);
}


addNoteBtn.addEventListener("click", createNote);