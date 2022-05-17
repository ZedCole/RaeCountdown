var textBox = document.getElementById("text");
var timer = document.getElementById("countdown");
var early = false;
var dueDate = Date.parse("Tue, 04 Oct 2022 00:00:00 GMT+1000");
var count = new Date();
var cDays, cHours, cMinutes, cSeconds;
const _DATE_FORMATTING = 1000 * 60 * 60 * 24;

// Get the current date/time
function get_date() {
    var date = new Date();
    count = date;
}

// Calculate the time remaining
function time_difference(endDate, startDate) {
    // Split time into units
    diff = endDate - startDate;
    cDays = Math.floor(diff / _DATE_FORMATTING);
    cHours = Math.floor((diff % _DATE_FORMATTING) / (1000 * 60 * 60));
    cMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    cSeconds = Math.floor((diff % (1000 * 60)) / 1000);

    leading_zeros();
}

// Add leading zeros
function leading_zeros() {
    // Days
    if (cDays < 10) {
        cDays.toString();
        cDays = "0" + cDays;
    }

    // Hours
    if (cHours < 10) {
        cHours.toString();
        cHours = "0" + cHours;
    }

    // Minutes
    if (cMinutes < 10) {
        cMinutes.toString();
        cMinutes = "0" + cMinutes;
    }

    // Seconds
    if (cSeconds < 10) {
        cSeconds.toString();
        cSeconds = "0" + cSeconds;
    }
}

// countdown loop
function main() {
    get_date();

    if (early == true) {
        textBox.innerHTML = "Little Baby Raegan hase arrived!";
        document.title = "Raegans Here!";
    }
    else if (count < dueDate) {
        time_difference(dueDate, count);
        textBox.innerHTML = "Little Baby Raegan is due on the 4th October 2022, in"
        timer.innerHTML = cDays + " days, " + cHours + " hours, " + cMinutes + " minutes, and " + cSeconds + " seconds";
        document.title = "Raegan - " + cDays + " days left";
    } else {
        textBox.innerHTML = "Little Baby Raegan hase arrived!";
        document.title = "Raegans Here!";
    }
}

setInterval(main, 100)