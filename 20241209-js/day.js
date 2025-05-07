

let va;
$('p').on('click',function(){
    va = $(this)
    const date = $(this).text();
    console.log(date);
    console.log(va);
    
    $('#date').val(date);
    })


function writeSchedule(e){
    const content = $('#content').val();
    console.log(content);

    $(va).after(`<p>${content}</p>`);
   
}