import $ from "jquery";
import _ from "lodash";
import "../css/main.css";

$(document).ready(function() {
    // Add logo at the top
    $("body").prepend("<div id='logo'></div>");

    $("body").append("<p>ALX Dashboard</p>");
    $("body").append("<p>Dashboard data for the students</p>");
    $("body").append("<button>Click here to get started</button>");
    $("body").append("<p id='count'></p>");
    $("body").append("<p>Copyright - ALX</p>");

    let count = 0;

    // Fuction to update click count
    function UpdateCounter() {
        count++;

        $("#count").text(`${count} clicks on the button`);
    }

    // Lodash debounce to limit number of times clicks are counted
    const debounceUpdate = _.debounce(UpdateCounter, 300);

    // Bind event
    $("button").on("click", debounceUpdate);
});
