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

$("li").click(function(){
    $(this).toggleClass("completed");
})

//Click X to delete
$("span").click(function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation(); //this stops the event bubble
})

//create entry to To-Do
$("input[type=text]").keypress(function(){
    console.log("key pressed")
})
