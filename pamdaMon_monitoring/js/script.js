// устанавливаем размер слайдов в галереи в зависимости от размеров окна браузера
 function set_body_height() { 
    $('#slide_img').height($(window).height());
  }
  $(document).ready(function() {
    $(window).bind('resize', set_body_height);
    set_body_height();
  });
  
//выпадающее меню
$(document).on("click", ".nav_img", function(event) {
        if (!$(".nav").hasClass("open")) {
            $(".nav").addClass("open");
            return false;
        } else {
            $(".nav").removeClass("open");
        }
    });
    
//если кликаем не по меню
$(document).on("click", function(event) {
        if (!$(event.target).closest("#web_menu").length) {
             $(".nav").removeClass("open");
        }
    });
    
    
//настройки для эффекта при перелистывании страницы (FullPage)
     $(document).ready(function() {
            $('#fullpage').fullpage({
                verticalCentered: true,
                resize: false,
                scrollingSpeed: 1200,
                anchors: ["home1", "dashboards1","features1", "pricing1"],
                navigation: true,
                navigationPosition: "right",
                loopBottom: false,
                fixedElements: ".header-fixed",
                paddingTop: '9em',
                
                
            //если покидаем страницу - анимация сбрасывается
                onLeave: function(index, nextIndex, direction) {
                    if (index == 4) {
                        resetAnimation()
                    }
                    if (index == 3) {
                        resetAnimatFeature()
                    }
                },
            //если переходим на страницу - запускается анимация
                afterLoad: function(anchorLink, index) {
                    if (index == 4) {
                        animatePricing();
                    }
                    if (index == 3) {
                        animateFeatures();
                    }
                }
            });
        });
        
    function animatePricing() { //запуск анимации1
        $(".price_block > div").animate({
            opacity: 1,
        }, 300, "swing", function() {});
    }

    function resetAnimation() { //сброс анимации
       $(".price_block > div").animate({
            opacity: 0,
        }, 300, "swing", function() {});

    }

    function animateFeatures() { //запуск анимации2
        $(".txt").animate({
            opacity: 1,
            top: "50px"
        }, 200, "swing", function() {});
        $(".bl_pict > img").fadeIn("slow");
    }

    function resetAnimatFeature() { //сброс анимации
       $(".txt").animate({
            opacity: 0,
            bottom: "20%"
        }, 200, "swing", function() {});
        $(".bl_pict > img").fadeOut("slow");
    }
    
window.onload = init;
	function init(){ // динамическое задание цвета для блоков на странице "features" (3)

        var arrColor = ["#9568a0", "#3aa6d0", "#efa24f", "#aebc2f", "#73C7AB", "#b53a3a", "#ff7272", "#0071a2", "#75CACC"];
        x = document.getElementById("block_9");

        for (i = 0; i < x.children.length; i++) {
            var tmp_el = x.children[i]
            tmp_el.style.backgroundColor = arrColor[i];
        }
    }
