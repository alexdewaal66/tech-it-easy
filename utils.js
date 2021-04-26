module.exports = {
    setTime: setTime,
    // x: x,
    // y: y,
};

function setTime() {
    const timePar = document.getElementById("time");
    timePar.innerText = Date.now();
}