const menuIcon=document.querySelector('#menu-icon');
const navLinks=document.querySelector('.nav-buttons');

menuIcon.onclick=()=>{
    navLinks.classList.toggle('active');
}