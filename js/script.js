hamburger = document.querySelector(".hamburger" );
hamburger.onclick = function() { 
    navBar = document.querySelector(".nav-links");
    navBar.classList.toggle("active");
}
