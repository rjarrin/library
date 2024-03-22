// Hold the library objects in array
const myLibrary = [];

// Constructors for Library elements
function Book(title, author, pages, readStatus, type) {
    // Constructor elements
    this.title = title;
    this.author = author;
    this.pages = pages;
    // eBook, Book, Graphic Novel, Picture Book, Early Reader
    this.type = type; 
    this.readStatus = readStatus;
}

function Audiobook(title, artist, genre, type, listenedStatus) {
    // Streaming, Downloadable, CD
    this.title = title;
    this.artist = artist;
    this.genre = genre;
    this.type = type;
    this.listenedStatus = listenedStatus;
}

function MoviesTV(title, company, genre, type, watchStatus) {
    // Streaming, DVD, Blu-ray
    this.title = title;
    this.company = company;
    this.genre = genre;
    this.type = type;
    this.watchStatus = watchStatus;
}

function Software(title, company, genre, type, status) {
    // Video Game
    this.title = title;
    this.company = company;
    this.genre = genre;
    this.type = type;
    this.status = status;
}

// Add a new entry to the library
function addToLibrary(entryType, formData) {
    let newEntry;
    // Create a new instance of the selected entry type
    switch (entryType) {
        case "Book":
            newEntry = new Book(formData.title, formData.author, formData.pages, formData.readStatus, formData.type);
            break;
        case "Audiobook":
            newEntry = new Audiobook(formData.title, formData.artist, formData.genre, formData.type, formData.listenedStatus);
            break;
        case "MoviesTV":
            newEntry = new MoviesTV(formData.title, formData.company, formData.genre, formData.type, formData.watchStatus);
            break;
        case "Software":
            newEntry = new Software(formData.title, formData.company, formData.genre, formData.type, formData.status);
            break;
    }
    // Add the new entry to the library array
    myLibrary.push(newEntry);
    console.log(myLibrary);
}

// Dynamically generate input fields based on the selected entry type
function generateInputFields(entryType) {
    const form = document.getElementById("entryForm");
    // Clear existing input fields
    form.innerHTML = ""; 
    // Generate input fields for the selected entry types
    switch (entryType) {
        case "Book":
            form.innerHTML = `
            <input type="text" id="title" placeholder="Title" required>
            <input type="text" id="author" placeholder="Author" required>
            <input type="number" id="pages" placeholder="Pages" required>
            <input type="text" id="readStatus" placeholder="Read Status" required>
            <input type="text" id="type" placeholder="Type" required>
            `;
            break;
        case "Audiobook":
            form.innerHTML = `
                <input type="text" id="title" placeholder="Title" required>
                <input type="text" id="artist" placeholder="Artist" required>
                <input type="text" id="genre" placeholder="Genre" required>
                <input type="text" id="type" placeholder="Type" required>
                <input type="text" id="listenedStatus" placeholder="Listened Status" required>
            `;
            break;
        case "MoviesTV":
            form.innerHTML = `
                <input type="text" id="title" placeholder="Title" required>
                <input type="text" id="company" placeholder="Company" required>
                <input type="text" id="genre" placeholder="Genre" required>
                <input type="text" id="type" placeholder="Type" required>
                <input type="text" id="watchStatus" placeholder="Watch Status" required>
            `;
            break;
        case "Software":
            form.innerHTML = `
                <input type="text" id="title" placeholder="Title" required>
                <input type="text" id="company" placeholder="Company" required>
                <input type="text" id="genre" placeholder="Genre" required>
                <input type="text" id="type" placeholder="Type" required>
                <input type="text" id="status" placeholder="Status" required>
            `;
            break;
    }
}

// Event listener for changing the entry type to update the input fields
document.getElementById("entryType").addEventListener("change", function(event) {
    generateInputFields(event.target.value);
});

// Event listener for the form submission to add a new entry to the library
document.getElementById("entryForm").addEventListener("submit", function(event){
    event.preventDefault();
    const entryType = document.getElementById('entryType').value;
    let formData = {};

    // Dynamically construct formData based on the selected entry type
    switch (entryType) {
        case 'Book':
            formData = {
                title: document.getElementById('title').value,
                author: document.getElementById('author').value,
                pages: document.getElementById('pages').value,
                readStatus: document.getElementById('readStatus').value,
                type: document.getElementById('type').value
            };
            break;
        case 'Audiobook':
            formData = {
                title: document.getElementById('title').value,
                artist: document.getElementById('artist').value,
                genre: document.getElementById('genre').value,
                type: document.getElementById('type').value,
                listenedStatus: document.getElementById('listenedStatus').value
            };
            break;
        case 'MoviesTV':
            formData = {
                title: document.getElementById('title').value,
                company: document.getElementById('company').value,
                genre: document.getElementById('genre').value,
                type: document.getElementById('type').value,
                watchStatus: document.getElementById('watchStatus').value
            };
            break;
        case 'Software':
            formData = {
                title: document.getElementById('title').value,
                company: document.getElementById('company').value,
                genre: document.getElementById('genre').value,
                type: document.getElementById('type').value,
                status: document.getElementById('status').value
            };
            break;
    }

    addToLibrary(entryType, formData);
    closeModal();
});

// Open the modal window
function openModal() {
    document.getElementById("addEntryModal").style.display = "block";
    // Get the current value of the dropdown menu
    const currentEntryType = document.getElementById("entryType").value;
    // Generate input fields based on the current selection
    generateInputFields(currentEntryType);
}

// Close the modal window
function closeModal() {
    document.getElementById("addEntryModal").style.display = "none";
}

// Event listener for closing the modal when the close button is clicked
document.querySelector(".close").addEventListener("click", closeModal);

// Event listener for opening the modal when the "Add Entry" button is clicked
document.getElementById("add-entry-btn").addEventListener("click", openModal);

// Collapse sidebar
document.getElementById("temp-sidebar").addEventListener("click", function () {
    document.querySelector(".filter-container").classList.toggle("collapsed");
});