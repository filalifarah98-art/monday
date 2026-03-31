function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function sendMessage() {
    let name = document.getElementById("name").value;
    let response = document.getElementById("response");

    if(name === "") {
        response.textContent = "Veuillez remplir les champs";
    } else {
        response.textContent = "Message envoyé avec succès ✔️";
    }
}