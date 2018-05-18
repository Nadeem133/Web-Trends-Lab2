enum days{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

enum months{
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    Septenber,
    October,
    November,
    December

}

console.log(days[0];

    //html elements
    let pTodayDate = document.getElementById("p--today-date");

    //today as a date
    let today : Date = new Date();
    
    console.log(today.getMonth());

    pTodayDate.innerHTML = `Today is ${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

    



