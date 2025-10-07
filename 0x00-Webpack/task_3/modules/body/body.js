import $ from "jquery";
import _ from "lodash";
import "./body.css";

$(document).ready(function() {
    $("body").append("<button>Click here to get started</button>");
    $("body").append("<p id='count'></p>")

    let count = 0;

    // Function to update click count
    function updateCounter() {
        count++;
        $("#count").text(`${count} click on the button`);
    }

    // Lodash debounce to limit number of times clicks are counted
    const debounceUpdate = _.debounce(updateCounter, 300);

    // Bind event
    $("button").on("click", debounceUpdate);
});
