// Плавный скролл к нужному блоку
		$("nav a").click(function(e){
			var href=$(this).attr("href");
			$("html,body").animate({scrollTop:$(href).offset().top},1000);
		});


// Стрелочка для скролла вверх
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {  
        $('.top').fadeIn(200);  
    } else {
        $('.top').fadeOut(200);
    }
});
$('.top').click(function() { 
    $('body,html').animate({
        scrollTop : 0             
    }, 500);
});
