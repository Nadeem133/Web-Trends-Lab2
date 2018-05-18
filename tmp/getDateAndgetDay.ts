class getDate_getDay

{

    getDate()

    {

        var date = new Date();

        var span = document.createElement("span");

        span.innerText = "getDate Method \n Today Date is-> " + date.getDate() + "\n";

        document.body.appendChild(span);

    }

    getDay()

    {

        var Wday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        var day = new Date();

        var TodayDay = Wday[day.getDay()];   

        var span = document.createElement("span");

        span.style.color = "Blue";

        span.innerText = "getDay Method \n Today Day is-> " + TodayDay + "\n";

        document.body.appendChild(span);

    }

}

window.onload = () =>

{

    var obj = new getDate_getDay();
    obj.getDate();
    obj.getDay();

};