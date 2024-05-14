function calculateAge() {
    var date = parseInt(document.getElementById('date').value);
    var month = parseInt(document.getElementById('month').value);
    var year = parseInt(document.getElementById('year').value);

    var dateError = document.getElementById('dateError');
    var monthError = document.getElementById('monthError');
    var yearError = document.getElementById('yearError');

    // Validate day
    if (date <= 0 || date > 31 || isNaN(date)) {
        dateError.textContent = "Invalid date";
        return;
    } else {
        dateError.textContent = "";
    }

    // Validate month
    if (month <= 0 || month > 12 || isNaN(month)) {
        monthError.textContent = "Invalid month";
        return;
    } else {
        monthError.textContent = "";
    }

    // Validate year
    if (isNaN(year)) {
        yearError.textContent = "Invalid year";
        return;
    } else {
        yearError.textContent = "";
    }

    // Your age calculation logic here
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();

    var years = currentYear - year;
    var months = currentMonth - month;
    var days = currentDay - date;

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months = (12 + currentMonth) - month;
        if (days < 0) {
            months--;
            days = 30 + days; // Assume all months have 30 days for simplicity
        }
    }

    if (days < 0) {
        months--;
        var tempDate = new Date(year + years, month + months, 0);
        days = tempDate.getDate() + days;
    }

    document.getElementById('age').textContent = "Your age is: " + years + " years, " + months + " months, and " + days + " days";
}
