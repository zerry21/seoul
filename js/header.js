$(document).ready(function () {
  const $hamburger = $('.hambuger');
  const $menu = $('.menu');
  const $list = $('.list');
  const $gnbItems = $('.gnb > ul li');

  // 햄버거 클릭
  $hamburger.click(function () {
    $menu.toggleClass('active');
  });

  // gnb li 클릭
  $gnbItems.click(function () {
    $list.toggleClass('open');
  });
});

const firstArticle = document.querySelector('.abox > article:first-child');
const dbox = document.querySelector('.dbox');

firstArticle.addEventListener('click', () => {
  dbox.classList.toggle('active'); // 나타났다 사라졌다
});