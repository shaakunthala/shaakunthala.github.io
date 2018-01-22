function showMenu (show) {
    if (show == true) {
        $('#expandablemenu').css ('visibility', 'visible');
        $('#menuicon').css ('border-bottom', '2px solid #555');
    } else {
        $('#expandablemenu').css ('visibility', 'hidden');
        $('#menuicon').css ('border-bottom', '2px solid #fff');
    }
}

function initializeViewport () {
    // Viewport parameters
}

$('#menuicon').click (function () {
    var v = $('#expandablemenu').css('visibility');
    if (v == 'hidden') {
        showMenu(true);
    } else {
        showMenu(false);
    }
});

$('.textlink').click (function () {
    // Do it's job
    showMenu(false);
});

