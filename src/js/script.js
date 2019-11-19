$(document).ready(function(){

  var res = $('.navigation__inner');
  $('[rel^="m"]').on("click", toggleOpen);

  $(document).click(function(e) {
    if($(e.target).closest(res).length || $(e.target).closest('.li-nav').length)
      return;
    res.fadeOut(300);
    //e.stopPropagation();
  });  
  
  function toggleOpen() {
    
    var link = $(this).attr('rel'),
        el = $('.navigation__inner.' + link);
    if(el.css('display') == 'none') {
      res.hide();
      el.fadeIn(300);
    } else {
      el.fadeOut(300);
    }
  }



  var time = 6;
  var $bar,
      $slick,
      isPause,
      tick,
      percentTime;
  
  // slick slider custom
    $slick = $('.slider');
    $slick.slick({
        draggable: true,
        adaptiveHeight: false,
        infinite: true,
        dots: true,
        mobileFirst: true,
        pauseOnDotsHover: true,
        //fade: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        responsive: [
          {
            breakpoint: 2000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        ]
    });

    $bar = $('.slider-progress .progress');

    $('.slider-wrapper').on({
        mouseenter: function() {
            isPause = true;
        },
        mouseleave: function() {
            isPause = false;
        }
    })

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if (isPause === false) {
            percentTime += 1 / (time + 0.1);
            $bar.css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $slick.slick('slickNext');
                startProgressbar();
            }
        }
    }


    function resetProgressbar() {
        $bar.css({
            width: 0 + '%'
        });
        clearTimeout(tick);
    }

    startProgressbar();








  /*Slick slider*/
//   var time = 6;
//   var $bar,
//       $slick,
//       isPause,
//       tick,
//       percentTime;
//   $slick = $('.mainSlickHeader');

//   $slick.slick({
//     arrows: true,
//     prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
//     nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
//     dots: true,
//     pauseOnDotsHover: true,
//     draggable: true,
//     adaptiveHeight: false,
//     mobileFirst: true,
//   });

//   $bar = $('.slider-progress .progress');

//   $('.slick-slider').on({
    
//     mouseenter: function() {
//       isPause = true;
//     },
//     mouseleave: function() {
//       isPause = false;
//     }

//   });

//   function startProgressbar() {
//     resetProgressbar();
//     percentTime = 0;
//     isPause = false;
//     tick = setInterval(interval, 10);
//   }

//   function interval() {
//     if(isPause === false) {
//       percentTime += 1 / (time + 0.1);
//       $bar.css({
//         width: percentTime + '%'
//       });
//       if(percentTime >= 100) {
//         $slick.slick('slickNext');
//         startProgressbar();
//       }   
//     }
    
//   }

//   function resetProgressbar() {
//     $bar.css({
//       width: 0 + '%'
//     });
//     clearTimeout(tick);
//   }
//   startProgressbar();


});
