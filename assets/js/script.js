// Display today date
let currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(currentDate);

$(document).ready(function () {
// data save button
$(".saveBtn").on("click", function () {
let event = $(this).siblings(".description").val();
let time = $(this).parent().attr("id");
// data save in local storage
localStorage.setItem(time, event);
// notification data is saved
$(".notification").addClass("show");
setTimeout(function() {
$(".notification").removeClass("show");
}, 3000)
})

function timeBlockColor() {
//highlighting current time
let currentTime = moment().hour();
$(".time-block").each(function () {
let blockTime = parseInt($(this).attr("id").split("hour")[1]);

// backgroud color changes to indicate time status
if (currentTime > blockTime) {
$(this).removeClass("future");
$(this).removeClass("present");
$(this).addClass("past");
}
else if (currentTime === blockTime) {
$(this).removeClass("past");
$(this).removeClass("future");
$(this).addClass("present");
}
else {
$(this).removeClass("present");
$(this).removeClass("past");
$(this).addClass("future");

}
})
}

// retrive and display data from local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

timeBlockColor();

})
