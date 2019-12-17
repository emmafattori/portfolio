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

		});