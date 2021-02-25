// Event Listeners

$('.nav-item').on('click', function () {
    const section = $(`.${$(this).attr('id')}`)
    let scroll;
    if (!section.offset()) scroll = 250;
    else scroll = section.offset().top;
    $('html, body').animate({ scrollTop: scroll - 250 }, 500)
    $('.nav-item').removeClass('active')
    $(this).addClass('active')
})

$(window).on('scroll', function () {
    console.log(window.pageYOffset)
    $('.nav-item').removeClass('active')
    if (window.pageYOffset >= $('.contact').offset().top - 800) $('#contact').addClass('active')
    else if (window.pageYOffset >= $('.projects').offset().top - 350) $('#projects').addClass('active')
    else if (window.pageYOffset >= $('.skills').offset().top - 350) $('#skills').addClass('active')
    else if (window.pageYOffset >= $('.about').offset().top - 350) $('#about').addClass('active')
    else $('#home').addClass('active')
    
})