$(document).ready(function () {
    // ABRIR BOX MENU MOBILE
    $('.mobile-menu').click(function () {
        $('.container__menu--mobile').toggleClass('active');
    });
});

let owl = $(".emphasis_carousel");
owl.owlCarousel({
    // center: false,
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    // autoWidth: true,
    responsive:{
        0:{
            items: 1 
        },
    }
});


let owll = $(".personagens__carrosel");
owll.owlCarousel({
    autoWidth: true,
    loop: true,
    margin: 0,
    nav: false,
    dots: false,

    // autoWidth: true,
    
});
