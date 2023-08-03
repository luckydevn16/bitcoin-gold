// STICKY HEADER
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

// WINNERS WIDGET
let winnersData = [
    {"name":"Kaan D.","photo":"assets/img/users/male/1.jpg","profit":"575"},
    {"name":"Emre B.","photo":"assets/img/users/male/2.jpg","profit":"315"},
    {"name":"Deniz D.","photo":"assets/img/users/male/3.jpg","profit":"455"},
    {"name":"Naime K.","photo":"assets/img/users/female/1.jpg","profit":"425"},
    {"name":"Abdülaziz F.","photo":"assets/img/users/male/4.jpg","profit":"520"},
    {"name":"Hasim D.","photo":"assets/img/users/male/5.jpg","profit":"488"},
    {"name":"Medine C.","photo":"assets/img/users/female/2.jpg","profit":"1050"},
    {"name":"Bahtiyar P.","photo":"assets/img/users/male/6.jpg","profit":"346"},
    {"name":"Barış B.","photo":"assets/img/users/male/7.jpg","profit":"915"},
    {"name":"Dilara G.","photo":"assets/img/users/female/3.jpg","profit":"864"},
    {"name":"Eymen S.","photo":"assets/img/users/male/8.jpg","profit":"498"},
    {"name":"Halit F.","photo":"assets/img/users/male/9.jpg","profit":"624"},
    {"name":"Fatma Z.","photo":"assets/img/users/female/4.jpg","profit":"759"},
    {"name":"Rıfat V.","photo":"assets/img/users/male/10.jpg","profit":"886"},
    {"name":"Nurten D.","photo":"assets/img/users/female/5.jpg","profit":"959"}
];

let index = 0;
const winnerName = document.querySelector('#winnerName');
const winnerImg = document.querySelector('#winnerImg');
const winnerProfit = document.querySelector('#winnerProfit');

function change() {
    winnerName.innerHTML = winnersData[index].name;
    winnerImg.src = winnersData[index].photo;
    winnerProfit.innerHTML = winnersData[index].profit;
    index > (winnersData.length - 2) ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 6000);
};

// MENU ITEMS HIGHLIGHTING
const sections = document.querySelectorAll('section');
const navListItems = document.querySelectorAll('.nav-list-item');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight)) {
            current = section.getAttribute('id');
        }
    })

    navListItems.forEach( item => {
        item.classList.remove('active');
        if (item.classList.contains(current)) {
            item.classList.add('active');
        }
    })
})

// NAVIGATION
const scrollToElem = (elem) => {
    document.querySelector(elem).scrollIntoView({behavior:"smooth",block:"center"});
}

// ANIMATION ON SCROLL
let animatedItems = document.querySelectorAll('.animated');

if (animatedItems.length) {
    function fadeInOnScroll() {
        for (i = 0; i < animatedItems.length; i++) {
            let animatedItem = animatedItems[i];
            let animatedItemHeight = animatedItem.offsetHeight;
            let animatedItemOffset = offset(animatedItem).top;
            let animationStart = 2;

            let animatedItemPoint = window.innerHeight - animatedItemHeight / animationStart;

            if (animatedItemHeight > window.innerHeight) {
                animatedItemPoint = window.innerHeight - window.innerHeight / animationStart;
            }

            if ((pageYOffset > animatedItemOffset - animatedItemPoint) && pageYOffset < (animatedItemOffset + animatedItemHeight)) {
                animatedItem.classList.add('fade-in');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}

window.addEventListener('scroll', fadeInOnScroll);

// REVIEWS CAROUSEL
var splide = new Splide( '.splide', {
    perPage: 3,
    type   : 'loop',
    perMove: 1,
});
if (document.body.clientWidth < 1000) {
    var splide = new Splide( '.splide', {
        perPage: 2,
        type   : 'loop',
        perMove: 1,
    });
}
if (document.body.clientWidth < 680) {
    var splide = new Splide( '.splide', {
        perPage: 1,
        type   : 'loop',
        perMove: 1,
    });
}
splide.mount();

// MOBILE MENU
let body = document.querySelector('body');
let menuOpenImg = document.querySelector('.menu-open-img');
let menuCloseImg = document.querySelector('.menu-close-img');
let menuMobile = document.querySelector('.navigation.mobile');
let navListMobile = document.querySelector('.nav-list.mobile');


const menuOpening = () => {
    menuMobile.style.transform = 'scaleX(1)';
    menuMobile.style.opacity = '1';
    body.classList.add('blocked');
}

const menuClosing = () => {
    menuMobile.style.transform = 'scaleX(0)';
    menuMobile.style.opacity = '0';
    body.classList.remove('blocked');
}

menuOpenImg.onclick = () => {
    menuOpening();
}
menuCloseImg.onclick = () => {
    menuClosing();
}

// Form Submission
let nameValue = document.querySelector('.name');
let lastnameValue = document.querySelector('.lastname');
let emailValue = document.querySelector('.email');
let phoneValue = document.querySelector('.phone');
let requiredFields = document.querySelectorAll('.required-fields');

const formSubmission = () => {
    if (nameValue.value != '' && lastnameValue.value != '' && emailValue.value != '' && phoneValue.value != '') {
        window.location.href = 'thankyou.html';
    } else {
        requiredFields.forEach((e) => {
            e.classList.add('visible');
        })
    }
}

const inputFields = document.querySelectorAll('.name, .lastname, .email, .phone');
for (let inputItem of inputFields) {
    inputItem.addEventListener('focus', function() {
        requiredFields.forEach((e) => {
            if (e.classList.contains('visible')) {
                e.classList.remove('visible');
            }
        })
    });
}
                            
                            
