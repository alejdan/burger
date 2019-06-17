$(document).ready(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");

        // Send the PUT request.
        $.ajax("/devour", {
            type: "PUT",
            data: {id}
        }).then(
            function () {
                console.log("burger devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".submit").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerInput").val().trim(),
        };

        // Send the POST request.
        $.ajax("/insertBurger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
