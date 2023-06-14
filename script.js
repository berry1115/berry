$(function() {
  $(function() {
    $('#toggle').on('click', function() {
      $('body').toggleClass('is-open');
      $('#main').toggleClass('overlay');
  });
    });

  
  
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');

      
    } else {
      $answer.addClass('open');
      $answer.slideDown();
    $(this).find('span').text('-'); 
      
    }
  });

  $('.slider').slick({
		autoplay: true,
		autoplaySpeed: 1000,
		speed:3000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
		dots: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        
    });
   


$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
});

});

