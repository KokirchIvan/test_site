$(function() {

    //sliders
    $('.clients__slider').owlCarousel({
        loop:true,
        margin:22,
        navText:"",
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            500:{
                items:2,
                nav:false
            },
            900:{
                items:4,
                nav:true
            }
        }
    });      
    
    $('.party__slider-private').owlCarousel({
        loop:true,
        navText:"",
        items:1,
        responsiveClass:true,
        responsive:{
            0:{
                nav:false
            },
            900:{
                nav:true
            }
        }
    });
    
    $('.party__slider-corp').owlCarousel({
        loop:true,
        navText:"",
        items:1,
        responsiveClass:true,
        responsive:{
            0:{
                nav:false
            },
            900:{
                nav:true
            }
        }
    }); 

    $('.main-slider__wrapper').owlCarousel({
        center: true,
        items:5,
        loop:true,
        margin:10,
        autoWidth:true,
        nav:false,
        dots:false
    });

    //menu
    $('.header__burger').on('click', function(){
        $(this).siblings('.menu').fadeIn();
    });

    $('.menu__close').on('click', function(){
        $(this).parent('.menu').fadeOut();
    });

    $(document).mouseup(function (e){
		var div = $(".menu");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			div.fadeOut();
		}
    });


    //modal
    $('.modal__close').on('click', function(){
        $(this).closest('.modal').fadeOut();
        $(this).closest('.modal__bg').css('display', 'none');
    });    

    $(document).mouseup(function (e){
		var div = $(".modal");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			div.fadeOut();
            $('.modal__bg').css('display', 'none');
		}
    });

    $('.modal__trigger').on('click', function(){
        const modalName = $(this).data('modal');
        if( $(window).width() > 900 ){
            $('.modal__bg').css('display', 'flex');
        } else {
            $('.modal__bg').css('display', 'block');
        }
        $('.modal-' + modalName).fadeIn();
    });



});