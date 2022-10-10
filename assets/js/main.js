(function($) { "use strict";

  var filterList = {
    init: function () {
    $('#portfoliolist').mixItUp({
      selectors: {
        target: '.portfolio',
        filter: '.filter' 
      },
        load: {
          filter: '.clasica, .contemporanea, .florencia, .forte, .milan'  
        }     
      });               
    }
  };
  // Run the show!
  filterList.init();

  //WOW
  new WOW().init();
  $(window).on('load', function() {
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 100) {
        $('.fixed-top').addClass('menu-bg');
      } else {
        $('.fixed-top').removeClass('menu-bg');
      }
    });
  });

	// Backgrounds
  $('section, .img-bg').each(function(){ 
    if( $(this).attr('data-bg') ) $(this).css('background-image', 'url(' + $(this).attr('data-bg') + ')'); 
  });

  //Header smaller
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 80) {
      $('header').addClass('smaller');
    } else {
      $('header').removeClass('smaller');
    }
  });

}(jQuery));

$(document).ready(function(){
  //Mobile menu
  $('.hamburger').click(function(){
    $('body').addClass('open-menu');
  });
  $('.close-menu').click(function(){
    $('body').removeClass('open-menu');
  });

  $(".hamburger").click(function() {
    var ancho = "";
    var ventana = $(window).width();
    if(ventana < 426) {
      ancho = "100%";
    } else {
      ancho = "350px";
    }
    $('#mobile-menu').animate({
      right: "0px",
      width: ancho
    }, 300, function() {
      statusmenu = "abierto";
    });
  });
  $(".close-menu").click(function() {
    $('#mobile-menu').animate({
        right: "-350px",
        width: "350px"
    }, 300, function() {
      statusmenu = "cerrado";
    });
  });

  //single product
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });

  //Herobanner
  $('.herobanner').slick({
    fade: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false
        }
      }
    ]
  });

  //Applications
  $('.carrusel-application').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
        slidesToShow: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
        slidesToShow: 1
        }
      }
    ]
  });

  //Applications
  $('.carrusel-features').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    appendArrows: $('.features_arrows'),
    nextArrow: '<div class="features_nav icon-right-arrow"></div>',
    prevArrow: '<div class="features_nav icon-left-arrow"></div>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
        slidesToShow: 1
        }
      }
    ]
  });

  //Tabs
  $('#tabs-nav li:first-child').addClass('active');
  $('.tab-content').hide();
  $('.tab-content:first').show();
  $('#tabs-nav li').click(function(){
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });

  
  //Scroll
  $('.scroll').click(function(){
    var $anchor = $(this);
    $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top + -60 }, 1000);
    return false;
  });

  //Accordion
  $('.acc__title').click(function(j) {
    var dropDown = $(this).closest('.acc__card').find('.acc__panel');
    $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.acc').find('.acc__title.active').removeClass('active');
      $(this).addClass('active');
    }
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });

  //Fancybox
  $('.fancybox').fancybox();
  $('.fancybox-media')
    .attr('rel', 'media-gallery')
    .fancybox({
      openEffect : 'none',
      closeEffect : 'none',
      prevEffect : 'none',
      nextEffect : 'none',

      arrows : false,
      helpers : {
        media : {},
        buttons : {}
      }
    });
  
  //Image parallax
  $('.img-parallax').each(function(){
    var img = $(this);
    var imgParent = $(this).parent();
    function parallaxImg () {
      var speed = img.data('speed');
      var imgY = imgParent.offset().top;
      var winY = $(this).scrollTop();
      var winH = $(this).height();
      var parentH = imgParent.innerHeight();     
      var winBottom = winY + winH;
      if (winBottom > imgY && winY < imgY + parentH) {
        var imgBottom = ((winBottom - imgY) * speed);
        var imgTop = winH + parentH;
        var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
      }
      img.css({
        top: imgPercent + '%',
        transform: 'translate(-50%, -' + imgPercent + '%)'
      });
    }
    $(document).on({
      scroll: function () {
        parallaxImg();
      }, ready: function () {
        parallaxImg();
      }
    });
  });
  //Title parallax
  $('.hero-slide-title').each(function(){
    var img = $(this);
    var imgParent = $(this).parent();
    function parallaxImg () {
      var speed = img.data('speed');
      var imgY = imgParent.offset().top;
      var winY = $(this).scrollTop();
      var winH = $(this).height();
      var parentH = imgParent.innerHeight();     
      var winBottom = winY + winH;
      if (winBottom > imgY && winY < imgY + parentH) {
        var imgBottom = ((winBottom - imgY) * speed);
        var imgTop = winH + parentH;
        var imgPercent = ((imgBottom / imgTop) * 100) + (20 - (speed * 50));
      }
      img.css({
        top: imgPercent + '%'
      });
    }
    $(document).on({
      scroll: function () {
        parallaxImg();
      }, ready: function () {
        parallaxImg();
      }
    });
  });


});