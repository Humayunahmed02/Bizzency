$(function(){

      $(".navbar .srch_bar").click(function(){
        $(".navbar .nav-item").toggle();
      });

    // sticky navbar
    $(window).on('scroll', function () {

      var scroll = $(window).scrollTop();

      if (scroll < 245) {
        $(".navbar").removeClass("sticky");
      } else {
        $(".navbar").addClass("sticky");
      }
    });

      //  slick js

      // service slider
      $('.serv_slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1600,
        speed:1000,
        arrows:false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        
      });

      // portfolio slider
      $('.port_slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed:1000,
        arrows:true,
        prevArrow:'.left_arrow',
        nextArrow:'.right_arrow',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      // testimonial slider
      $('.testi_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows:true,
        prevArrow:'.testi_left_arrow',
        nextArrow:'.testi_right_arrow',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      // Blog slider
      $('.blog_slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        speed:500,
        arrows:true,
        prevArrow:'.blog_left_arrow',
        nextArrow:'.blog_right_arrow',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      // Expert slider
      $('.expert_slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed:1000,
        arrows:true,
        prevArrow:'.left_arrow',
        nextArrow:'.right_arrow',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      // back to top
      $(window).on('scroll', function() {
        if($(this).scrollTop() > 400){
            $('.back_to_top').fadeIn(200)
        } else{
            $('.back_to_top').fadeOut(200)
        }
      });

      $('.back_to_top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000);
      });

      // counterUp js
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });    

});