// Equipe: Camila Azevedo do Vale Santiago, Antonio Silvestre Pereira Neto e Viviane Rodrigues Nogueira
const songs = [
    "aTemporaryHigh.mp3",
    "suit&Tie.mp3",
    "bones.mp3",
    "theInnocent.mp3",
    "feelGoodInc",
    "dontBlameMe.mp3"
];
const player = document.getElementById("player");

const createSongList = () => {
    const list = document.createElement("ol");
    for (let i = 0; i < songs.length; i++) {
        const item = document.createElement("li");
            item.appendChild(document.createTextNode(songs[i].replace(".mp3", "")));
        list.appendChild(item);
    }
    return list;
};

const songList = document.getElementById("songList");
songList.appendChild(createSongList());

const links = document.querySelectorAll("li");

for (const link of links) {
    link.addEventListener("click", setSong);
}

function setSong(e) {
    console.log(e);
    document.querySelector("#headphones").classList.remove("pulse");
    const source = document.getElementById("source");
    source.src = "songs/" + e.target.innerText + ".mp3";
    document.getElementById("currentSong").innerText = `Now Playing: ${e.target.innerText.replace('.mp3', '')}`;

    player.load();
    player.play();
  
    document.querySelector("#headphones").classList.add("pulse");
}

function playAudio() {
    if (player.readyState) {
        player.play();
    }
}

function pauseAudio() {
    player.pause();
}

const slider = document.getElementById("volumeSlider");
slider.oninput = function (e) {
    const volume = e.target.value;
    player.volume = volume;
};

function updateProgress() {
    if (player.currentTime > 0) {
        const progressBar = document.getElementById("progress");
        progressBar.value = (player.currentTime / player.duration) * 100;
        progressBar.addEventListener('click', function(x){
            player.currentTime = (x.offsetX / progressBar.offsetWidth) * player.duration
        })
    }
}
