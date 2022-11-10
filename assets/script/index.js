'use strict';

let goToAboutMe = Array.from(document.querySelectorAll('.go-to-about'));
let goToContactMe = Array.from(document.querySelectorAll('.go-to-contact'));
let copyEmail = Array.from(document.querySelectorAll('.fa-envelope'));
let replaceNav = document.querySelector('.replace-nav');
let navMenu = document.querySelector('.nav-menu');
let aboutMe = document.querySelector('.second');
let email = 'gnicholauson@gmail.com';

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

copyEmail.forEach( (element) => {
    element.addEventListener('click', () => {
        navigator.clipboard.writeText(email);
        alert('Email copied to clipboard');
    });
});

replaceNav.addEventListener('mouseover', () => {navShow();});

replaceNav.addEventListener('mouseout', () => {navHide();});

navMenu.addEventListener('mouseover', () => {navShow();});

navMenu.addEventListener('mouseout', () => {navHide();});

/*******************
    Functions
*******************/

function navHide() {navMenu.classList.add('hidden');}

function navShow() {navMenu.classList.remove('hidden');}