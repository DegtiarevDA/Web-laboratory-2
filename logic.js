const slider = document.getElementById("myRange");
const triangles = document.getElementsByClassName("triangle");

slider.addEventListener("input", function () {
    const x = slider.value;
    Array.from(triangles).forEach(triagle => {
        triagle.style.animationDuration = `${1/x}s`;
    });
})