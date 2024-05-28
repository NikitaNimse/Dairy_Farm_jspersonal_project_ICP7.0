function updateclock(){
    const date=new Date();
    const timestring= date.toLocaleTimeString();    
    document.getElementById('clock').innerText= timestring;
 }
 setInterval( updateclock,1000);
 updateclock();




