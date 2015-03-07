/*!
* Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
* Code licensed under the Apache License v2.0.
* For details, see http://www.apache.org/licenses/LICENSE-2.0.
*/

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

var cbpAnimatedHeader = (function() {
  var docElem = document.documentElement,
  header = document.querySelector( '.navbar-default' ),
  didScroll = false,
  changeHeaderOn = 100;

  function init() {
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 250 );
      }
    }, false );
  }

  function scrollPage() {
    var sy = scrollY();
    if ( sy >= changeHeaderOn ) {
      classie.add( header, 'navbar-shrink' );
      $("nav.navbar.navbar-default.navbar-fixed-top").css("background", "black");
      $("a.navbar-brand.page-scroll").css("color","#E53E00");
    }
    else {
      classie.remove( header, 'navbar-shrink' );
      $("nav.navbar.navbar-default.navbar-fixed-top").css("background", "none");
      $("a.navbar-brand.page-scroll").css("color", "#fff");
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();
})();

$(document).ready(function(){
  $('.col-md-10.col-md-offset-1.software').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: false,
    easing: 'easeInOutCubic',
    responsive:
    [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
    ]
  });
});

function sendMail() {
  var link = "mailto:mattm3646@gmail.com";
  link += "?subject=" + escape("Project Idea");
  link += "&body=" + escape(document.getElementById('bodyText').value);

  window.location.href = link;
}
/*
$(".col-lg-3.text-center.repo").hover(function(){
  $(this).stop(true, true).css("background-color","#E53E00");
  $(this).css("color","black");
  $("#gh_repo a").css("color","black");
}, function(){
  $(this).stop(true, true).css("background-color","#2f2f2f");
  $(this).css("color","white");
  $("#gh_repo a").css("color","black");
});
*/
