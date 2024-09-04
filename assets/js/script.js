// $(document).ready(function () {
//     // ABRIR BOX MENU MOBILE
//     $('.mobile-menu').click(function () {
//         $('.container__menu--mobile').toggleClass('active');
//     });
// });

let owl = $(".emphasis_carousel");
owl.owlCarousel({
    // center: false,
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    // autoWidth: true,
    responsive: {
        0: {
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


let owlll = $('.home__carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

const firstName = document.getElementById("firstName");
const email = document.getElementById("email");
const idade = document.getElementById("idade");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const nascimento = document.getElementById("datanasc");
const sangue = document.getElementById("sangue");
const localnasc = document.getElementById("localnasc");
const treinamento = document.getElementById("treinamento");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const erroFirstName = document.getElementById("erroFirstName");
const erroLastName = document.getElementById("erroLastName");
const erroEmail = document.getElementById("erroEmail");
const erroPassword = document.getElementById("erroPassword");

register.addEventListener("click", () => {
    const firstNameValue = firstName.value;
    const emailValue = email.value;
    //Nome
    if (firstNameValue == "") {
        erroFirstName.classList.remove("dnone");
        firstName.classList.add('inputError');
    } else {
        erroFirstName.classList.add("dnone");
        firstName.classList.remove('inputError')
    }
    //email
    if (!emailRegex.test(emailValue)) {
        erroEmail.classList.remove("dnone");
        email.classList.add('inputError');
    } else {
        erroEmail.classList.add("dnone");
        email.classList.remove("inputError");
    }
})