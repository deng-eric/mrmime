
  window.onload = shiny;

  function shiny(){
    noMasuda = Math.floor((Math.random() * 4096));
    var w;
    if(noMasuda == 0){
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
