// JS representation from DOM
const fill = (document.querySelector = ".fill");
const empties = (document.querySelectorAll = ".empty");

// Event listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
fill.addEventListener("dragover", dragOver);
fill.addEventListener("dragenter", dragEnter);
fill.addEventListener("dragleave", dragLeave);
fill.addEventListener("dragdrop", dragDrop);

// Drag N Drop functions
function dragStart() {
	console.log("drag start");
}
function dragEnd() {
	console.log("drag end");
}
function dragOver() {
	console.log("drag over");
}
function dragEnter() {
	console.log("drag enter");
}
function dragLeave() {
	console.log("drag leave");
}
function dragDrop() {
	console.log("drag drop");
}
