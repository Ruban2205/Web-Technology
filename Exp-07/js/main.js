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
        var random1 = Math.floor(Math.random() * (8000 - 500)) + 500;
        $('.car1-container').animate({ left: "85%" }, random1);
        console.log(random1);

        var random2 = Math.floor(Math.random() * (8000 - 500)) + 500;
        $('.car2-container').animate({ left: "85%" }, random2);

        var random3 = Math.floor(Math.random() * (8000 - 500)) + 500;
        $('.car3-container').animate({ left: "85%" }, random3);

        var random4 = Math.floor(Math.random() * (8000 - 500)) + 500;
        $('.car4-container').animate({ left: "85%" }, random4);
    });
});

$("#stop-btn").click(function () {
    location.reload();  
});