


// formulaire de l'âge

function Age()
{
	

	if (window.confirm("Avez-vous plus de 18 ans ?")) {
    window.open("index.html", "Nouvelle fenêtre", "");
	}else{
		window.close("index.html");
	}
}



function myfunction()
{
	var x = 1024; //min value
	var y = 9999; // max value

	var deg = Math.floor(Math.random() * (x - y)) + y;

	document.getElementById('box').style.transform = "rotate("+deg+"deg)";

	var element = document.getElementById('container');
	element.classList.remove('animate');
	setTimeout(function(){
		element.classList.add('animate');
	}, 5000); //5000 = 5 second
}

  // Code that we wrote before...
  var element = document.getElementById('mainbox');
  element.classList.remove('animate');

  setTimeout(function()
  {
    element.classList.add('animate');
  }, 5000);

  //code de la mise
var argent=0;
var jeton=0;

function mise()
{
	if (argent>0){
		argent=argent-2;
		jeton+=1;
	}else{
		alert("Vous n'avez plus d'argent.");
	}
	console.log(argent)
}
