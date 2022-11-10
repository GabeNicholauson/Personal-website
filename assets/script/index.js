'use strict';

let goToAboutMe = Array.from(document.querySelectorAll('.go-to-about'));
let goToContactMe = Array.from(document.querySelectorAll('.go-to-contact'));
let replaceNav = document.querySelector('.replace-nav');
let navMenu = document.querySelector('.nav-menu');
let aboutMe = document.querySelector('.second');
let hidden = true;

goToAboutMe.forEach( (element) => {
    element.addEventListener('click', () => {
        aboutMe.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
    });
});

goToContactMe.forEach( (element) => {
    element.addEventListener('click', () => {
        aboutMe.scrollIntoView({
            behavior: 'smooth',
        });
    });
});

replaceNav.addEventListener('mouseover', () => {
    navMenu.classList.remove('hidden');
});

replaceNav.addEventListener('mouseout', () => {
    navMenu.classList.add('hidden');
});

navMenu.addEventListener('mouseover', () => {
    navMenu.classList.remove('hidden');
});

navMenu.addEventListener('mouseout', () => {
    navMenu.classList.add('hidden');
});