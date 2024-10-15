let savebtn = document.querySelector('.savebtn');
let massage = document.querySelector('#massage');

savebtn.addEventListener('click', clock);

function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

     let time = hours + ': ' + minutes + ': ' + seconds;
     massage.innerHTML = time;

     setInterval(clock,1000);
 }



function formatTime(abir){
    if(abir < 10){
        abir = '0' + abir;
    }
    return abir;
}