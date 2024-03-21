// Hold the library objects in array
const myLibrary = [];

function Book(author, title, pages, readStatus, type) {
    // Constructor elements
    this.author = author;
    this.title = title;
    this.pages = pages;
    // eBook, Book, Graphic Novel, Picture Book, Early Reader
    this.type = type; 
    this.readStatus = readStatus;
    // Toogle read status
    this.toggleRead = function () {
        console.log("Before:" + this.readStatus);
        this.readStatus = !this.readStatus;
        console.log("After:" + this.readStatus);
    }
}

function Audiobook() {
    // Streaming, Downloadable, CD
    this.type = type;
}

function MoviesTV() {
    // Streaming, DVD, Blu-ray
    this.type = type;
}

function Software() {
    // Video Game
    this.type = type;
}


function addToLibrary() {
    // do stuff here
}

// Collapse sidebar
document.getElementById("temp-sidebar").addEventListener("click", function () {
    document.querySelector(".filter-container").classList.toggle("collapsed");
});