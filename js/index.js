const JSON_URL = "http://radio.dangeru.us:8000/status-json.xsl"


window.onload = init;

function init(){
    getData();
    var player = document.getElementById("player");
    let playarea = document.getElementById("main");
    player.onplay = onPlayEvent;
    player.onpause = onPauseEvent;
    playarea.onclick = onPlayClick;

    const interval = setInterval(function() {
        if(!player.paused){
            getData();
        }
      }, 5000);
};
function onPlayClick(){
    let player = document.getElementById("player");
    player.paused ? player.play() : player.pause()
}
function onPauseEvent(){
    let playArea = document.getElementById("main");
    playArea.style.backgroundColor = "black";
    playArea.style.color = "snow";
}
function onPlayEvent(){
    let playArea = document.getElementById("main");
    playArea.style.backgroundColor = "snow";
    playArea.style.color = "black";

}
function updateSongInfo() {
    let data = JSON.parse(this.responseText);
    console.log(data);
    let songTitle = document.getElementById("songtitle");
    let artist = document.getElementById("artist");
    songTitle.innerHTML = data.icestats.source.title;
    artist.innerHTML = data.icestats.source.artist;
};
  
function getData(){
    var oReq = new XMLHttpRequest();
    oReq.onload = updateSongInfo;
    oReq.open("get", JSON_URL, true);
    oReq.send();
};
