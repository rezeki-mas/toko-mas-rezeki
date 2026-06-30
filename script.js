// ============================
// DATA FOTO RING
// ============================

const ringImages = [
    "20220701_145411.jpg",
    "20220709_155730.jpg",
    "20220709_155901.jpg",
    "20220709_161247.jpg",
    "20220709_161323.jpg",
    "20220727_171148.jpg",
    "20220722_165649.jpg",
    "20220709_162600.jpg",
    "20220709_161712.jpg",    
];

// ============================
// ELEMENT
// ============================

const collectionBtn = document.getElementById("collectionBtn");
const categorySection = document.getElementById("categorySection");
const ringPage = document.getElementById("ringPage");
const ringGallery = document.getElementById("ringGallery");
const backBtn = document.getElementById("backBtn");

const categoryCards = document.querySelectorAll(".category-card");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

// ============================
// TAMPILKAN KATEGORI
// ============================

collectionBtn.addEventListener("click", () => {

    categorySection.classList.remove("hidden");

    categorySection.scrollIntoView({
        behavior: "smooth"
    });

});

// ============================
// BUKA HALAMAN RING
// ============================

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        if(card.dataset.page !== "ring"){

            alert("Kategori ini akan ditambahkan nanti 😊");

            return;

        }

        categorySection.classList.add("hidden");

        ringPage.classList.remove("hidden");

        loadRingGallery();

        ringPage.scrollIntoView({
            behavior:"smooth"
        });

    });

});

// ============================
// LOAD FOTO RING
// ============================

function loadRingGallery(){

    ringGallery.innerHTML = "";

    ringImages.forEach(file=>{

        const item = document.createElement("div");

        item.className = "item";

        item.innerHTML = `

            <img src="images/ring/${file}" alt="Ring">

        `;

        item.addEventListener("click",()=>{

            lightbox.classList.remove("hidden");

            lightboxImage.src=`images/ring/${file}`;

        });

        ringGallery.appendChild(item);

    });

}

// ============================
// TOMBOL KEMBALI
// ============================

backBtn.addEventListener("click",()=>{

    ringPage.classList.add("hidden");

    categorySection.classList.remove("hidden");

    categorySection.scrollIntoView({

        behavior:"smooth"

    });

});

// ============================
// TUTUP LIGHTBOX
// ============================

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.add("hidden");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.add("hidden");

    }

});