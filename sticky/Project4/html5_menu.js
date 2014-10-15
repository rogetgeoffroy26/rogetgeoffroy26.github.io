$(".menu").click(function() {
  $(this).toggleClass("on");
  $(".menu-hover").slideToggle();
});


jQuery(document).ready(function($){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('#backToTop').fadeIn('slow');
        } else {
            $('#backToTop').fadeOut('slow');
        }
    });
    $('#backToTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        //$("html, body").scrollTop(0); //For without animation
        return false;
    });
});






function yScrollHandler(){
    var win = document.getElementById("peekaboo");
    if((window.pageYOffset + window.innerHeight) >= document.body.offsetHeight){
	//win.style.webkitTransition = "right 0.7s ease-in-out 0s";
	win.style.transition = "right 15s ease-in-out 0s";
	win.style.right = "-100%";
    } else {
	win.style.transition = "right 15s ease-in-out 0s";
	win.style.right = "100%";
    }
}
window.onscroll = yScrollHandler;


