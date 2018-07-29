$('document').ready(function () {
    $(window).on('scroll', function(e) {
        $('.title-box').each(function (a,b) {
            if ($(window).scrollTop() > $(b).offset().top - $(window).height()) {
                $(b).addClass('while-move');
            }
        })
    });
    var res1 = $('.main-head').height();
    $(document).scroll(function () {
        // if()
        if($(document).scrollTop()>res1){
            $('.main-head').addClass('scroll-on');

        }else {
            $('.main-head').removeClass('scroll-on');
        }



    })
    /* ===== Logic for creating fake Select Boxes ===== */
    $('.sel').each(function() {
        $(this).children('select').css('display', 'none');

        var $current = $(this);

        $(this).find('option').each(function(i) {
            if (i == 0) {
                $current.prepend($('<div>', {
                    class: $current.attr('class').replace(/sel/g, 'sel__box')
                }));

                var placeholder = $(this).text();
                $current.prepend($('<span>', {
                    class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
                    text: placeholder,
                    'data-placeholder': placeholder
                }));

                return;
            }

            $current.children('div').append($('<span>', {
                class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
                text: $(this).text()
            }));
        });
    });

// Toggling the `.active` state on the `.sel`.
    $('.select-box').on('click',".sel",function() {
        $(this).toggleClass('active');
    });

// Toggling the `.selected` state on the options.
    $('.select-box').on('click',".sel__box__options",function() {
        var txt = $(this).text();
        var index = $(this).index();

        $(this).siblings('.sel__box__options').removeClass('selected');
        $(this).addClass('selected');

        var $currentSel = $(this).closest('.sel');
        $currentSel.children('.sel__placeholder').text(txt);
        $currentSel.children('select').prop('selectedIndex', index + 1);
    });


    $('.select-box ').on('click', 'label', function () {
        $(this).parent().find('label').removeClass('checked');
        if($(this).children("input").is(':checked')){
            $(this).addClass('checked');
        }else{
            $(this).removeClass('checked');
        }

    });

    $('#datepicker').datepicker('show');
    $('.datepicker-switch').click(function () {
        return false;
    })
$(".left label:nth-child(2)").click(function () {
    $(".right").addClass("hid");
    $(".right input").val("");
    $(".datepicker td").removeClass("active");

})
    $(".left label:nth-child(1)").click(function () {
        $(".right").removeClass("hid");
    })
    $(".left label:nth-child(3)").click(function () {
        $(".right").addClass("hid");
        $(".right input").val("");
        $(".datepicker td").removeClass("active");
    })
  $("label").each(function (a,b) {
      if($(b).children("input").is(':checked')){
          $(b).addClass('checked');
      }
  })
    $('.left ').on('click', 'label', function () {
        $(this).parent().find('label').removeClass('checked');
        if($(this).children("input").is(':checked')){
            $(this).addClass('checked');
        }else{
            $(this).removeClass('checked');
        }

    });

    $('.slider').slick({
        centerMode: true,
        slidesToShow: 3,
        infinite: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                }
            }


        ]



    });
    var clone = $(".slick-current .text-box").clone();

    $('.slick-arrow').click(function () {
        $(".clone").html(clone);
    })



    $('.button-crest').click(function () {
        $('.thank-you').hide();

    });

    $('[data-form]').click(function () {
        $('.thank-you-form').show();
    });
    var cloneForm = $(".select-box .form-section:first-child").clone() ;

    var i = 1;
    var buttonDel = ' <a class="delete"> <div></div> <div></div> </a>';
    $('.add-form').click(function () {
        var cl = $(cloneForm).clone();
        console.log('---',cl);
        cl.addClass('show-selects');
        cl.append(buttonDel);
        $(".select-box").append(cl);
        i+=1;
        $('.delete').click(function () {
            $(this).parent().remove();
        })


    });


    ///////////////// mail////////////////////

    var patternPhone=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/;
    // $('form input').on('mouseover',function () {
    //     $(this).css('border','1px solid #c6c6c6');
    // });

    // $('form').submit(function (event) {
    //     event.preventDefault();
    //     //event.preventDefault();
    //     var mname = $('form input[name="name"]').val();
    //     var mphone = $('form input[name="phone"]').val();
    //
    //     //console.log(mname);
    //     if(!patternPhone.test(mphone)){
    //         $('form input[name="phone"]').css('border','1px solid red');
    //     }
    //
    //     if(mname ==""){
    //         $('form input[name="name"]').css('border','1px solid red');
    //     }
    //     if(mphone ==""){
    //         $('form input[name="phone"]').css('border','1px solid red');
    //     }
    //     if(mname && mphone &&  patternPhone.test(mphone)){
    //
    //         $('.thank-you-form').hide();
    //         $('.thank-you-finish').show();
    //
    //         var msg   = $(this).serialize();
    //         console.log(msg);
    //         $.ajax({
    //             type: 'POST',
    //             url: 'contact.php',
    //             data: msg,
    //             success: function(data) {
    //                 $('#results').html(data);
    //             },
    //             error:  function(xhr, str){
    //                 alert('Возникла ошибка: ' + xhr.responseCode);
    //             }
    //         });
    //     }
    //
    // });
    $(".slider-box").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('data-href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
    $('.phone').click(function () {
        $(this).toggleClass('hover-effect');
        $(".tel-win").slideToggle();

    });
    $('.crest').click(function () {
        $('.popup-images').removeClass('pop-n');

    });
    $('[data-photo="khata"]').click(function () {
        $(".sahara").addClass('pop-n');
    });
    $('[data-photo="sahara"]').click(function () {
        $(".khata").addClass('pop-n');
    });


});