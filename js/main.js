// Benutzte Elemente in Variablen laden:
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');


// prüft ob die Klasse border schon da ist > Console: false/true
console.log(hamburger.classList.contains('open'));

// fügt box weitere Klassen hinzu
//box.classList.add('border');
//box.classList.add('bigger');

// Gibt ein Array sämtlicher Klassen von box aus
//console.log(box.classList);

// Klasse entfernen
//box.classList.remove('bigger');

// Klasse toggeln
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mainNav.classList.toggle('open');
})