function check() {
    var planet = document.getElementById("redplanet")
    //var planet=document.querySelector("redplanet")

    planet.innerText = "Aliens landed on Mars"

    planet.classList.add("alert", "alert-danger")
    //planet.remove()
}

var button=document.querySelector("input[type='button']")
button.addEventListener("click", check)