function button() {
    document.getElementById("buyButton").value = "no.";
    setInterval(button2, 5000)
}

function button2() {
    document.getElementById("buyButton").value = "Buy";
}