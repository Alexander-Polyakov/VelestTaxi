$(document).ready(function() {


    $(".js-toggle-dropmenu").click(function(){
        var item = $(this).closest('.main-nav-item');
        item.toggleClass('opened');
        item.find(".main-nav-item__dropmenu").stop().slideToggle(400);
    });

    $('.js-page-menu-open').click(function () {
        $('.js-page-menu').addClass("opened");
    });


    $('.js-page-menu-close').click(function () {
        $('.js-page-menu').removeClass("opened");
    });


    $("[data-fancybox]").fancybox({
        buttons: [
            'close'
        ]
    });


    $('.js-open-popup').click(function (e) {
        e.preventDefault();
        $('body').addClass('ovh');

        var targetPopup = $(this).data('target-popup');


        $('.js-popups-overlay').fadeIn(400);
        $('.js-popups').fadeIn(400);

        $('[data-popup-name='+targetPopup+']').fadeIn(400);
    });

    $(".js-close-popups").click(function () {
        $('body').removeClass('ovh');

        $('.js-popups-overlay').fadeOut(400);
        $('.js-popups').fadeOut(400);

        $('[data-popup-name]').fadeOut(400);
    });


    // form validation

    $("form").submit(function(e){
        var postData = $(this).serializeArray(),
            formURL = $(this).attr('action'),
            error = 0,
            form = $(this),
            inputs = form.find(".required");

        inputs.each(function(i, input){
            if (input.value == '') {
                $(input).addClass('error');
                error = 1;
            } else {
                $(input).removeClass('error');
            }
        });

        if (error == 0) {
            setTimeout(function(){
                $.ajax({
                    url : formURL,
                    type: "POST",
                    data: postData,
                    success: function(data){
                        form[0].reset();
                        $('[data-popup-name]').hide();
                        $('[data-popup-name="success"]').fadeIn(400);
                    }
                });
            }, 500);
        }
        e.preventDefault();
    });
});