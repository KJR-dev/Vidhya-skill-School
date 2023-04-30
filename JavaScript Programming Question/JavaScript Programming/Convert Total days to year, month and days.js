//program to convert Total days to year, month and days
//take total days
// convert year
//convert month
function convertDays(inputDays){
    let years;
    let months;
    let days;

    years=Math.floor(inputDays/365);
    days=inputDays%365;
    months=Math.floor(days/30);
    days=days%30;
    console.log("years= "+years);
    console.log("months= "+months);
    console.log("days= "+days);

}
convertDays(3685);
