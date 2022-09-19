
// $("button").click(function () {
//     $("#car1").toggleClass("hide");
// }); 

// $("button").click(function () {
//     $("#car2").toggleClass("hide");
// }); 

// $("button").click(function () {
//     $("#car3").toggleClass("hide");
// }); 

// $("button").click(function () {
//     $("#car4").toggleClass("hide");
// }); 

$(document).ready(function(){
    $(".car1-btn").click(function(){
        $(".car1-container").toggle(); 
    });

    $(".car2-btn").click(function(){
        $(".car2-container").toggle(); 
    });

    $(".car3-btn").click(function(){
        $(".car3-container").toggle(); 
    });

    $(".car4-btn").click(function(){
        $(".car4-container").toggle(); 
    });
});

