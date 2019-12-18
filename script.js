	$(document).ready(function(){
			$('a[href*="#"]').on('click', function(e) {
  				e.preventDefault()

  			$('html, body').animate({
   				 scrollTop: $($(this).attr('href')).offset().top,
   			 }, 2000,'linear')
			})
// Toggling the mobile menu to open on click of the hamburger menu icon
			$(".open").on('click', function(){
				$(".mobile-nav").toggleClass("open")
			});
// Toggling the mobile menu to close on the click of the hamburger menu icon
			$(".exit").on('click', function(){
				$(".mobile-nav").toggleClass("open")
			})
// Code for header image panorama provided by https://jsfiddle.net/os0moz5j/1/
// When the mouse enters the image field, move the image to the right or left position.
			$('.panorama').on('mousemove',function(e){
				mousePos = e.pageX - $(this).offset().left;
  				eleWidth = $(this).outerWidth();
 				 imgWidth = $(this).find('img').outerWidth();
 				 relativeMousePos = mousePos / eleWidth;
				  imgPos = (imgWidth - eleWidth) * relativeMousePos;
			$(this).find('img').css('transform','translateX(-'+imgPos+'px)');
			});
// When the mouse exits the image field, return the image to the default position that it started in.
			$('.panorama').on('mouseenter',function(){
				$(this).removeClass('default');
			}).on('mouseleave',function(){
			$(this).addClass('default');
  			$(this).find('img').css('transform','');
			})
		});