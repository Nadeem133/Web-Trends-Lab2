var getDate_getDay = /** @class */ (function () {
    function getDate_getDay() {
    }
    getDate_getDay.prototype.getDate = function () {
        var date = new Date();
        var span = document.createElement("span");
        span.innerText = "getDate Method \n Today Date is-> " + date.getDate() + "\n";
        document.body.appendChild(span);
    };
    getDate_getDay.prototype.getDay = function () {
        var Wday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var day = new Date();
        var TodayDay = Wday[day.getDay()];
        var span = document.createElement("span");
        span.style.color = "Blue";
        span.innerText = "getDay Method \n Today Day is-> " + TodayDay + "\n";
        document.body.appendChild(span);
    };
    return getDate_getDay;
}());
window.onload = function () {
    var obj = new getDate_getDay();
    obj.getDate();
    obj.getDay();
};
