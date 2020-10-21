// Event Listeners

$('.nav-item').on('click', function() {
    const section = $(`.${$(this).attr('id')}`)
    let scroll;
    if(!section.offset()) scroll = 250;
    else scroll = section.offset().top;
    $('html, body').animate({scrollTop: scroll-250},500)
    $('.nav-item').removeClass('active')
    $(this).addClass('active')   
}) 

$(window).on('scroll', function() {
    const body = $('html')
    console.log(body.offset())
})