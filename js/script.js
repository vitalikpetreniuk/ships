$(function () {
    if($('.slick').length){
        $('.slick.main-owl').slick({
            draggable: true,
            arrows: true,
            dots: true,
            fade: true,
            speed: 900,
            infinite: true,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            touchThreshold: 100
        });
        $('.slick.docs-owl').slick({
            autoplay: true,
            draggable: true,
            arrows: true,
            dots: true,
            fade: true,
            speed: 900,
            infinite: true,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            touchThreshold: 100
        });
    }
    if($('.flor-select').length){
        $('.flor-select').slick({
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            arrows: true
        });
    }
    if($('.window-view').length){
        $('.window-view').slick({
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            dots: true,
            arrows: true,
            fade: true
        });
        $('.window-view-modal .slides-all').text($('.window-view .image').size());
        // var slideNum = $('.window-view-modal .slick-dots .slick-active').text();
        // $('.window-view-modal .slide-count').text(slideNum);
    }


// Этот код считает количество слайдов  в слайдере и выводит всплывающую подсказку с указанием на номер следующего слайда
    $('.trigger-arrow-next').hover(function(){
            $('.tooltip').show();
        },
        function(){
            $('.tooltip').hide();
        });
    $('.trigger-arrow-prev').hover(function(){
            $('.tooltip').show();
        },
        function(){
            $('.tooltip').hide();
        });

    if($('.dynamics-slider-inner').length) {
        $('.dynamics-slider-inner').slick({
            infinite: true,
            speed: 600,
            slidesToShow: 7,
            centerMode: true,
            arrows: true
        });
    }
    if($('.stay-select').length) {
        $('.stay-select').slick({
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            arrows: true
        });
        $('.trigger-arrow-prev').on('click',function(){
            $('.slick-prev').trigger('click');
        });
        $('.trigger-arrow-next').on('click',function(){
            $('.slick-prev').trigger('click');
        });
    }

    if($('.news-slider').length){
        $('.news-slider').slick({
            infinite: true,
            speed: 600,
            slidesToShow: 4,
            // autoplay: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
        });
    }

    $('.slick-control .prev').on('click',function(e){
        e.preventDefault();
        $('.slick-prev').trigger('click');
    });
    $('.slick-control .next').on('click',function(e){
        e.preventDefault();
        $('.slick-next').trigger('click');
    });
    $('.btn-menu-open').on('click',function(e){
        e.preventDefault();
        $('header').addClass('menu-open');
        if($('.param').length){
            $('.param').addClass('menu-open');
        };
        if($('.selection').length) {
                $('.selection').hide();
        };
    });
    $('.btn-menu-close').on('click',function(e){
        e.preventDefault();
        $('header').removeClass('menu-open');
        if($('.param').length){
            $('.param').removeClass('menu-open');
        }
        if($('.selection').length) {
            $('.selection').show();
        };
    });
    $('.home-number').on('click',function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
        $(this).find('.number').removeClass('small');
        $(this).siblings().find('.number').addClass('small');
    });
    $('.param-inner').on('click',function(){
        $('.kor-choice-home').toggleClass('param-open');
        $('header').toggleClass('param-open').removeClass('menu-open');
        $('footer').toggleClass('param-open');
        $('html,body').trigger('resize');
    });
    $('.kor-param  .btn-menu-close').on('click',function(e){
        e.preventDefault();
        $('.kor-choice-home').removeClass('param-open');
        $('header').removeClass('param-open');
        $('footer').removeClass('param-open');

    });

    $('.kor-param.plan .tr').on('hover', function(){
        $(this).addClass('active') ;
        $(this).siblings().removeClass('active');
        }
    );
    $('.dynamics .dynamics-slider .dynamics-slider-inner .slick-slide.slick-active.slick-center').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.btn-muve').on('click',function(){
        $('.online-muve').toggleClass('active');
        $('header').addClass('muve');

    });
    $('.online-muve .btn-menu-close').on('click',function(){
        $('.online-muve').removeClass('active');
        $('header').removeClass('muve');
    });
    $('.online-muve .lincks .cam').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.kor-param .tbody').mCustomScrollbar({
        axis:"y"
    });
    $('.kor-documents .documents .docs').mCustomScrollbar({
        axis:"y"
    });
    $('.ns-content .nc-text').mCustomScrollbar({
        axis:"y"
    });

    if($('.tbody .price.td').length) {
        $('.tbody .price.td').each(function(){
            var price=$(this).text();
            if(price)
            {
                price=price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,'$1 ');
                $(this).text(price);
            }
        });
    }

    if($('.kor-documents').length) {
        $('footer').addClass('doc');
    }
    if($('.parent-container').length){
        $('.parent-container').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            closeBtnInside: 'true',
            showCloseBtn:'true',
            gallery:{
                enabled:true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    }
    if($('.plan-img').length){
        $('.plan-img').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            closeBtnInside: 'true',
            showCloseBtn:'true',
            gallery:{
                enabled:true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    }
    $('.year a').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    if($('.tbody .image').length){
        var flatPlan = $('.tbody .tr.active .image').html();
        $(flatPlan).each(function(){
            $(this).find('img').insertAfter($('.param-form'));
        });
    }
    if($('.change-log').length){
        $('body').css({'overflow-y':'scroll'});
    }

    $('.ns-item').on('click',function(){
        $('.ns-popup').addClass('open');
    });
    $('.ns-content .btn-menu-close').on('click',function(){
        $(this).parent().parent('.ns-popup').removeClass('open');
    });

    if ($( ".param-calculator" ).length) {
        $( "#slider-price" ).slider({
            range: "max",
            min: 0,
            max: 15000000,
            step: 10000,
            value: 0,
            slide: function( event, ui ) {
                $( "#amount-max" ).val( ui.value );
            }
        });
        $( "#amount" ).val( $( "#slider-price" ).slider( "value" ) );
        $( "#slider-oun-cash" ).slider({
            range: "max",
            min: 0,
            max: 15000000,
            step: 1000,
            value: 0,
            slide: function( event, ui ) {
                $( "#amount-max-first" ).val( ui.value );
            }
        });
        $( "#amount" ).val( $( "#slider-oun-cash" ).slider( "value" ) );
        $( "#slider-years" ).slider({
            range: "max",
            min: 0,
            max: 30,
            step: 1,
            value: 0,
            slide: function( event, ui ) {
                $( "#amount-max-year" ).val( ui.value );
            }
        });
        $( "#amount" ).val( $( "#slider-years" ).slider( "value" ) );
    }
    $('.kor-choice-home .kor-param.plan .param-form a.tr').hover(
        function(){
           var imageSrc =  $(this).find('.image-hide img').attr('src');
            $('.kor-choice-home .kor-param.plan .param-form .plan-img').addClass('active').find('img').attr('src', imageSrc);
        },
        function(){
            $('.kor-choice-home .kor-param.plan .param-form .plan-img').removeClass('active');
        });

    if(window.matchMedia('(max-width: 1023px)').matches)
    {
        $('#rotate-device').addClass('show');
        }
    else
    {
        $('#rotate-device').removeClass('show');
        }

    if ($( ".range-slider" ).length) {
        $("#slider_1").rangeSlider({
            bounds:{min: 1, max: 7},
            defaultValues:{min: 1, max: 7}
        });
        $("#slider_2").rangeSlider({
            bounds:{min: 1, max: 17},
            defaultValues:{min: 1, max: 17}
        });
        $("#slider_3").rangeSlider({
            bounds:{min: 17, max: 123},
            defaultValues:{min: 17, max: 123}
        });
        $("#slider_4").rangeSlider({
            bounds:{min: 1000, max: 5452200},
            defaultValues:{min: 1000, max: 5452200,
            step: 1000}
        });
    }

    // Этот код воздействует на отображение стрелки в шапке таблицы параметрического выбора

    $('.kor-param:not(.calculator) .thead .tr .td').on('click', function () {
        if($(this).hasClass('default'))
        {
            $(this).siblings().removeClass('sort-down').removeClass('sort-up').addClass('default');
            $(this).addClass('sort-down').removeClass('sort-up').removeClass('default');

        }else
        {
            if($(this).hasClass('sort-down'))
            {
                $(this).siblings().removeClass('sort-down').removeClass('sort-up').addClass('default');
                $(this).addClass('sort-up').removeClass('sort-down').removeClass('default');

            }else
            {
                $(this).siblings().removeClass('sort-down').removeClass('sort-up').addClass('default');
                $(this).addClass('sort-down').removeClass('sort-up').removeClass('default');
            }

        }
    });
    $('.plan-lincs .bron').on('click',function(){
        $('.lw-modal-body.bron-modal').addClass('open');
    });
    $('.plan-lincs .window').on('click',function(){
        $('.lw-modal-body.window-view-modal').addClass('open');
    });

    $('.lw-modal-close').on('click',function(){
        $(this).parents().removeClass('open');
    });

});
$(window).resize(function(){
    if(window.matchMedia('(max-width: 1023px)').matches)
    {
        $('#rotate-device').addClass('show');
    }
    else
    {
        $('#rotate-device').removeClass('show');
    }
});