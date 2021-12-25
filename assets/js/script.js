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

searchBoxControl.addEventListener('click', () => {
  if (navigation.classList.contains('active')) {
    navigation.classList.remove('active');
  }

  searchBox.classList.toggle('active');
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
