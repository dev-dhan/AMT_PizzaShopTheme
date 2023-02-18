hamburger = document.querySelector(".hamburger" );
hamburger.onclick = function() { 
    navBar = document.querySelector(".nav-links");
    navBar.classList.toggle("active");
}


/**Go Up Button */
$(document).ready(function(){

$(window).scroll(function(){
    if($(this).scrollTop() > 40){
    $('#topBtn').fadeIn();
    } else{
    $('#topBtn').fadeOut();
    }
});

$("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
});
});
        