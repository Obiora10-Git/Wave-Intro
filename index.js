document.addEventListener('DOMContentLoaded', () => {
fetch('./assets/phone_illustration.txt')
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}: File not found`);
    return res.text();
  })
  .then(htmlContent => {
    document.getElementById('imported-phone-illustration').innerHTML = htmlContent;
  })
  .catch(err => console.error("Error loading illustration:", err));


});

const dropDownBtn0 = document.getElementById('dropdown-btn-0');
const dropDownBtn1 = document.getElementById('dropdown-btn-1');
const dropDownBtn2 = document.getElementById('dropdown-btn-2');
const dropDownBtn3 = document.getElementById('dropdown-btn-3');

const footerWavePg = document.querySelector('.footer-sm-heading-pg');
const subContent1 = document.getElementById('sub-content-1');
const subContent2 = document.getElementById('sub-content-2');
const subContent3 = document.getElementById('sub-content-3');

dropDownBtn0.addEventListener('click', function() {
  footerWavePg.classList.toggle('dropdown')
});

dropDownBtn1.addEventListener('click', function() {
  subContent1.classList.toggle('dropdown')
});

dropDownBtn2.addEventListener('click', function() {
  subContent2.classList.toggle('dropdown')
});

dropDownBtn3.addEventListener('click', function() {
  subContent3.classList.toggle('dropdown')
});

const logoBtn = document.getElementById('logo-btn')
const sidebar = document.querySelector('.sidebar');

logoBtn.addEventListener('click', function() {
  sidebar.classList.toggle('hb-active');
});


const absoluteHeader = document.querySelector('header');

window.addEventListener('scroll', () => {
  // If the user has scrolled down more than 10 pixels from the very top of the page
  if (window.scrollY > 10) {
    absoluteHeader.classList.add('alt-color');
  } else {
    // Only removes it when they are back at the absolute top (scrollY <= 10)
    absoluteHeader.classList.remove('alt-color');
  }
});
