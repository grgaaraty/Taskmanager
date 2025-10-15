const noteInput = document.getElementById("noteInput");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const notesList = document.getElementById("notesList");

// Load saved notes when page loads
window.onload = () => {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.forEach((note, index) => addNoteToList(note, index));
};

// Add note to the UI
function addNoteToList(note, index) {
  const li = document.createElement("li");
  li.textContent = note;

  // Create delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "dlt";
  delBtn.classList.add("deleteBtn");
  delBtn.onclick = () => deleteNote(index);

  // Add both text and button inside the li
  li.appendChild(delBtn);
  notesList.appendChild(li);
}

// Save note
saveBtn.addEventListener("click", () => {
  const note = noteInput.value.trim();
  if (note === "") return alert("Write something first!");

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));

  addNoteToList(note, notes.length - 1);
  noteInput.value = "";
});

// Delete single note
function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1); // remove 1 element at that index
  localStorage.setItem("notes", JSON.stringify(notes));
  refreshNotes(); // reload UI
}

// Clear all notes
clearBtn.addEventListener("click", () => {
  localStorage.clear();
  notesList.innerHTML = "";
});

// Refresh UI after deleting
function refreshNotes() {
  notesList.innerHTML = "";
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.forEach((note, index) => addNoteToList(note, index));
}
