// about picture
const picture_select = {
  pc: ['img/top2.png', 'img/top3.png','img/top4.png','img/top5.png','img/top6.png','img/top.png',],
  sp: ['img/top2-sp.png', 'img/top3-sp.png','img/top4-sp.png','img/top1-sp.png',],
};

function getPictureNames() {
  const currentPicture = window.matchMedia('(max-width: 376px)').matches
  ? picture_select.sp
  : picture_select.pc;
  return currentPicture;
}

const PICTURES = getPictureNames();
const firstPicture = PICTURES[PICTURES.length-1];
let currentIndex = 0;
const intervalNum = 10000;

// get dom
const open = document.getElementById("humburger");
const check= document.getElementById("check");
const close = document.getElementById("hide");
const sp = document.getElementById("sp");
const header = document.getElementById("h_color");
const headerPic = document.getElementById('headerPic');

// first picture
headerPic.style.backgroundImage = `url(${firstPicture})`;

// humburger menu
open.addEventListener('click', () => {
  sp.classList.add('toggle');
  header.classList.add('background_toggle');
  check.classList.add('unvisible');
});

close.addEventListener('click', () => {
  sp.classList.remove('toggle');
  header.classList.remove('background_toggle');
  check.classList.remove('unvisible');
});

// slideshow
function slideShow () {
  if (currentIndex >= PICTURES.length){
    currentIndex = 0;
  };
  headerPic.style.backgroundImage = `url(${PICTURES[currentIndex]})`;
  currentIndex++;
}

// setInterval(slideShow,intervalNum);

