numAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numAleatorio)

pontos = 100

function confirmar(){
	num = document.getElementById("num").value;
	num = parseInt (num)

		if (num == numAleatorio){
			var texto = document.getElementById("texto");
			texto.innerHTML = "Acertou ! Seus pontos: " + pontos ;
		}
		else{
			if(num > numAleatorio){
				pontos = pontos-1
				var texto = document.getElementById("texto");
				texto.innerHTML ="Errado, tente um número menor. Pontos restantes: " + pontos ;
			}
			else if (num < numAleatorio){
				pontos = pontos-1
				var texto = document.getElementById("texto");
				texto.innerHTML ="Errado, tente um número maior. Pontos restantes: " + pontos ;
			}
		}
	 document.getElementById("num").value = "";
}

function novo_jogo(){
	numAleatorio = Math.floor(Math.random() * 100) + 1;
	pontos = 100
	document.getElementById("num").value = "";
	
	var texto = document.getElementById("texto");
	texto.innerHTML = "Você ainda tem 100 tentativas";
}