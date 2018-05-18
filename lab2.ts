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

    //html elements
    //Part 1
    let pTodayDate = document.getElementById("p--today-date");
    let buttonBirthday = document.getElementById("button--birthday");
    let pBirthdayMessage = document.getElementById("p--birthday-message");
    let inputDatePicker = document.getElementById("input--date-picker");


    //today as a date
    let today : Date = new Date();
    
    console.log(today.getMonth());

    pTodayDate.innerHTML = `Today is ${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

    
    //Part2
    buttonBirthday.onclick = function(){
        //get birthdate from input tag
        let userBDay : string = inputDatePicker.value;
        let bDateObject : Date = stringToDate(userBDay);
        pBirthdayMessage.innerHTML=makeDateString(bDateObject);
        
    }
    function stringToDate(str_date:string){
        let arr=str_date.split('-')
        return new Date(arr[0],arr[1]-1,arr[2])
    }
    function makeDateString( inputDate : Date) : string{

        //if today is user's brithday
    if((inputDate.getDate() === today.getDate()) 
    && 
    (inputDate.getMonth() === today.getMonth())){
        return `Happy birthday!`;
    }
    

    //today is not their birthday
    let thisYearBirthday = new Date();
    thisYearBirthday.setDate( inputDate.getDate() );
    thisYearBirthday.setFullYear(today.getFullYear() );
    thisYearBirthday.setMonth( inputDate.getMonth() );

    return `Your birthday is ${days[thisYearBirthday.getDay()] } ${months[thisYearBirthday.getMonth()]} ${thisYearBirthday.getDate() }, ${thisYearBirthday.getFullYear()}`

    }
    


