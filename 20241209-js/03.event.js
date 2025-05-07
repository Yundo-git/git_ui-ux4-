

document.addEventListener('DOMContentLoaded',function(){
    console.log('문서의 돔트리가 완성되면 실행되는 이벤트 > js')
})

$(document).ready(function(){
    console.log('ready - 문서 돔트리가 완성되면 실행되는 이벤트 > jquery')
})

$(function(){
    console.log('hi~')
})



// $('.p-msg').click(function(){
//     $('.p-msg').css('color','red');
// });

// $('.num').click(function(){
//     $(this).css('color','blue');
// })


// $('.num').on('click',function(){
//     $(this).css('color','blue');

// })
const nums = document.querySelectorAll('.num');

for(let a of nums){
    a.addEventListener('click', function(){
        a.style.color = 'blue';
    })
}


$('.numbers').on('mouseover',function (){
    $(this).css('background-color','blue');
    $(this).append('<div>handler ofr .on()</div>');
})

$('.hover').hover(function(){
    $(this).toggleClass('hover');
})

// $(window).scroll(function(){
//     console.log('스크롤!!!!')
// })

$(window).on('scroll',function (){
    console.log('스크롤!!!!')
})

$('#todo-form').on('submit', function(e){

    const todo = $("[name='todo']").val();
    console.log(e);
    console.log(todo);

    $('.todos').append(`<li>${todo}</li>`);

    $("[name='todo']").val('');
    e.preventDefault();
})