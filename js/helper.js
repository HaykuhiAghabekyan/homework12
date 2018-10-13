"use strict";

function selectedCar(e){
	e.classList.add( 'active');
	let id = e.getAttribute('id');
	let speed = e.getAttribute('role');
	let carColor = e.getAttribute('data');
	let selectedCar = new Car(id, speed, carColor);
	carList.add(selectedCar);

	let tracks = document.querySelector('.trackLine');
	let trackLine = document.createElement('p');
	trackLine.style.color = carColor;
	trackLine.innerHTML = "<i class='fas fa-car'></i>";
	tracks.appendChild(trackLine);

	

	
}



function selectedTrack(e) {
	e.classList.add( 'active');
	let id = e.getAttribute('id');
	let color = e.getAttribute('data');
	let factor = e.getAttribute('role');

	let trackBg = document.querySelector('.trackLine');
	trackBg.style.background = '#' + color;
	let selectedTrack = new Track(id, factor, color);
	trackList.add(selectedTrack);
	

}


let start = document.querySelector('.start');

start.onclick = () => {
	for (let i = 0; i < carList.list.length; i++) {
		let speed = carList.list[i].speed;
		let factor = trackList.list[0].factor;
		let ss = speed * factor;
		let s = 0;
		let drive = setInterval(() => {
			let carDrive = document.querySelector(`.trackLine p:nth-of-type(${i+1}) i`);
			carDrive.style.transform = `translateX(${s += ss}px)`;
		
		},1000)
	}
}

