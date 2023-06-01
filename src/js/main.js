const CoinsButton = document.getElementById("coin-button");
const CoinsText = document.getElementById("coins-text");
const TodayDateText = document.getElementById("TodayDate");

let coins = 0;
const currentDate = new Date();

if(coins == 0){
    CoinsText.textContent = 0;
}

CoinsButton.addEventListener("click", () =>{
    coins++;
    CoinsText.textContent = coins;
})


function HoursMinutes(){
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();

    let time = hours + ':' + minutes;

    TodayDateText.textContent = time;
}

setInterval(HoursMinutes, 1000);
HoursMinutes();