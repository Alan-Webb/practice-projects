const counterEl = document.querySelector(".counter");

const BarEl = document.querySelector(".loading-bar-front");

let idx = 0;

updateNum();

function updateNum() {
  counterEl.innerText = idx + "%";
  BarEl.style.width = idx + "%";
  idx++;
  if(idx < 101) {
    setTimeout(updateNum, 20);
  }
}