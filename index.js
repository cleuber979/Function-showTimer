
function showTime(){
    let data = new Date()
    return data.toLocaleTimeString("en",{
        hour12:true
    })

}

showTime()

const timer = setInterval (function (){
    console.log(showTime());
},1000);

setTimeout (function(){
    clearInterval(timer);
},6000)