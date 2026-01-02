const activeCode = document.getElementById("activeCode");
const joinInput = document.getElementById("joinInput");

const createBtn = document.getElementById("createBtn");
const joinBtn = document.getElementById("joinBtn");

window.addEventListener("pageshow", () => {
    joinInput.value = "";
});

createBtn.addEventListener("click", () => {
    activeCode.textContent = "abcd";
});

joinBtn.addEventListener("click", () => {
    activeCode.textContent = joinInput.value || "-";
});

// Placeholder functions for future functionality

function setStatusGreen() {
    // document.getElementById("statusCircle").className = "circle status green";
}

function setColorBlue() {
    // document.getElementById("colorCircle").className = "circle blue";
}

function setColorRed() {
    // document.getElementById("colorCircle").className = "circle red";
}
