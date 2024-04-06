const onlistion = document.querySelector("#on");
onlistion.addEventListener("click",() => {
    onlistion.classList.add("off");
    document.querySelector("#off").classList.remove("off");
    let audio = document.querySelector("#audio");
    audio.play();
})
const offlistion = document.querySelector("#off");
offlistion.addEventListener("click",() => {
    offlistion.classList.add("off");
    document.querySelector("#on").classList.remove("off");
    let audio = document.querySelector("#audio");
    audio.pause();
})