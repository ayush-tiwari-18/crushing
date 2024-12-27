let buttoni = document.getElementById("yes");
buttoni.addEventListener("mousemove", () => {
    document.getElementById("general").style.display = "none";
    document.getElementById("hover_yes").style.display = "inline";
});

buttoni.addEventListener("mouseout", () => {
    document.getElementById("general").style.display = "inline";
    document.getElementById("hover_yes").style.display = "none";
});

let buttonn = document.getElementById("no");
buttonn.addEventListener("mousemove", () => {
    let randomTop = Math.floor(Math.random() * 100) + "%";
    let randomLeft = Math.floor(Math.random() * 100) + "%";
    buttonn.style.top = randomTop;
    buttonn.style.left = randomLeft;
});
