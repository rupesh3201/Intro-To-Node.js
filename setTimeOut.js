function sayhii() // its also knwon as callback function
{
    console.log("say hello")
}
setTimeout(sayhii,4000) // higerorder funcion
setInterval(sayhii,2000)// after blink