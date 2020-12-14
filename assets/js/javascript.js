(function ($) {
  "use strict";

  /**
   * Global Variables
   */
  var pages = {
    homePage: 'pageHome',
    aboutPage: 'pageAbout',
  };
  var currentPage = document.querySelector('.mp-main-content') && document.querySelector('.mp-main-content').getAttribute('id');
  /**
   * DOM Event Listener
   */
  $(document).ready(function () {
    AOS.init({
      mirror: true
    });
    new WOW().init();
    appInit(currentPage);
    $('.menu').click(function () {
      if ($('.overlay').hasClass('over')) {
        $('.overlay').toggleClass('show animated flipInX')
        $('header').toggleClass('shirk')
        $('body').toggleClass('hidden')
        // $('.menu').textCon
      }
      ////
      $('.overlay').addClass('animated flipInX  ')
    })
    $('.circle').click(function () {
      if ($('.overlay').hasClass('over')) {
        $('.overlay').toggleClass('show animated flipInX')
        $('header').toggleClass('shirk')
        // $('.menu').textCon
      }
      $('.overlay').addClass('animated flipInX  ')
    })
    //
        

    function scrollTrigger() {
      var boxes = document.querySelectorAll('.script-item');
    
      boxes.forEach(function(box){
         var boxPosition = box.getBoundingClientRect().top;
         var boxPositionPercent = (boxPosition / window.innerHeight) * 100;
      console.log(boxPositionPercent);
        if($(window).width() >1025){
          if (boxPositionPercent >= 60 && boxPositionPercent <= 75  ) {
            box.classList.add('scroll-active')
          } else {
            box.classList.remove('scroll-active')
          }
        }else{
          if (boxPositionPercent >= 70 && boxPositionPercent <= 80 ) {
            box.classList.add('scroll-active')
            } else {
              box.classList.remove('scroll-active')
            }
        }
       });
   }

  window.addEventListener("scroll", scrollTrigger);
        // //menu
        // var item = document.querySelectorAll('li.script-item')
        // item.forEach((value, index) =>{
        //     var location = value.offsetTop;
            
        //     $(window).scroll(function() {    
        //       var scroll = $(window).scrollTop();
        //        //>=, not <=
              
        //       if (scroll <= location-400 && scroll >= location-450) {
        //           console.log(location)
        //           $("li.script-item").addClass("darkHeader");
        //       }
        //   }); //missing );
        // })
    //Click TOOGLE MENU
    jQuery.fn.extend({
      toggleText: function (a, b) {
        var isClicked = false;
        var that = this;
        this.click(function () {
          if (isClicked) { that.text(a); isClicked = false; }
          else { that.text(b); isClicked = true; }
        });
        return this;
      }
    });
    $('.menu').toggleText("Menu", "Close");

    $('.video').parent().click(function () {
      if ($(this).children(".video").get(0).paused) {
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
      } else {
        $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
      }
    });
    //scrolltop
    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
    });
    $('#return-to-top').click(function () {      // When arrow is clicked
      $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
      }, 500);
    });

  });

  /**
   * App Init
   */
  function appInit(id) {
    switch (id) {
      case pages.homePage:
        homeActions.init();
        break;
      default:
        break;
    }
  }
  var homeActions = {
    init: function () {
      console.log('Home init');
    }
  };

  /**
   * Function Declarations
   */

  // ************************************************* HOME *************************************************


  /**
   * Home Actions
   */


  // ************************************************* ABOUT *************************************************

  /**
   * About Actions
   */
})(jQuery);
