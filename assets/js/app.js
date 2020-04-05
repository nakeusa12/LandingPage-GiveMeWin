// Mengaktifkan Toggler icon Hamburger saat Responsive
const navbarToggler = document.querySelector(".hamburger");
const navbarMenu = document.querySelector("nav ul");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
    navbarToggler.classList.toggle("open");
    navbarMenu.classList.toggle("open");
}

/* ---------------------------------------------------------- */

// Menampilkan Deskripsi pada Card
const cardList = document.querySelectorAll(".card-list");
const areaButtom = document.querySelectorAll(".buttom");

for (let i = 0; i < cardList.length; i++) {
    cardList[i].addEventListener("mouseover", () => {
        areaButtom[i].style.display = "block";
    });
    cardList[i].addEventListener("mouseout", () => {
        areaButtom[i].style.display = "none";
    });
}

/* ---------------------------------------------------------- */

// Menampilkan Pop Up Berita
let c;


function pop() {
    if (c == 0) {
        document.getElementById("popup").style.display = "block";
        c = 1;
    } else {
        document.getElementById("popup").style.display = "none";
        c = 0;
    }
}

let d;

function pop2() {
    if (d == 0) {
        document.getElementById("popup2").style.display = "block";
        d = 1;
    } else {
        document.getElementById("popup2").style.display = "none";
        d = 0;
    }
}

// -----------------------------------------------------