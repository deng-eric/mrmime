
  window.onload = shiny;

  function shiny(){
    randomNum = Math.floor((Math.random() * 10));
    var w;
    if(randomNum == 0){
      w = "RARE.gif"
    }
    else{
      w = "mr-mime.gif"
    }
    document.getElementById("swag").src = w;
  }

	function cryin() {
    document.getElementById("audio").play();
	}

	var a = document.getElementById("swag");
	a.addEventListener("click", cryin);
