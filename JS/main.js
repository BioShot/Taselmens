$(document).ready(function () {
    $("#img-1").click(function () {
        document.getElementById("img-1").requestFullscreen();
    });
    var audioNumber = Math.floor(Math.random() * 4)
    if(audioNumber == 0){
        document.location.reload()
    }else{

        var audioElement = document.createElement("audio")
        audioElement.src = "audio/" + audioNumber + ".mp3"
        audioElement.autoplay = true;
    }
    if(audioNumber == 4){
        document.location.reload()
    }else{
        var audioElement = document.createElement("audio")
        audioElement.src = "audio/" + audioNumber + ".mp3"
        audioElement.autoplay = true;
    }
})