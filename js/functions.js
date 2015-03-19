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
      $(header).addClass('navbar-shrink');
      $("nav.navbar.navbar-default.navbar-fixed-top").css("background", "black");
      $("a.navbar-brand.page-scroll").css("color","#E53E00");
    }
    else {
      $(header).removeClass('navbar-shrink');
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

$('#responsive-menu-button').sidr({
  name: 'sidr-main',
  side: 'right',
  displace: false,
  source: function(name) {
    return '<a class="btn btn-default mobile-btn" >Close Menu <i class="fa fa-times"></i></a><nav class="nav"><ul class="nav navbar-nav navbar-right" id="nav-menu"><li><a class="page-scroll" href="#">Home <i class="fa fa-home"></i></a></li><li><a class="page-scroll" href="#about">About</a></li><li><a class="page-scroll" href="#open-source">Open Source</a></li><li><a class="page-scroll" href="#portfolio">Websites</a></li><li><a class="page-scroll" href="#contact">Contact</a></li></ul></nav>';
  }

});

$("a.btn.btn-default.mobile-btn").click(function(){
  $("#responsive-menu-button").vclick();
});
