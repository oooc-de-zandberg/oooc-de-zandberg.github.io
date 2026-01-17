// Image Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create lightbox modal element
  const lightbox = document.createElement('div');
  lightbox.id = 'image-lightbox';
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img class="lightbox-content" id="lightbox-img">
    <div class="lightbox-caption"></div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');

  // Make all images with specific classes clickable
  const clickableImages = document.querySelectorAll('.highlight-image, .highlight-image-small');
  
  clickableImages.forEach(img => {
    // Add click cursor
    img.style.cursor = 'pointer';
    
    // Add click event
    img.addEventListener('click', function() {
      lightbox.style.display = 'flex';
      lightboxImg.src = this.src;
      lightboxCaption.textContent = this.alt;
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = 'hidden';
    });
  });

  // Close lightbox when clicking the X button
  closeBtn.addEventListener('click', closeLightbox);

  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox || e.target === closeBtn) {
      closeLightbox();
    }
  });

  // Close lightbox with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
