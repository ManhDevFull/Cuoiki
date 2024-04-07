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
        audioSource.src = "mp3/" + musicId + ".mp3";
        var audioPlayer = document.querySelector("#audio");
        audioPlayer.load();
        audioPlayer.play();
        document.getElementById("imgplay").src = "image/" + musicId + ".png";
        let test1 = document.getElementById("on");
        if(test1.classList == "fas fa-play")
            {
                test1.classList.add("off");
                document.getElementById("off").classList.remove("off");
        }
    });
}