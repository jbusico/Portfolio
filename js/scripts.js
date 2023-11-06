const button = document.getElementById("button")

function load() {
    button.addEventListener("click", function () {
        document.getElementById("body").classList.toggle("dark")
    })
}
console.log(button);