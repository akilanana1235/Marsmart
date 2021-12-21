var memory_array = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
let time = 10;
let isGameOver = false;


Array.prototype.memory_tile_shuffle = function () {
	var i = this.length, j, temp;
	while (--i > 0) {
		j = Math.floor(Math.random() * (i + 1));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	}
}
function newBoard() {
	tiles_flipped = 0;
	var output = '';
	memory_array.memory_tile_shuffle();
	for (var i = 0; i < memory_array.length; i++) {
		output += '<div id="tile_' + i + '" onclick="memoryFlipTile(this,\'' + memory_array[i] + '\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
	document.getElementById("gScore").innerHTML = 0;
	setTimer();
}


function memoryFlipTile(tile, val) {

	if(time>=0){

	if (tile.innerHTML == "" && memory_values.length < 2) {

		tile.style.background = '#FFF';
		tile.innerHTML = val;

		if (memory_values.length == 0) {

			memory_values.push(val);
			memory_tile_ids.push(tile.id);

		} else if (memory_values.length == 1) {

			memory_values.push(val);
			memory_tile_ids.push(tile.id);

			if (memory_values[0] == memory_values[1]) {

				tiles_flipped += 2;
				document.getElementById("gScore").innerHTML=tiles_flipped*50;
				
				memory_values = [];
				memory_tile_ids = [];
				
				if (tiles_flipped == memory_array.length) {

					isGameOver = true;
					let mgScore = tiles_flipped*50;
					localStorage.setItem("memoryGameScore",mgScore);
				
					window.location.href = 'MemoryGameSuccess.html';
					
				}
				
			} else {
				function flip2Back() {
					// Flip the 2 tiles back over
					var tile_1 = document.getElementById(memory_tile_ids[0]);
					var tile_2 = document.getElementById(memory_tile_ids[1]);
					tile_1.style.background = 'url(Images/quizCardBg.png) no-repeat';
					tile_1.style.backgroundPosition = 'center center';
					tile_1.style.backgroundSize = 'cover';
					tile_1.innerHTML = "";
					tile_2.style.background = 'url(Images/quizCardBg.png) no-repeat';
					tile_2.style.backgroundPosition = 'center center';
					tile_2.style.backgroundSize = 'cover';
					tile_2.innerHTML = "";
					// Clear both arrays
					memory_values = [];
					memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	 }

  }else{

	let mgScore = tiles_flipped*50;
	localStorage.setItem("memoryGameScore",mgScore);
	window.location.href = 'MemoryGameSuccess.html';
	//alert("Times Up!! ")
  }

}


function setTimer(){
	const countDown = document.getElementById("countDown");

	setInterval(updateCountDown,1000);

	function updateCountDown(){
		if(time>=0 && !isGameOver ){
			const minutes = Math.floor(time/60);
			let seconds = time%60;

			if(seconds == 0 ){
				let zero = 0;
				countDown.innerHTML = `${minutes}:${seconds}${zero}`;
			}else{
				countDown.innerHTML = `${minutes}:${seconds}`;
			}

			time--;
		}
	}
}