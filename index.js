let p1clock = document.getElementById("p1clock");
let p2clock = document.getElementById("p2clock");
let p1btn = document.getElementById("p1btn");
let p2btn = document.getElementById("p2btn");
let start = document.getElementById("start");
let reset = document.getElementById("reset");



function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
let v = getUrlVars();

p1clock.value = parseInt(v["time"]) < 10 ? "0"+ v["time"]+":00" : v["time"] + ":00";
p2clock.value = parseInt(v["time"]) < 10 ? "0"+ v["time"]+":00" : v["time"] + ":00";

let p1time = parseInt(v["time"]);
let p2time = parseInt(v["time"]);
let playing = false;

let currentp = 1;

function swapplayer(){
    if(playing == false){
        return;
    }
    currentp = currentp == 1 ? 2 : 1;
}
const timer = () => {
    let s1 = 0;
    let s2 = 0;
    playing= true;
    start.disabled = true;
    let timer = setInterval(()=>{       
            if(currentp == 1){
                if(playing){
                    p1time = s1 == 0 ? p1time - 1  : p1time;
                    s1 = s1 == 0 ? 59 : s1-1;
                    let ss = s1 < 10 ? "0" + s1.toString(): s1.toString(); 
                    p1clock.value = "0" + p1time + ":" + ss;
                    if (p1time == 0 && s1 == 0){
                        clearInterval(timer);
                        playing = false;
                    }            
                }
            }else{
                    if(playing){
                        p2time = s2 == 0 ? p2time - 1  : p2time;
                        s2 = s2 == 0 ? 59 : s2-1;
                        let ss = s2 < 10 ? "0" + s2.toString(): s2.toString(); 
                        p2clock.value = "0" + p2time + ":" + ss;
                        if (p2time == 0 && s2 == 0){
                            clearInterval(timer);
                            playing = false;
                        }
                    }
            }
                
    },1000);
}
start.addEventListener("click",() => {
    timer();
})
reset.addEventListener('click', () =>{
    location.reload(true);
})
p1btn.addEventListener("click",() => {
    swapplayer();
})
p2btn.addEventListener("click",() => {
    swapplayer();
})