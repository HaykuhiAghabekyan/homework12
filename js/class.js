"use strict";

class Cars{
	constructor(list) {
		this.list = [];
	}
	add(car) {
		this.list.push(car);
	}
	start() {
		
	}
	drive() {

	}
	finish() {

	}
}


class Car {
	constructor(model, speed, color) {
		this.model = model;
		this.speed = speed;
		this.color = color;
	}
}
class Tracks{
	constructor(track) {
		this.list = [];
	}
	add(track) {
		this.list.push(track);
	}
}

class Track {
	constructor(track, factor, color) {
		this.track = track;
		this.factor = factor;
		this.color = color;
	}
}
let carList = new Cars();
carList.start();
let trackList = new Tracks();


