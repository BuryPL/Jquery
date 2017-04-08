$(function(){
    'use strict';
    
    $('#first').css({color:'red'});
    //alert($('#first').text());
    $('#first').text('Hello World');
    
    //alert($('#second').html());
    
    //alert($('#second').html('<b>Cześć</b>'));
    $('#second').before('<p>Przykład</p>');
})


