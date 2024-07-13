function sayhii() // its also knwon as callback function
{
   const mydate = new Date();
   const minutes = mydate.getMinutes();
   const  Seconds = mydate.getSeconds();
   console.log(`minutes:${minutes} Seconds:${minutes} `);// 

}
setTimeout(sayhii,4000) // higerorder funcion
setInterval(sayhii,2000)// after blink