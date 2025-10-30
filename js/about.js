const aboutArticle = document.querySelector('.about > article:first-child');
const box = document.querySelector('.about .box');

aboutArticle.addEventListener('click', () => {
  box.classList.toggle('active');
});