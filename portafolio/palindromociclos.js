//palabra
//funcion para descubrir si una palbra es palindrmo con el atributo word
function palindromo(word) {
//se crea la variable parainvertir  la palabra    
let inv = "";
//se recorre la plabra invirtiendo sus atributos atrave de un for
for (let i = word.length -1; i >=0; i--){
   // se concateo la palabrainvertida anteriormente usando el for osea se  guardo en el inv la palabra invertida
    inv += word[i];
}
//se compara la palabra original con la invertida 
//si las 2 palabras son dierentes no son palidromas
   if ( word != inv) {
     console.log("no es palindromo");
     //si son iguales son palidromas
} else {
    console.log("es palindromo");
    
}

//se llama l funcion palindroma con una palabra escogia o el usuario
}
palindromo("rio");
