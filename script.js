var slideIndex = 0;

changeBg();
changeSlide();

function changeSlide() {
   var textSlider = document.querySelectorAll('.text-slider');
   
   textSlider.forEach(function(item) {
      item.style.display = 'none';
   });

   textSlider[slideIndex].style.display = 'block';
   slideIndex++;
   if(slideIndex >= textSlider.length) {slideIndex = 0;}

  setTimeout(changeSlide, 4000);

}

function changeBg() {
   var bg = document.querySelector('body');
   var bgIndex = Math.floor(Math.random() * 5 ) + 1;
   
   if(bgIndex >= 6) {bgIndex = 1;}
   bg.style.backgroundImage = 'url(img/bg-' + bgIndex + '.jpg)';
   bgIndex++;
   setTimeout(changeBg, 7500);
}


