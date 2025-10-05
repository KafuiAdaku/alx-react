import $ from "jquery";

$(document).ready(function() {
    const paragraphs = [
        "ALX Dashboard",
        "Dashboard data for the students",
        "Copyright - ALX"
    ];

    paragraphs.forEach(paragraph => {
        $("body").append(`<p>${paragraph}</p>`);
    });
});
