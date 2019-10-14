function handleClicks() {
    $('.bio').hide();
    $('button').on('click', function(event) {
        $('.bio').toggleClass('bio');
    });
}

$(handleClicks);