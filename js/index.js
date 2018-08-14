//========== completed item===============
// $("li").click(function(){
//     // $(this).css("text-decoration","line-through");
//                 // or
//     // $(this).css({
//     //   color: "gray",
//     //   textDecoration: "line-through"
//     // });
//                 // or
//     $(this).toggleClass('completed');
// });

        //      .click() works only on existing element, not on future
        //      .on("click".....) works on both
$('ul').on('click','li',function(){
   $(this).toggleClass('completed'); 
});


//========== to delete a note===============
$("ul").on('click','span',function(event){
    $(this).parent().fadeOut(300,function(){
        $(this).remove(); 
    });
    event.stopPropagation();
});


//============ user input ====================
// which represents the letter which was pressed
// 13 is code for enter key
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var input = $(this).val();
        $('ul').append("<li><span><i class='fas fa-trash'></i></span> " +input+ "</li>");
    }
});

$(".fa-pencil-alt").on('click',function(event){
    $("input[type='text']").fadeToggle();
    event.stopPropagation();
});