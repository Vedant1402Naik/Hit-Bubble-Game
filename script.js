let timer = 60;
let score = 0;
let hitrn = 0;

bubbleCount = () => {
    let clutter = ""

    for (let i = 0; i <= 152; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter
}

runTimer = () => {
    let timerint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerint").textContent = timer
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over Score : ${score}</h1> `
        }
    }, 1000)
}

hitter = () => {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitrn
}

increaseScore=()=>{
    score+=10;
    document.querySelector("#scoreval").textContent = score
}

document.querySelector("#pbtm")
.addEventListener("click",((details)=>{
    let clicked = Number(details.target.textContent)
    if(clicked==hitrn){
        increaseScore()
        bubbleCount()
        hitter()
    }
}))

bubbleCount()
runTimer()
hitter()
