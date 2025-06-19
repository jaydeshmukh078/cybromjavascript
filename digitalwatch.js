let digital=()=>{
    setInterval(()=>{
        let time = new Date()
        let Hours=time.getHours()
        let Minutes=time.getMinutes()
        let Seconds=time.getSeconds()

        let show = document.querySelector("#show")
        show.innerHTML=`${Hours} : ${Minutes} : ${Seconds}`
    },1000)
}