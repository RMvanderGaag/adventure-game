var audio = {
	theme: new Audio("audio/SkyrimTheme.mp3"),
	clickSound: new Audio("audio/startGame.mp3")
};
var gamecontainer = document.getElementById("game-container");
var title = document.getElementById("title");
var description = document.getElementById("description");
var gamebuttons = document.getElementById("game-buttons");
var button1 = document.getElementById("button1");
var	button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var inventoryItem = document.getElementById("inventoryItem");
var inventory = [];
var key = false;
var hasArmor = false;
var Lockpick = false;
var zwaard = false;
var hasPotion = false;
var lever = false;
var uitleg;
var gameImage;


function start() {
	button1.style.display = "inline-block";
	button2.style.display = "inline-block";

	title.innerHTML = "Dragon hunt";
	button3.style.display = "none";
	inventoryItem.style.display = "none";
	description.style.display = "none";

	title.style.textAlign = "center";
	gamebuttons.style.display = "block";
	gamebuttons.style.margin = "0 auto";

	gamebuttons.style.width = "250px";

	uitleg = document.createElement("div");
	uitleg.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quis molestias velit dolorum culpa nobis esse ut cumque? Nemo fugit reiciendis, magnam saepe, aperiam sed numquam placeat! Neque sint voluptatum at culpa porro, doloribus accusantium nihil dolores magni quia soluta adipisci cumque quam nulla veritatis maxime, eum, molestias distinctio possimus!"
	gamecontainer.appendChild(uitleg);

	uitleg.style.width = "500px";
	uitleg.style.textAlign = "center";
	uitleg.style.display = "block";
	uitleg.style.margin = "300px auto 0 auto";

	button1.innerHTML = "Start game";
	button2.innerHTML = "Muziek aan";

	button1.onclick = function(){
		intro();
	}
}

function intro() {
	audio.clickSound.volume = 0.3;
	audio.clickSound.play();

	uitleg.style.display = "none";
	button1.style.display = "none";
	button2.style.display = "none";

	gamecontainer.style.backgroundColor = "black";
	gamecontainer.style.transition = "3s";

	title.style.position = "relative";
	title.style.top = "150px";
	title.style.margin = "0";
	title.style.color = "white";

	gamebuttons.style.width =  "120px";

	setTimeout(function(){button2.style.display = "block"}, 3000);

	button2.style.position = "relative";
	button2.style.top =  "300px";

	button2.style.color = "white";
	button2.style.backgroundColor = "black";
	button2.style.fontSize = "18px";

	button2.innerHTML = "Start quest";
	title.innerHTML = "Prison";

	button2.onclick = function() {
		Quest1();
	}
}

function Quest1(){
	while (gamecontainer.firstChild) {
		gamecontainer.removeChild(gamecontainer.firstChild);
	}
	gamecontainer.style.display = "grid";
	gamecontainer.style.gridTemplateColumns = "auto";
	gameImage = document.createElement("div");
	gameButtons = document.createElement("div");
	gamecontainer.appendChild(gameImage);
	gamecontainer.appendChild(gameButtons);
	gamecontainer.appendChild(inventoryItem);
	gameImage.id = "gameImage";
	gameButtons.id = "gameButtons";

	gameImage.style.backgroundImage = "url('img/prisonInsideEdit.jpg')"
	gameImage.style.backgroundSize = "100% 100%";
	gameImage.style.backgroundRepeat = "no-repeat";

	gameButtons.style.backgroundColor = "rgb(54,57,63)";

	button1 = document.createElement("button");
	button2 = document.createElement("button");
	button3 = document.createElement("button");

	button1.innerHTML = "Naar bewaker";
	button2.innerHTML = "Slapen";
	button3.style.display =  "none";

	gameButtons.appendChild(button1);
	gameButtons.appendChild(button2);
	gameButtons.appendChild(button3);

	button1.onclick = function() {
		Guard();
	}

	button2.onclick = function() {
		Sleeproom();
	}	
}

function Guard(){
	button1.style.display = "inline-block";
	button2.style.display = "inline-block";
	button3.style.display =  "inline-block";

	button1.innerHTML = "Pak sleutel";
	button2.innerHTML = "Open cell deur";
	button3.innerHTML = "Terug";

	if (key == false){
		gameImage.style.backgroundImage = "url('img/GuardKey.png')";
		button2.onclick = function() {
			alert("Je hebt de sleutel nodig om de deur te openen");
		}
	}else {
		gameImage.style.backgroundImage = "url('img/GuardnoKey.png')";
		button1.style.display = "none";
		button2.onclick = function() {
			Opendoor();
		}
	}

	console.log(key);
	
	button1.onclick = function(){
		KeyItem();
		key = true;
	}

	button3.onclick = function(){
		Quest1();
	}
}

function KeyItem(){
	gameImage.style.backgroundImage = "url('img/Key.png')";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "block";

	button3.innerHTML = "Doorgaan";

	button3.onclick = function() {
		Guard();
		inventory.push("key");
		console.log(inventory);
		inventoryItem.src = "img/Key.png";
		inventoryItem.style.display = "block";
	}
}

function Opendoor(){
	gameImage.style.backgroundImage = "url('img/GuardWarning.jpg')";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";

	setTimeout(function() {alert("GAME OVER!")}, 2500);
	setTimeout(function() {location.reload()}, 3000);
}

function Sleeproom() {
	button3.style.display = "none";
	button2.style.display = "inline-block";
	button1.style.display = "inline-block";

	gameImage.style.backgroundImage = "url('img/prisonInside.jpg')";

	button1.innerHTML = "cell deur";

	button1.onclick = function(){
		PrisonbarsNoguard();
	}

	button2.onclick = function(){
		Quest1();
	}
}

function PrisonbarsNoguard(){
	gameImage.style.backgroundImage = "url('img/PrisonNoGuard.png')";

	button1.innerHTML = "Open cell deur";
	button3.innerHTML = "Terug";
	
	button1.style.display =  "inline-block";
	button2.style.display = "none";
	button3.style.display = "inline-block";

	button1.onclick = function() {
		if (key == false){
			alert("Je hebt de sleutel nodig om de cell deur te openen");
		}else {
				key = false;
				inventoryItem.style.display = "none";
				quest2();
		}
	}

	button3.onclick = function() {
		Sleeproom();
	}
}

function quest2() {
	var lockpick = document.createElement("IMG");
	lockpick.setAttribute("src", "img/lockpick.png");
	lockpick.setAttribute("onclick", "pickupLockpick()");
	gameImage.appendChild(lockpick);
	lockpick.id = "lockpick";

	gameImage.style.backgroundImage = "url('img/splittingHallway.jpg')";
	button3.style.display = "none";
	button2.style.display = "inline-block";
	button1.innerHTML = "links";
	button2.innerHTML = "rechts";

	if (Lockpick == true){
		lockpick.style.display = "none";
	}

	button1.onclick = function(){
		left();
		lockpick.style.display = "none";
	}

	button2.onclick = function(){
		right();
		lockpick.style.display = "none";
	}	
}

function left(){
	button1.style.display = "inline-block";
	button3.style.display = "inline-block";
	gameImage.style.backgroundImage = "url('img/hallwayLeft.jpg')";
	var armor = document.createElement("IMG");



	button2.style.display = "none";

	button1.innerHTML = "Armory";
	button3.innerHTML = "Terug";

	
	if(hasArmor == true){
		armor.style.display = "none";
	}else {
		
		gameImage.appendChild(armor);
		armor.setAttribute("src", "img/armor.png");
		armor.setAttribute("onclick", "pickupArmor()");
		armor.id = "armor";
		armor.style.display = "block";
	}

	button1.onclick = function(){
		Armory();
		armor.style.display = "none";
	}

	button3.onclick = function(){
		quest2();
	}
}

function pickupArmor(){
	document.getElementById("armor").style.display = "none";
	hasArmor = true;
	alert("Je hebt het armor aangetrokken");
	console.log(armor)
}

function pickupLockpick(){
	document.getElementById("lockpick").style.display = "none";
	Lockpick = true;

	inventoryItem.style.display = "block";
	inventoryItem.src = "img/lockpick.png";
}

function Armory(){
	gameImage.style.backgroundImage = "url(img/armory.jpg)";
	
	button1.style.display = "inline-block";
	button2.style.display = "inline-block";
	button3.style.display = "inline-block";

	button1.innerHTML = "Pak zwaard";
	button2.innerHTML =  "Plein";
	button3.innerHTML = "terug";

	button1.onclick = function() {
		gameImage.style.backgroundImage = "url('img/zwaard.png')";
		zwaard = true;
		button1.style.display = "none";
		button2.style.display = "none";
		button3.innerHTML = "doorgaan";

		button3.onclick = function() {
			Armory();
		}
	}

	button2.onclick = function() {
		plein();
	}

	button3.onclick = function() {
		left();
	}

	if (zwaard == true){
		button1.style.display = "none";
	}
}

function plein(){
	gameImage.style.backgroundImage = "url('img/courtyard.jpg')";

	button1.style.display = "inline-block";
	button2.style.display = "inline-block";
	button3.style.display = "inline-block";

	button1.innerHTML = "Armory";
	button2.innerHTML = "Poort";
	button3.innerHTML = "Barakken";

	button4 = document.createElement("button");
	gameImage.appendChild(button4);
	button4.id = "button4";

	button1.onclick = function(){
		Armory();
	}

	button2.onclick = function(){
		Gate();
	}

	button3.onclick = function() {
		right();
	}

	button4.onclick = function(){
		Well();
	}
}

function Well() {
	button1.style.display = "inline-block";
	button3.style.display = "inline-block";

	gameImage.style.backgroundImage = "url('img/well.jpg')";
	button4.style.display = "none";
	button2.style.display = "none";

	button1.innerHTML = "Klim naar beneden";
	button3.innerHTML = "Terug";

	button1.onclick = function(){
		bonusRoom();
	}
}

function bonusRoom() {
	gameImage.style.backgroundImage = "url('img/chestRoom.png')";
	button1.innerHTML = "Open chest";
	button3.innerHTML = "Ga weer naar boven";

	button1.style.display = "inline-block";
	button3.style.display = "inline-block";

	button1.onclick = function() {
		if (Lockpick == false){
			alert("Je hebt een lockpick nodig om de kist te openen");
		}else{
			openChest();
		}
	}

	button3.onclick = function(){
		plein();
	}
}

function right() {
	gameImage.style.backgroundImage =  "url('img/Barracks.jpg')";
	if (hasArmor == false){
		setTimeout(function(){alert("GAME OVER!")}, 100);
		setTimeout(function(){location.reload()}, 150);
	}
		button1.style.display = "inline-block";
		button2.style.display = "inline-block";
		button3.style.display = "inline-block";

		var potion = document.createElement("IMG");
		gameImage.appendChild(potion);
		potion.setAttribute("src", "img/healthPotion.png");
		potion.id = "potion";
		potion.style.display = "block";

		button1.innerHTML = "Plein";
		button2.innerHTML = "Informatie aan wachter vragen";
		button3.innerHTML = "Splitsing";

		button1.onclick = function(){
			plein();
			potion.style.display = "none";
		}

		button2.onclick = function(){
			alert("TEXT");
		}

		button3.onclick = function(){
			quest2();
			potion.style.display = "none";
		}
}

function Gate(){
	if (lever == false){
		gameImage.style.backgroundImage = "url('img/castleGateclosed.png')";
		button1.onclick = function(){
			alert("Je moet eerst de poort openen");
		}
	}else {
		gameImage.style.backgroundImage = "url('img/castleGateopen.png')";

	}
}
	button1.innerHTML = "Verlaat kasteel";
	button2.innerHTML = "Naar boven";
	button3.innerHTML = "Plein";

	button2.onclick = function(){

	}

	button3.onclick = function(){
		plein();
	}







start();



