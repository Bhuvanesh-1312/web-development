function reverseClock(){
    let clock=document.getElementById("clock")
    const myDate = new Date()
    let hrs=47-myDate.getHours()
    let min=59-myDate.getMinutes()
    let sec=59-myDate.getSeconds()

    clock.innerHTML=hrs+":"+min+":"+sec
}

setInterval(reverseClock)