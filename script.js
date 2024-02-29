// header toggle
let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
    

})

// Typing Effect
let typed = new Typed('#auto-input', {
    strings: [' COMPUTER SCINCE STUDENT!',  'LAB TECHNCIAN!'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay:100,
    loop: true,
})