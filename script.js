// DESCRIZIONE:
// Chiedi all’utente il suo nome,

var nome = prompt ("Come ti chiami?")

// poi chiedi il suo cognome,
var cognome = prompt ("Quale è il tuo cognome?")

// poi chiedi il suo colore preferito.

var colore = prompt ("Quale è il tuo colore preferito?")
// Infine scrivi sulla pagina nomecognomecolorepreferito19

document.getElementById("codice").innerHTML = nome+cognome+colore+"19"
