var audioSource = document.getElementById("audio");
const onlistion = document.querySelector("#on");
onlistion.addEventListener("click",() => {
    onlistion.classList.add("off");
    document.querySelector("#off").classList.remove("off");
    audioSource.play();
})
const offlistion = document.querySelector("#off");
offlistion.addEventListener("click",() => {
    offlistion.classList.add("off");
    document.querySelector("#on").classList.remove("off");
    audioSource.pause();
})


// lấy time
audioSource.addEventListener('loadedmetadata',() => {
    var outTime = audioSource.duration;
});

audioSource.addEventListener('timeupdate', () => {
    var timeMp3 = audioSource.currentTime;
    var minute = Math.floor( timeMp3 / 60 );
    var second = Math.floor( timeMp3 % 60 );

    var outTime = audioSource.duration;
    var outMinute = Math.floor( outTime / 60 );
    var outSecond = Math.floor( outTime % 60 );
    document.querySelector(".time").innerText = outMinute + ':' + outSecond + '/' + minute + ':' + second ;
});

var musicImgs = document.getElementsByClassName("item");
for (var i = 0; i < musicImgs.length; i++) {

    musicImgs[i].addEventListener("click", function() {
        var musicId = this.id;
        audioSource.src = "mp3/" + musicId + ".mp3";
        audioSource.load();
        audioSource.play();
        vttId = "vtt/" + musicId + ".vtt";

        fetch(vttId)
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const vttDoc = parser.parseFromString(data, 'text/xml');
          const cues = vttDoc.getElementsByTagName('text');

          const lyricsDiv = document.querySelector('.play');
          for (let i = 0; i < cues.length; i++) {
            const cueText = cues[i].innerHTML;
            lyricsDiv.innerHTML += `<p>${cueText}</p>`;
            }
        });
        
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

document.querySelector('.signUp').addEventListener("click",() => {
    document.querySelector('.rightLogIn').classList.add('fadeOut');
    document.querySelector('.rightSignUp').classList.remove('fadeIn');
    document.querySelector('.rightSignUp').classList.remove('fadeIn');
    document.querySelector('.rightSignUp').classList.remove('fadeOut');
    document.querySelector('.rightSignUp').classList.remove('fadeOut');
    document.querySelector('.rightLogIn').classList.remove('fadeOut');
    document.querySelector('.rightLogIn').classList.remove('fadeOut');
    document.querySelector('.rightLogIn').classList.remove('fadeIn');
    document.querySelector('.rightLogIn').classList.remove('fadeIn');
    setTimeout(() => {
        document.querySelector('.rightLogIn').style.display = "none";
        document.querySelector('.rightSignUp').classList.add('fadeIn');
        document.querySelector('.rightSignUp').style.display = null;},500);



});



document.querySelector('.logIn').addEventListener("click",() => {
    document.querySelector('.rightSignUp').classList.remove('fadeIn');
    document.querySelector('.rightSignUp').classList.remove('fadeIn');
    document.querySelector('.rightSignUp').classList.remove('fadeOut');
    document.querySelector('.rightSignUp').classList.remove('fadeOut');
    document.querySelector('.rightLogIn').classList.remove('fadeOut');
    document.querySelector('.rightLogIn').classList.remove('fadeOut');
    document.querySelector('.rightLogIn').classList.remove('fadeIn');
    document.querySelector('.rightLogIn').classList.remove('fadeIn');
    document.querySelector('.rightSignUp').classList.add('fadeOut');
    setTimeout(() => {
        document.querySelector('.rightSignUp').style.display = "none";
        document.querySelector('.rightLogIn').classList.add('fadeIn');
        document.querySelector('.rightLogIn').style.display = null;},500);
});




// testPassword




//time mp3
