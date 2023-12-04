$(document).ready(function () {
});

function loadQuotes() {
    $.ajax({
        type: "GET",
        url: "https://smileschool-api.hbtn.info/quotes",
        beforeloading: (() => showLoading(1, '.quotes')),


    });
}

function showLoading(loading, tag) {
    if (loading) {
        $(tag).wrap("<div class='loader'></div>");
    } else {
        $(tag).unwrap();
    }
}