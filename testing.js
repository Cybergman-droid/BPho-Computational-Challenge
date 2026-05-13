function randomWalk() {
	let points = [{ x: 0, y: 0 }];
	for (let i = 1; i <= 50; i++) {
		let angleRad = Math.random() * (2 * Math.PI);
		let xcoordRad = Math.cos(angleRad);
		let ycoordRad = Math.sin(angleRad);
		console.log(angleRad);
		console.log(xcoordRad);
		console.log(ycoordRad);
		let newxCoord = points[i - 1].x + xcoordRad;
		let newyCoord = points[i - 1].y + ycoordRad;
		let x = newxCoord;
		let y = newyCoord;
		points.push({ x, y });
	}
	console.log(points);
}
randomWalk();
