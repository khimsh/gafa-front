const navigation = document.querySelector('.site-nav');
const navControl = document.querySelector('.nav-control-btn');

navControl.addEventListener('click', () => {
  if (searchBox.classList.contains('active')) {
    searchBox.classList.remove('active');
  }

  navigation.classList.toggle('active');
});

const searchBoxControl = document.querySelector('.search-control-btn');
const searchBox = document.querySelector('.header-search-box');
const searchBoxClose = document.querySelector('.header-search-box__close');

searchBoxControl.addEventListener('click', () => {
  searchBox.classList.add('active');
});

searchBoxClose.addEventListener('click', () => {
  searchBox.classList.remove('active');
});

// dropdowns
if (document.querySelector('[data-dropdown]')) {
  const dropdowns = document.querySelectorAll('[data-dropdown]');

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector('[data-dropdown-trigger]');

    trigger.addEventListener('click', () => {
      dropdown.classList.toggle('open');
      // console.log(dropdown);
    });
  });
}

if (document.querySelector('.choose-league')) {
  const dropdown = document.querySelector('.choose-league');

  const trigger = dropdown.querySelector('[data-dropdown-trigger]');

  trigger.addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });
}

// Modal
if (document.querySelector('.photo-gallery-modal')) {
  const galleryModal = document.querySelector('.photo-gallery-modal');
  const mainImage = document.querySelector('[data-main-image]');
  const imagesContainer = document.querySelector('[data-images]');
  const arrLeft = document.querySelector('[data-prev]');
  const arrRight = document.querySelector('[data-next]');
  const fullscreen = document.querySelector('[data-fullscreen]');
  const toggleGallery = document.querySelector('[data-toggle-gallery]');
  const closeModalBtn = document.querySelector('[data-close]');
  const openModalBtns = document.querySelectorAll('[data-open-gallery]');
  let counter = 0;

  let images = [
    {
      imgSrc: 'https://lipsum.app/id/1/1024x768',
      imgDesc: '1',
    },
    {
      imgSrc: 'https://lipsum.app/id/2/1024x768',
      imgDesc: '2',
    },
    {
      imgSrc: 'https://lipsum.app/id/3/1024x768',
      imgDesc: '3',
    },
    {
      imgSrc: 'https://lipsum.app/id/4/1024x768',
      imgDesc: '4',
    },
    {
      imgSrc: 'https://lipsum.app/id/5/1024x768',
      imgDesc: '5',
    },
  ];

  images.forEach((image) => {
    let newImage = createImageTag(image.imgSrc, image.imgDesc);

    imagesContainer.appendChild(newImage);
  });

  imagesContainer.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'img') {
      mainImage.src = e.target.src;
      mainImage.alt = e.target.alt;

      // Set counter to current image
      let obj = images.find((image) => image.imgSrc === e.target.src);
      let index = images.indexOf(obj);

      counter = index;
    }
  });

  // Set the displayed image
  mainImage.src = images[counter].imgSrc;
  mainImage.alt = images[counter].imgDesc;

  // Go to Previous image
  arrLeft.addEventListener('click', () => {
    previousImage();
  });

  // Go to Next image
  arrRight.addEventListener('click', () => {
    nextImage();
  });

  // Keyboard controls
  window.addEventListener('keydown', (e) => {
    if (galleryModal.classList.contains('active')) {
      if (e.key == 'ArrowLeft') {
        previousImage();
      }

      if (e.key == 'ArrowRight') {
        nextImage();
      }

      if (e.key == 'Escape') {
        closeModal();
      }
    }
  });

  // Show all images at the bottom
  toggleGallery.addEventListener('click', () => {
    imagesContainer.classList.toggle('hide');
  });

  // Enter fullscreen
  fullscreen.addEventListener('click', () => {
    galleryModal
      .requestFullscreen()
      .then(function () {
        // element has entered fullscreen mode successfully
      })
      .catch(function (error) {
        // element could not enter fullscreen mode
      });
  });

  // Close modal
  closeModalBtn.addEventListener('click', () => {
    closeModal();
  });

  // Open modal
  openModalBtns.forEach((openModalBtn) => {
    openModalBtn.addEventListener('click', () => {
      galleryModal.classList.add('active');
    });
  });

  function createImageTag(src, desc) {
    let image = document.createElement('img');
    image.src = src;
    image.alt = desc;

    return image;
  }

  function nextImage() {
    counter = counter + 1;
    if (counter > images.length - 1) {
      counter = 0;
    }

    mainImage.src = images[counter].imgSrc;
  }

  function previousImage() {
    counter = counter - 1;

    if (counter < 0) {
      counter = images.length - 1;
    }
    mainImage.src = images[counter].imgSrc;
  }

  function closeModal() {
    galleryModal.classList.remove('active');
  }
}
