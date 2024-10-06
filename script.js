// Get modal element
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('captionText');
const closeBtn = document.querySelector('.close');

// Get all images
const galleryImages = document.querySelectorAll('.gallery-img');

// Add click event listener for each gallery image
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        captionText.innerHTML = `<strong>${img.dataset.title}</strong>: ${img.dataset.description}`;
    });
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when user clicks outside the image
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
