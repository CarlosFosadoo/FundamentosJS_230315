//Para saber el tipo de dato que tiene una variable o constante podemos utilizar la función typeOF()

console.log("misApellidos es del tipo", typeof(misApellidos));
console.log("miUniversidad es del tipo", typeof(miUniversidad));
console.log("miMatricula es del tipo", typeof(miMatricula));
console.log("miEdad es del tipo", typeof(miEdad));

// c) LET
let miFechaNacimiento="1992-09-16";
let miColorFavorito;

console.warn("--- Declaración de Variable Locales usando: LEFT")
console.log("Genial, te voy conociendo mejor, ahora sé que tu naciste el:", miFechaNacimiento," y tu colorFavorito es: mmmmmmmmmm dejame pensar .....")
miColorFavorito="Naranja";
console.log("Creo que es ${miColorFavorito}, le atine?") // La manera de mezclar texto fijos con el valor actual de las variables se le conoce como: interpletación y deben iniciar y finalizar en un backtic - tilde inversa
console.log("Analizando los datos puedo deducir que:");
console.log("miColorFavorito es del tipo:", typeof(miColorFavorito))
console.log("miFechaNacimiento es del tipo:", typeof(miFechaNacimiento))