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
        let replaceName = document.querySelector("#" + musicId).querySelector(".name1").querySelector("h3");
        document.getElementById("name").textContent = replaceName.textContent;
        let widthName = document.getElementById("name");
        if(widthName.offsetWidth > 175){
            widthName.innerHTML = '<marquee style="width: 175px;">' + widthName.textContent + '</marquee>';
        };
    });
}
for (var i = 0; i < musicImgs.length; i++) {
    let widthPx = musicImgs[i].querySelector(".name1").querySelector("h3");
    if(widthPx.offsetWidth > 145){
        widthPx.innerHTML = '<marquee style="width: 145px;">' + widthPx.textContent + '</marquee>';
    };
}


// có thể add thêm loop vào audio để lặp lại



// random 
// var items = document.querySelectorAll(".item"); // Tìm các phần tử có class "item"

// var randomIndex = Math.floor(Math.random() * items.length); // Sinh số ngẫu nhiên từ 0 đến số lượng phần tử - 1

// var randomItem = items[randomIndex]; // Lấy phần tử ngẫu nhiên từ mảng

// var randomItemId = randomItem.id; // Lấy id của phần tử ngẫu nhiên

// console.log(randomItemId); // In ra id của phần tử ngẫu nhiên

// logIn
var logIn = document.querySelector('.login');
    logIn.addEventListener("click",() => {
        logIn.style.opacity = 0;
        document.querySelector('.screenLogIn').classList.remove('of');
        document.querySelector('.home').classList.add('fadeOutDownBig');
        setTimeout(() => {
            document.querySelector('.home').classList.add('of');
        }, 1000);
        
});


// signUp




// testPassword
