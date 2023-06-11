$(function() {
  $(function() {
    $('#toggle').on('click', function() {
      $('body').toggleClass('is-open');
      $('#main').toggleClass('overlay');
  });
  $(document).on('click','.overlay', function() {
    $('body').removeClass('is-open');
    $('#main').removeClass('overlay');
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


});
