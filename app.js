let currentIndex = 0;

function prevImage() {
  const gallery = document.querySelector('.gallery');
  currentIndex = Math.max(currentIndex - 1, 0);
  gallery.scrollTo({
    left: gallery.children[currentIndex].offsetLeft,
    behavior: 'smooth'
  });
}

function nextImage() {
  const gallery = document.querySelector('.gallery');
  currentIndex = Math.min(currentIndex + 1, gallery.children.length - 1);
  gallery.scrollTo({
    left: gallery.children[currentIndex].offsetLeft,
    behavior: 'smooth'
  });
}
