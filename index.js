// ici je met les bouttons en rouge et bleu, mais je l'ai fait sur CSS
// document.querySelector("#btn-1").style.background = "red";
// document.querySelector("#btn-2").style.background = "blue";

// ici je déclare une variable pour le bouton rouge
const btnHorde = document.getElementById("btn-1");
// et bleu
const btnAlliance = document.getElementById("btn-2");

// ici je dévclare la variagle Anwser qui contiendra mon "H5"
const Answer = document.querySelector("h5");

//la je vais faire un click event
const questionHA = document.querySelector(".click-event");

//Ici je déclare ma variavle pour le curseur de la sourir
const mousemove = document.querySelector(".mousemove");
//ici je vais ratacher ma variable mousemove
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

// questionHA.addeventListener('evenement', (function) =>
//})
questionHA.addEventListener("click", () => {
  // en dessous j'ai créé un class sur css et je viens l'ajouter
  // avec le mot clée .classlist.add ce qui viens ajouter du style sur ma variable questionHA
  //questionHA.classList.add("bigQuestion");
});

// en dessous j'ai pris les 2 bouttons, et j'y ai injecté une classe que j'ai
// Codé dans CSS qui ce nomme "show-answer".
btnHorde.addEventListener("click", () => {
  Answer.classList.add("show-answer");
  Answer.style.background = "red";
  ring();
});

btnAlliance.addEventListener("click", () => {
  Answer.classList.add("show-answer");
  Answer.style.background = "blue";
});

//la je vais faire un keypress mais le but c'est de mettre un son quand on clique
//un bouton

// const keypressCont = document.querySelector(".keypress");
// const key = document.getElementById("key");

// document.addEventListener("keypress", (e) => {
//   key.textContent = e.key;
// });

const ring = () => {
  const audio = new Audio();
  audio.src = "./../WoWrbg/Song/Donc toi ta vie_1.mp3";
  audio.play();
};

//  la je vais faire la navbar en scroll event
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});
