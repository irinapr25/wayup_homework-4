$(function () {
	$(window).scroll(function() {
		$('.section__title').each(function(){
			var imagePos = $(this).offset().top;

		 	var topOfWindow = $(window).scrollTop();
		 	if (imagePos < topOfWindow+650) {
				$(this).addClass('animate__flip');
			}
		});
	});

	$(window).scroll(function() {
		$('.order__btn').each(function(){
			var imagePos = $(this).offset().top;

		 	var topOfWindow = $(window).scrollTop();
		 	if (imagePos < topOfWindow+650) {
				$(this).addClass('animate__heartBeat');
			}
		});
	});
});