let sliders = document.querySelectorAll( "input" );
sliders.forEach(e => {
    e.addEventListener("input", () => {
        let r = document.getElementById("red").value;
        let g = document.getElementById("green").value;
        let b = document.getElementById("blue").value;
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b} )`
        document.body.style.color = `rgb(${255-r}, ${255-g}, ${255-b} )`
    })
});
document.getElementsByClassName("vidlist")[0].style.display = "none"
let videos = document.getElementsByClassName("videos")[0]
videos.addEventListener("click",() => {
    if (document.getElementsByClassName("vidlist")[0].style.display == "none") {
        document.getElementsByClassName("vidlist")[0].style.display = "block"
        document.getElementsByClassName("vidlist")[0].classList.add("turun")
    } else {
        document.getElementsByClassName("vidlist")[0].style.display = "none"
    }
    
})