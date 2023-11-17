let hr = document.getElementById('hours');
let min = document.getElementById('minutes');
let sec = document.getElementById('seconds');
let myInterval;

let hrValue = parseInt(hr.innerText);
let minValue = parseInt(min.innerText);
let secValue = parseInt(sec.innerText);

let resetWatch = function(){
    hr.innerText = '00';
    min.innerText = '00';
    sec.innerText = '00';
    hrValue = 0;
    minValue = 0;
    secValue = 0;

    stopWatch();
}

let startWatch = function(){
    myInterval = setInterval(increaseTime, 1000);
}

let increaseTime = function(){
    secValue++;

    if(secValue === 60){
        minValue++;

        if(minValue === 60){
            hrValue++;
            hr.innerText = hrValue;
            min.innerText ='00';
            sec.innerText = '00';
            secValue = 0;
            minValue = 0;
        }
        else{
            min.innerText = minValue;
            sec.innerText = '00';
            secValue = 0;
        }
    }
    else{
        sec.innerText = secValue;
    }
}

let stopWatch = function(){
    clearInterval(myInterval);
}