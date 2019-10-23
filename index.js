function run() {
    //add responsive class - translate to JQuery

    respond();

    function respond() {
        let x = $("#myTopnav");
        if (x.hasClass("topnav")) {
            x.addClass("responsive");
        } else {
            x.addClass("topnav");
        }
    }
}

$(run);