$(function(){
    'use strict';
    
    $('#first').css({color:'red'});
    //alert($('#first').text()); //zwraca wartość #first
    $('#first').text('Hello World'); //ustawia wartość #first
    
    //alert($('#second').html());
    
    //alert($('#second').html('<b>Cześć</b>'));
    $('#second').before('<p id="paragraf">Przykład</p>');
    $('#paragraf').css({color:'red'});
    
//    $('li').each(function(){
//        alert($(this).text());
//    });
    
    $('#przycisk').click(function(){
        alert($(this).text());
    });
})


