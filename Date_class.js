const mydate = new Date();
{
    console.log(mydate )//printing output its print time  in IST  , GMT greenmeaantime(universally accpted time)Ut
    console.log(mydate.toLocaleDateString() ) //it's give local gate 
    console.log(mydate.toLocalString ())// its gives total time
    console.log(mydate.getMonth()+1 );//its give months
    const days = ["sunday" , "monday" , "tusday","wensday","thrusday","fryday","saturday"];
    console.log(mydate.getDay()) //its give day 
    console.log(mydate.getHours())//it return houres in local time


}