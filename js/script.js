let hamburger = document.querySelector('.hamburger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click',function(){
	mobileNav.classList.add('open');
});
times.addEventListener('click',function(){
	mobileNav.classList.remove('open');
});


function sendEmail(){
	window.location.assign("mailto:ankitbanerjee983@gmail.com");
}
