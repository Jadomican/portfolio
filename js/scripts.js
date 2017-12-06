$(document).ready(function(){

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        // mobile code..
    }
    else
    {
        // Don't use tooltips on mobile (would require double tap)
        $('[data-toggle="tooltip"]').tooltip();         
    }

    $('.contact-submit').click(function(){
        $('.alert').show()
        console.log("clicked");
    }) 

});
