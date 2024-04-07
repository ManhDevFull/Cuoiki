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
var musicImgs = document.getElementsByClassName("item");
var audioSource = document.getElementById("audio");
for (var i = 0; i < musicImgs.length; i++) {
    musicImgs[i].addEventListener("click", function() {
        var musicId = this.id;
        audioSource.src = "mp4/" + musicId + ".mp3";
        var audioPlayer = document.querySelector("#audio");
        // document.querySelector("#on").classList.add("off");
        // document.querySelector("#off").classList.add("off");
        audioPlayer.load();
        audioPlayer.play();
    });
}