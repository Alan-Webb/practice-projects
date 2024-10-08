// JS representation from DOM
const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

// Event listeners
btn.addEventListener("click", () => boxesContainer.classList.toggle("big"));

// Dynamically generates divs
function createBoxes() {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			const box = document.createElement("div");
			box.classList.add("box");
			box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
			boxesContainer.appendChild(box);
		}
	}
}

createBoxes();
