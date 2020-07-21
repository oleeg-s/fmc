$(document).ready(function(){

    const buttonList = document.querySelectorAll('.btn');
    const overlay = document.querySelector('.overlay');
    const close = document.querySelector('.modal__close');
    const countryBtn = document.querySelector('.country-btn');
    const header = document.querySelector('.header');
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');

    buttonList.forEach(item => {
        item.addEventListener('click', () => {
            overlay.classList.toggle('overlay__active');
            document.body.classList.toggle('modal-on');
        });
    });

    close.addEventListener('click', () => {
        overlay.classList.toggle('overlay__active');
        document.body.classList.toggle('modal-on');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
          $('.pageup').fadeIn('slow');
        } else {
          $('.pageup').fadeOut('slow');
        }
    });

      $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    countryBtn.addEventListener('click', () => {
        header.classList.toggle('header_active');
    });

    header.addEventListener('click', () => {
      header.classList.toggle('header_active');
    });

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
    });

    menu.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
    }); 

});


