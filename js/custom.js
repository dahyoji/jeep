$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        autoplay: {
            delay: 2,
            disableOnInteraction: false,
        },

        speed: 5000,
        pagination: {
            el: '.main_visual .page',
            clickable: true,
        },
    });

    $('.main_visual .prev').on('click', function () {
        main_visual_slide.slidePrev();
    });

    $('.main_visual .next').on('click', function () {
        main_visual_slide.slideNext();
    });


});

$(function () {
    $('.main_tab .tab_menu button').on('click', function () {
        let idx = $(this).index(); // 클릭한 것의 번호를 가져와서 저장함
        console.log(idx);

        $('.main_tab .tab_menu button').removeClass('on');
        $(this).addClass('on');

        $('.main_tab .tab_content .con').removeClass('on');
        $('.main_tab .tab_content .con').eq(idx).addClass('on');
    });
});

$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 })
    });

    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

})