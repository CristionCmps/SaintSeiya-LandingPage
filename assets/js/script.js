$(document).ready(function () {
    // ABRIR BOX MENU MOBILE
    $('.mobile-menu').click(function () {
        $('.container__menu--mobile').toggleClass('active');
    });
});

let owl = $(".owl-carousel");
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    autoWidth: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        },
    },
});