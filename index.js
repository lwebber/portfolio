function handleClicks() {
    $('.btn').on('click', function(event) {
        $('.bio').toggleClass('none');
    });
}

$(handleClicks);