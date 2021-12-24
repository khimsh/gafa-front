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
