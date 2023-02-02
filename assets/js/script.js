// Display today's day and date
let todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todaysDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Saves text in local stoarage
        localStorage.setItem(time, text);
    })

    function trackTime() {
        // Gets current time
        var timeNow = moment().hour();

        // loops over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            // Checks time and adds "past, present, and future" classes for the backgrounds
            // If the current time is past one of the timeblocks, add the "past" class and remove the "future" and "present" class
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            // If the timeblock is equal to the current hour, add the "present" class and remove "past" and "future":
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            // Else, if the timeblock is greater than the current time, add the "future" class and remove "past" and "present"
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Gets items from local storage
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    // Invokes trackTime function
    trackTime();
})












