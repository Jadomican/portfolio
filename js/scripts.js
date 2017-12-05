$(document).ready(function(){
    $("#emaillink").click(function(){
        alert("Jason can be reached at jadomican@gmail.com");
    });

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        // mobile code..
    }
    else
    {
        $('[data-toggle="tooltip"]').tooltip();         
    }

});
