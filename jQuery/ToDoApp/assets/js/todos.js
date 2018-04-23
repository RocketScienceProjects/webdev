// alert("connected")


//check off specific 
// $("li").click(function(){
//     // $(this).css("color", "gray");
//     // $(this).css("text-decoration", "line-through")
//     if ($(this).css("color") === "rgb(128, 128, 128)"){
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         })
//     } else {
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         });
//     }
// })

//A simple way to achive with CSS class

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

//Click X to delete
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation(); //this stops the event bubble
})

//create entry to To-Do
$("input[type=text]").keypress(function(event){
    if(event.which === 13) {  //checks for hitting the enter key
        var toDoText = $(this).val(); //grab new toDo
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText+ "</li>") //apend the new entry to the list of ToDos


    }
    
})

$(".fa-plus").click(function(){
    // alert("clicked plush")
    $("input[type=text]").fadeToggle();
})
