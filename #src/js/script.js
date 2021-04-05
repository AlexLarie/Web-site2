function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
   callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebP(function (support) {
   if (support == true) {
   document.querySelector('body').classList.add('webp');
   }else{
   document.querySelector('body').classList.add('no-webp');
   }
   });


// Пикер для меню


let links = document.querySelectorAll('.menu__link');
let parags = document.querySelectorAll('.main__item');
for (i=0;i<links.length;i++){
   links[i].addEventListener('click', function  activeLink(){
      document.querySelector('.settings__finger').style.animation = 'none';
      document.querySelector('.settings__finger').style.visibility = 'hidden';
      document.querySelector('.settings').style.opacity = 0;
      let n;
      for(let i = 0; i < links.length ; i++){
         links[i].classList.remove('active__link');
      };
      document.getElementById('burger__text').innerText = this.innerText;
      this.classList.add('active__link');
      n = this.getAttribute('number');
      for(let h = 0; h<parags.length;h++){
         parags[h].classList.remove('main__active');
         parags[h].style.left = '-1800px';
      }
      parags[n].classList.add('main__active');
      parags[n].style.left = '0px';

      menuRemove();
      for(let i=0 ; i<cards.length; i++){
         cards[i].classList.remove('about__active');
         crosses[i].classList.remove('about__close');
      }
      aboutDisabled.classList.remove('about__disabled');
      closePortfolio();
   })
}

//Бургер

let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu__list');

function menuToggle () {
   burger.classList.toggle('burger__active');
   menu.classList.toggle('menu__active');
   document.querySelector('.menu').classList.toggle('menu__active');
   document.querySelector('.container').classList.toggle('menu__active');
}

burger.onclick = menuToggle;

let contacts = document.getElementById('contacts');
let contactsParag = document.querySelector('.main__contacts');

//Пикер для кнопки

function removeOnClick (link, parag){
   menuRemove();
   for(let i = 0; i < links.length ; i++){
      links[i].classList.remove('active__link');
   };
   document.getElementById('burger__text').innerText = link.innerText;
   document.querySelector('.settings__finger').style.animation = 'none';
   document.querySelector('.settings__finger').style.visibility = 'hidden';
   document.querySelector('.settings').style.opacity = 0;
   link.classList.add('active__link');
   for(let h = 0; h<parags.length;h++){
      parags[h].classList.remove('main__active');
      parags[h].style.left = '-1800px';
   };
   parag.style.left = '0px';
   parag.classList.add('main__active');
   closePortfolio();
}
document.querySelector('.general__button').addEventListener('click' , ()=> removeOnClick(contacts, contactsParag));


// Закрыть меню по клику за меню
document.querySelector('.main').onclick = menuRemove;

//Закрыть меню по пункту
function menuRemove(){
   burger.classList.remove('burger__active');
   menu.classList.remove('menu__active');
   document.querySelector('.menu').classList.remove('menu__active');
   document.querySelector('.container').classList.remove('menu__active');
}


//Открыть главную по аватарке
let generalParag = document.querySelector('.general');
let general = document.getElementById('general');


document.querySelector('.header__avatar').addEventListener('click', () => removeOnClick(general, generalParag));

//About card на весь экран

let cards = document.querySelectorAll('.about__card');
let crosses = document.querySelectorAll('.cross');
let aboutDisabled = document.getElementById('about__disabled');

for(let i=0 ; i<cards.length; i++){
   cards[i].addEventListener('click', ()=>{
      cards[i].classList.toggle('about__active');
      crosses[i].classList.toggle('about__close');
      aboutDisabled.classList.toggle('about__disabled');
   })
}

aboutDisabled.onclick = () => {
   aboutDisabled.classList.remove('about__disabled');
   cards.forEach((element)=>{
      element.classList.remove('about__active');
   })
   crosses.forEach((element)=>{
      element.classList.remove('about__close');
   })
}

//Показ для ссылок

let formLinks = document.querySelectorAll('.contacts__link');
let linkButton = document.getElementById('linksButton');

linkButton.onclick = () => {
   for(let i=0; i<formLinks.length; i++){
      formLinks[i].classList.add('link__active');
   }
   linkButton.setAttribute('disabled', true);
   linkButton.innerText = 'Thank you';
}

//Выделение для первого слова титлов

// let titles = document.querySelectorAll('.title');
// console.log(titles);

// for(let i=0 ; i<titles.length; i++){
//    let titleText = titles[i].innerText;
//    let titleWords = titleText.split(' ');
//    let newWord = document.createElement('span');

//    newWord.style.backgroundColor = 'red';
//    newWord.innerText = titleWords[0];
//    titles[i].appendChild(newWord);
// }

let portfolioBtns = document.querySelectorAll('.portfolio__btn');
portfolioBtns.forEach((element) => {
   element.addEventListener('click',(event)=>{
      closePortfolio();
      event.target.parentElement.lastElementChild.classList.toggle('portfolio__description--active');
   })
})

let portfolioCloseBtns = document.querySelectorAll('.portfolio__close');
portfolioCloseBtns.forEach((element) => {
   element.addEventListener('click',() => closePortfolio())
});

function closePortfolio(){
   portfolioBtns.forEach((element) => {
      element.parentElement.lastElementChild.classList.remove('portfolio__description--active');
   })
}

//Изменение цветовой схемы

document.getElementById('color').onclick = changeColor;
let descriptions = document.querySelectorAll('.portfolio__description');

function changeColor (event) {
   document.querySelector('body').classList.toggle('color__change');
   parags.forEach((element) => {
      element.classList.toggle('color__change');
   });
   cards.forEach((element) => {
      element.classList.toggle('color__change2');
   });
   event.target.classList.toggle('color__active');
   descriptions.forEach((element) => {
      element.classList.toggle('color__change2');
   });
   document.querySelector('.settings__finger').classList.toggle('finger__active');

   links.forEach((element) => {
      element.classList.toggle('color__change2');
   })
}


