const JSON_URL = "http://radio.dangeru.us:8000/status-json.xsl"


window.onload = init;

function init(){
    getData();
};

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
