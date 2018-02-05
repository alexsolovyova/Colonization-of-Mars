
$(document).ready(function(){
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 49) {
        $('body').addClass('header-fixed');
    } else {
        $('body').removeClass('header-fixed');
    }

    var topOffset = $('#demosection2').offset().top;
    var headerHeight = $('#topnav').height();
    var transitionPoint = topOffset - headerHeight;
    if (scrollTop > transitionPoint) {
        $('#topnav').addClass('alt-header');
    } else {
        $('#topnav').removeClass('alt-header');
    }
  });
});

$(function(){
  $('h1').delegate('span', 'mouseenter mouseleave', function(e){
    
    var span = $(this);
    
    if (e.type === 'mouseenter'){
      span.not(':animated').animate({ fontSize: '50px' });
    }
    else if (e.type === 'mouseleave'){
      span.animate({ fontSize: '70px' });
    }
  });
  
  var newText = '',
		  h1 = $('h1').text(),
		  len = h1.length;

	for (var i = 0; i < len; i++){
		newText += '<span>' + h1.charAt(i) + '</span>';
}
	$('h1').html(newText);	
});

$('.nav-toggle').on('click', function(){
  $('#menu').toggleClass('active');
});
$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
}); 