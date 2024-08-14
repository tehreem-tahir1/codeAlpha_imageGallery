const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const downloadLink = document.getElementById('downloadLink');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = 'block';
    lightboxImage.src = thumbnails[currentIndex].src;
    downloadLink.href = thumbnails[currentIndex].src;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    lightboxImage.src = thumbnails[currentIndex].src;
    downloadLink.href = thumbnails[currentIndex].src;
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    lightboxImage.src = thumbnails[currentIndex].src;
    downloadLink.href = thumbnails[currentIndex].src;
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);
