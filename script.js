// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


// Current day displayed on top
$("#currentDay").text(moment().format("MMMM Do YYYY"));


// Array of times
let hourlySchedule = [ {
    "9am": localStorage.getItem("9"),
    "10am": localStorage.getItem("10"),
    "11am": localStorage.getItem("11"),
    "12pm": localStorage.getItem("12"),
    "1pm": localStorage.getItem("1"),
    "2pm": localStorage.getItem("2"),
    "3pm": localStorage.getItem("3"),
    "4pm": localStorage.getItem("4"),
    "5pm": localStorage.getItem("5"),
}];

// // Saving to local storage

$(".save").on("click", function () { 
    saveEvent = $(this).siblings("#text-entry").val();
    let elementId = $(this).siblings("#text-entry").attr("data-hour");
    localStorage.setItem(elementId, saveEvent)
})

$(".save").on("click", function () {
    location.reload();
})

$("textarea").each(function () {
    let elementId = $(this).attr("data-hour");

    let localValue = localStorage.getItem(elementId)
    if (localValue != null) {
        $(this).val(localValue)
}

// Color coded to past, present, and future

var currentTime = moment().format();

if (currentTime < 9) {
    $("#9am").addClass("future")
} else if (currentTime > 9 ) {
    $("#9am").addClass("past");
} else if (currentTime = 9) {
    $("#9am").addClass("present");
}

if (currentTime < 10) {
    $("#10am").addClass("future")
} else if (currentTime > 10) {
    $("#10am").addClass("past");
} else if (currentTime = 10) {
    $("#10am").addClass("present");
}
if (currentTime < 11) {
    $("#11am").addClass("future")
} else if (currentTime > 11) {
    $("#11am").addClass("past");
} else if (currentTime = 11) {
    $("#11am").addClass("present");
}

if (currentTime < 12) {
    $("#12pm").addClass("future")
} else if (currentTime > 12) {
    $("#12pm").addClass("past");
} else if (currentTime = 12) {
    $("#12pm").addClass("present");
}

if (currentTime < 1) {
    $("#1pm").addClass("future")
} else if (currentTime > 1) {
    $("#1pm").addClass("past");
} else if (currentTime = 1) {
    $("#1pm").addClass("present");
}

if (currentTime < 2) {
    $("#2pm").addClass("future")
} else if (currentTime > 2) {
    $("#2pm").addClass("past");
} else if (currentTime = 2) {
    $("#2pm").addClass("present");
}

if (currentTime < 3) {
    $("#3pm").addClass("future")
} else if (currentTime > 3) {
    $("#3pm").addClass("past");
} else if (currentTime = 3) {
    $("#3pm").addClass("present");
}

if (currentTime < 4) {
    $("#4pm").addClass("future")
} else if (currentTime > 4) {
    $("#4pm").addClass("past");
} else if (currentTime = 4) {
    $("#4pm").addClass("present");
}

if (currentTime < 5) {
    $("#5pm").addClass("future")
} else if (currentTime > 5) {
    $("#5pm").addClass("past");
} else if (currentTime = 5) {
    $("#5pm").addClass("present");
}

});