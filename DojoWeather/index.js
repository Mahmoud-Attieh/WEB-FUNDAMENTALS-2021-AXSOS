let max = document.querySelectorAll(".tem-max")
let min = document.querySelectorAll(".tem-min")
function tempchange(){
        for(let i = 0; i<max.length; i++){
        var celTem = parseInt(max[i].innerText * 1.8) + 32
        max[i].innerText = Math.floor(celTem)
    }
        for(let i = 0; i<min.length; i++){
        var celTem = parseInt(min[i].innerText * 1.8) + 32
        min[i].innerText = Math.floor(celTem)
    }
}

function accpet() {
    const element = document.getElementById("footer");
    element.remove();
    alert("I Accept");
}

function bu(){
    alert("Loading weather report..")
}
function ch(){
    alert("Loading weather report..")
}
function da(){
    alert("Loading weather report..")
}