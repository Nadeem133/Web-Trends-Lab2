var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["Septenber"] = 8] = "Septenber";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
//html elements
//Part 1
var pTodayDate = document.getElementById("p--today-date");
var buttonBirthday = document.getElementById("button--birthday");
var pBirthdayMessage = document.getElementById("p--birthday-message");
var inputDatePicker = document.getElementById("input--date-picker");
//today as a date
var today = new Date();
console.log(today.getMonth());
pTodayDate.innerHTML = "Today is " + days[today.getDay()] + " " + months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
//Part2
buttonBirthday.onclick = function () {
    //get birthdate from input tag
    var userBDay = inputDatePicker.value;
    var bDateObject = stringToDate(userBDay);
    pBirthdayMessage.innerHTML = makeDateString(bDateObject);
};
function stringToDate(str_date) {
    var arr = str_date.split('-');
    return new Date(arr[0], arr[1] - 1, arr[2]);
}
function makeDateString(inputDate) {
    //if today is user's brithday
    if ((inputDate.getDate() === today.getDate())
        &&
            (inputDate.getMonth() === today.getMonth())) {
        return "Happy birthday!";
    }
    //today is not their birthday
    var thisYearBirthday = new Date();
    thisYearBirthday.setDate(inputDate.getDate());
    thisYearBirthday.setFullYear(today.getFullYear());
    thisYearBirthday.setMonth(inputDate.getMonth());
    return "Your birthday is " + days[thisYearBirthday.getDay()] + " " + months[thisYearBirthday.getMonth()] + " " + thisYearBirthday.getDate() + ", " + thisYearBirthday.getFullYear();
}
