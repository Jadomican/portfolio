$(document).ready(function () {

    $('body').scrollspy({ target: ".navbar", offset: 50 });

    // Add smooth scrolling on all links inside the navbar
    $("#myNav a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 380, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // mobile code..
    }
    else {
        // Don't use tooltips on mobile (would require double tap)
        $('[data-toggle="tooltip"]').tooltip();
    }

    $('.contact-submit').click(function () {
        $('.alert').show()
        console.log("clicked");
    })

    $("#collapse3").on("hide.bs.collapse", function () {
        $(".showitt").html('<span class="glyphicon glyphicon-chevron-down fa-lg"></span> Show More');
    });
    $("#collapse3").on("show.bs.collapse", function () {
        $(".showitt").html('<span class="glyphicon glyphicon-chevron-up fa-lg"></span> Show Less');
    });

    $("#collapse4").on("hide.bs.collapse", function () {
        $(".showschool").html('<span class="glyphicon glyphicon-chevron-down fa-lg"></span> Show More');
    });
    $("#collapse4").on("show.bs.collapse", function () {
        $(".showschool").html('<span class="glyphicon glyphicon-chevron-up fa-lg"></span> Show Less');
    });

    $("#collapse1").on("hide.bs.collapse", function () {
        $(".showaws").html('<span class="glyphicon glyphicon-chevron-down fa-lg"></span> Show More');
    });
    $("#collapse1").on("show.bs.collapse", function () {
        $(".showaws").html('<span class="glyphicon glyphicon-chevron-up fa-lg"></span> Show Less');
    });

    $("#collapse2").on("hide.bs.collapse", function () {
        $(".showexe").html('<span class="glyphicon glyphicon-chevron-down fa-lg"></span> Show More');
    });
    $("#collapse2").on("show.bs.collapse", function () {
        $(".showexe").html('<span class="glyphicon glyphicon-chevron-up fa-lg"></span> Show Less');
    });

    $('.grow').hover(function () {
        $(this).addClass('transition');

    }, function () {
        $(this).removeClass('transition');
    });

});
