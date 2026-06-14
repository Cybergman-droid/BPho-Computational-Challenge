const colours = [
	"#e6194B",
	"#3cb44b",
	"#ffe119",
	"#4363d8",
	"#f58231",
	"#911eb4",
	"#46f0f0",
	"#f032e6",
	"#bcf60c",
	"#fabebe",
	"#008080",
	"#e6beff",
	"#9A6324",
	"#fffac8",
	"#800000",
	"#aaffc3",
	"#808000",
	"#ffd8b1",
	"#000075",
	"#808080",
	"#ffe4e1",
	"#98fb98",
	"#afeeee",
	"#dda0dd",
	"#ffdead",
	"#87cefa",
	"#ffb6c1",
	"#20b2aa",
	"#cd5c5c",
	"#daa520",
	"#7b68ee",
	"#40e0d0",
	"#ff6347",
	"#6a5acd",
	"#00ced1",
	"#ff69b4",
	"#ba55d3",
	"#32cd32",
	"#ff4500",
	"#1e90ff",
	"#adff2f",
	"#ff8c00",
	"#00fa9a",
	"#dc143c",
	"#00bfff",
	"#7fff00",
	"#ff00ff",
	"#2e8b57",
	"#ff1493",
	"#4682b4",
	"#c71585",
	"#6b8e23",
	"#ffdab9",
	"#5f9ea0",
	"#deb887",
	"#b22222",
	"#8fbc8f",
	"#ffefd5",
	"#6495ed",
	"#ff7f50",
	"#d2691e",
	"#8a2be2",
	"#66cdaa",
	"#ffebcd",
	"#b0c4de",
	"#ff4500",
	"#708090",
	"#f0e68c",
	"#dda0dd",
	"#cd853f",
	"#afeeee",
	"#db7093",
	"#f4a460",
	"#48d1cc",
	"#d8bfd8",
	"#b8860b",
	"#f5deb3",
	"#bc8f8f",
	"#8b4513",
	"#fafad2",
	"#00ff7f",
	"#ff69b4",
	"#87ceeb",
	"#ffe4c4",
	"#6a5acd",
	"#00bfff",
	"#ff6347",
	"#7fffd4",
	"#ff1493",
	"#20b2aa",
	"#ffb6c1",
	"#8b0000",
	"#00ff00",
	"#ff00ff",
	"#2e8b57",
];
// const ctx = document.getElementById("testChart");
// const config = {
// 	type: "line",
// 	data: {
// 		datasets: dataSets,
// 	},
// 	options: {
// 		responsive: true,
// 		aspectRatio: 1,
// 		scales: {
// 			x: {
// 				type: "linear",
// 				grid: { color: "rgba(0,0,0,0.2)" },
// 				ticks: {
// 					stepSize: 1, // smaller squares
// 				},
// 				title: {
// 					display: true,
// 					text: "Wavelength/nm",
// 				},
// 			},
// 			y: {
// 				type: "linear",
// 				grid: { color: "rgba(0,0,0,0.2)" },
// 				ticks: {
// 					stepSize: 1, // smaller squares
// 				},
// 				title: {
// 					display: true,
// 					text: "Irradiance/W/m",
// 				},
// 			},
// 		},
// 	},
// };
// const chart = new Chart(ctx, config);

// Fundamental physical constants (SI units)
const h = 6.62607015e-34; // Planck constant (J·s)
const c = 299792458; // Speed of light in vacuum (m/s)
const kB = 1.380649e-23; // Boltzmann constant (J/K)
const R = 8.314462618; // Molar gas constant (J/mol/K)
const e = Math.E;

function PlanckSpec(lambda_nm, T) {
	let lambda_m = lambda_nm * 1e-9;
	let numerator = 2 * h * c ** 2 * 1;
	let exponent = (h * c) / (lambda_m * kB * T);
	let denominator = lambda_m ** 5 * (e ** exponent - 1);
	let ans = numerator / denominator;
	return ans;
}

function PlanckSpecDataset(T) {
	let points = [{ x: 0, y: 0 }];
	for (let i = 250; i <= 2500; i += 50) {
		let nextPoint = PlanckSpec(i, T);
		points.push({ x: i, y: nextPoint });
	}
	return points;
}

let PlanckDataset = PlanckSpecDataset(4000);
console.log(PlanckDataset);

// console.log(PlanckSpec(0, 6000));
const reloadBtn = document.getElementById("reloadBtn");
reloadBtn.addEventListener("click", () => {
	chart.data.datasets = dataSets;
	chart.update();
});
