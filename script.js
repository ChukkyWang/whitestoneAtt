const toggleHamburger = document.getElementById('hamburgerX');
const mobile = document.getElementById('mobile-menu');
toggleHamburger.addEventListener('click', function(){
    if(toggleHamburger.className == "hamburger"){
        toggleHamburger.className = "open"
        mobile.className = 'mobile-menu mobile-menu-open'
    }

    else{
        toggleHamburger.className = "hamburger"
        mobile.className = 'mobile-menu'
    }
})