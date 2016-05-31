$(document).ready(function(){
    $('.start-animation').click(function(){
        console.log('hello');
        $(this).toggleClass('active');
        $('#hexagon').toggleClass('flip');
    })
})
