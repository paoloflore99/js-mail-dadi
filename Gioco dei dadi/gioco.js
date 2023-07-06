//nota bene coomenta con detaglio stavolta tutto che che fai ricorda che e utilissimo 

//const generatore = document.querySelector(".generatore")  //cerca la classe non id con il . inizziale 

/*generatore.addEventListener("click", function () { //serve per quando si fa clik 

    console.log("funziona") //serve per vedere se funziona il tasto 
    const eta = nome.Value;//prova da rivedere in classe oppure dasolo
})*/


//generare un numero pari e maggiore di 6
//stabilire il vincitore in base al risultato 

/*let randInt = Math.floor(Math.random()*6);  //  gene numero random   //generatore di numero per il biglietto

console.log(randInt); */

/*const generatore = document.querySelector(".generatore")  //cerca la classe non id con il . inizziale 

generatore.addEventListener("click", function () { //serve per quando si fa clik 

    console.log("funziona") //serve per vedere se funziona il tasto 

})*/

//generare un numero pari e maggiore di 6




let generatore = document.querySelector(".generatore");//lui prende la classe querySelector , e lo cpisci dal punto 
let dadoUtente = document.getElementById("persona"); //lui prende id
let dadoPC = document.getElementById("macchina");

generatore.addEventListener("click", function () {
    console.log("Funziona?");

    let persona = generaNumeroDado(1, 6);    //per poter generare numeri si poteva fare anche var nomeId= pero il var non e da usare (credo)
    let macchinaPC = generaNumeroDado(1, 6);

    console.log("1", persona);
    console.log("1", macchinaPC);

    dadoUtente.innerHTML = persona;
    dadoPC.innerHTML = macchinaPC;
});



function generaNumeroDado(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

if ("persona" > "macchina" ){      
    document.getElementById("vincitore").innerHTML = ("il vincitore e la macchina");

} else if ("persona" > "macchina" ){          //perche qua non va dalla console mi manda direttamente sotto ma non mi da errori e neanche al valideitor da errori 
    document.getElementById("vincitore").innerHTML = ("il vincitore sei tu");

} else {   //perche non gli piace che metto le parentesi ()
    document.getElementById("vincitore").innerHTML = ("e un pareggio");

}




//da qui invece devo fare in modo di determinare un vincitore 
//raggiona creo una variabbile oppure la innesto qui dentro 
//prendo i risultati e faccio if persona < macchina vince la persona 
//if persona > macchina vince la macchina 


//cosaq faccio creo la variabbile di chi vince dentro e fuori ? 








