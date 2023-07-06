console.log ("florep1999@gmail.com","paoloflore937@gmail.com","marco2000@gmail.com","dario190@gmail.com","vincenzoo10@gmail.com");

const listaAccesso = ["florep1999@gmail.com","paoloflore937@gmail.com","marco2000@gmail.com","dario190@gmail.com","vincenzoo10@gmail.com"];

const controlloBtn = document.getElementById("controlloBtn");
const risultato = document.getElementById("risultato");

controlloBtn.addEventListener("click", function() {
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value;

    if (listaAccesso.includes(email)) {
        risultato.textContent = "Accesso consentito";
        risultato.style.color = "green";
    } else {
        risultato.textContent = "Accesso negato";
        risultato.style.color = "red";   //qui modifico direttamente il css
    }
});
