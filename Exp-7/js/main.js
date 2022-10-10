$(document).ready(function () {
    $(".car1-btn").click(function () {
        $(".car1-container").toggle();
    });

    $(".car2-btn").click(function () {
        $(".car2-container").toggle();
    });

    $(".car3-btn").click(function () {
        $(".car3-container").toggle();
    });

    $(".car4-btn").click(function () {
        $(".car4-container").toggle();
    });
});


$(document).ready(function () {
    $("#start-btn").click(function () {
        var random = Math.floor(Math.random() * (8000 - 500)) + 500;

        $('.car1-container').animate({ left: "85%" }, random);
        
        console.log(random);

        // $('.car2-container').animate({ left: "85%" }, random);

        // $('.car3-container').animate({ right: "85%" }, random);

        // $('.car4-container').animate({ right: "85%" }, random);
    });
});

$("#stop-btn").click(function () {
    location.reload();  
});