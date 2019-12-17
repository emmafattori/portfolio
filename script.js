	$(document).ready(function(){
			$('a[href*="#"]').on('click', function(e) {
  				e.preventDefault()

  			$('html, body').animate({
   				 scrollTop: $($(this).attr('href')).offset().top,
   			 }, 2000,'linear')
			})
			$(".open").on('click', function(){
				$(".mobile-nav").toggleClass("open")
			});

			$(".exit").on('click', function(){
				$(".mobile-nav").toggleClass("open")
			})
// Code for header image panorama provided by https://jsfiddle.net/os0moz5j/1/
			$('.panorama').on('mousemove',function(e){
				mousePos = e.pageX - $(this).offset().left;
  				eleWidth = $(this).outerWidth();
 				 imgWidth = $(this).find('img').outerWidth();
 				 relativeMousePos = mousePos / eleWidth;
				  imgPos = (imgWidth - eleWidth) * relativeMousePos;
			$(this).find('img').css('transform','translateX(-'+imgPos+'px)');
			});

			$('.panorama').on('mouseenter',function(){
				$(this).removeClass('default');
			}).on('mouseleave',function(){
			$(this).addClass('default');
  			$(this).find('img').css('transform','');
			})


		});