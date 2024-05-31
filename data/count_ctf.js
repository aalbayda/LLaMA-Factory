const data = require("./ctf_dataset.json");
let counts = {};
const methods = new Set();
for (let d of data) {
	let answer = JSON.parse(d.output)["answer"];
	methods.add(answer);
	if (!Object.keys(counts).includes(answer)) {
		counts[answer] = 1;
	} else {
		counts[answer]++;
	}
}

console.log(counts);
console.log(data.length);
