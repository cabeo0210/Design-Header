const header = document.querySelector(".header");
window.addEventListener('scroll', function(e) {
    const lastPosition = window.scrollY 
    if (lastPosition > 50) {
        header.classList.add('active')
    } else if (header.classList.contains('active')){
        header.classList.remove('active')
    } else {
        header.classList.remove('active')
    }
})