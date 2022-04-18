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


document.deepSheep = {}
var darksheep = document.darksheep
darksheep.loginPrompt = function (callback){
    Swal.fire({
        icon: "question",
        title: 'Discount Login',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
        <input type="password" id="password" class="swal2-input" placeholder="Password">`,
        confirmButtonText: 'Sign in',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            Swal.showValidationMessage(`Please enter Discount  Name and password(Ps: Check the back of your card!)`)
          }
          return { login: login, password: password }
        }
      }).then((result) => {
        Swal.fire({
            icon: "success"
        })
      })
        
      
}