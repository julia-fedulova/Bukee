import "./import/modules";

let menuButton = document.querySelector(".button__menu");
let closeButton = document.querySelector(".button__menu_close");
let menu = document.querySelector(".header-list");
let header = document.querySelector(".header");
let logo = document.querySelector(".header__logo");

menuButton.onclick = function () {
    menu.classList.add("show");
    header.classList.add("show");
    logo.style.display = "none";
    menuButton.style.display = "none";
};
closeButton.onclick = function () {
    menu.classList.remove("show");
    header.classList.remove("show");
    logo.style.display = "block";
    menuButton.style.display = "block";
};

function runningNumbers(num, elem, step, time){
    let element = document.querySelector('.' + elem);
    let n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if(n >= num) {
            clearInterval(interval);
            n = num;
        }
        element.innerHTML = n;
    }, t);
}

const counter = document.querySelector('.counter-block');
const counterTop = counter.getBoundingClientRect().top + window.pageYOffset;
const counterBottom = counter.getBoundingClientRect().bottom + window.pageYOffset;
const counterHeight = counterBottom - counterTop;

window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > counterTop - window.innerHeight + counterHeight) {
        this.removeEventListener('scroll', onScroll);
        runningNumbers(12, "counter-block__published", 2, 700);
        runningNumbers(5, "counter-block__bestsellers", 1, 500);
        runningNumbers(15000, "counter-block__readers", 367, 1600);
    }
});

const anchor = document.querySelector('.arrow-up');
const mainPage = document.querySelector('.main-page');
const mainPageBottom = mainPage.getBoundingClientRect().bottom + window.pageYOffset;

window.addEventListener('scroll', function () {
    if(window.pageYOffset < mainPageBottom) anchor.style.opacity = '0';
    else anchor.style.opacity = '1';
});

anchor.addEventListener("click", function(e) {
    e.preventDefault() 
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
});



