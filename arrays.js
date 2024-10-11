// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    const cliente = pedido.shift();
    pedido.unshift("bebida");
    pedido.push(cliente);
    return pedido;
     
  }
  
  // 2. Iteración de Arrays en Javascript
  // 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
  // Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
  function sumarPares(numeros) {
      let suma = 0
      for (let numero of numeros)  {
      if (numero % 2 === 0) {
      suma += numero;
  }

}
return suma 
}
  
  // 3. Buscar en Arrays
  // 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
  function palabrasTerminanConA(palabras) {
    for (let i of palabras) {
      if (i.charAt(i.length - 1) !== 'a') {
        return false
      }
}
return true
}

const palabras  = ["casa", "pera", "torta"];
console.log(palabrasTerminanConA(palabras)); // true

  
  // 4. Transformar Arrays
  // 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
  // Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
  function buscaPalabras(words, word) {
    let  index = words.indexOf(word);
    if (index === -1) {
      return words;
      }

    for  (let i = index + 1; i < words.length; i++) {
      lista.push(words[i]);
      }
      return lista;
  }
  
  // 5. Matrices
  // 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
  // Si no la encuentra, devuelve [-1, -1].
  function findJavaScript(matrix) {
    let indice = [-1, -1];
    for (let il of matrix) {
        for (let i2 of il) {
            if (i2 === "JavaScript") {
                let lugar = matrix.indexOf(il); 
                let lugar2 = il.indexOf(i2); 
                indice = [lugar, lugar2];
                break; 
            }
        }
        if (indice[0] !== -1) break; 
    }
    return indice;
}

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
];

const position = findJavaScript(matrix);
console.log(position); // -> [0, 2]

  
  // 6. Algoritmos con Arrays
  // 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
  // La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
  function findMinMaxPages(books) {
    let minIndex = 0;
    let maxIndex = 0;
    for (let i = 1; i < books.length; i++) {
        if (books[i] < books[minIndex]) {
            minIndex = i;
        }
        if (books[i] > books[maxIndex]) {
            maxIndex = i;
        }
    }
    return [minIndex, maxIndex]; 
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]

  
  // Exportar las funciones para que puedan ser completadas y probadas
  module.exports = {
      procesarPedido,
      sumarPares,
      palabrasTerminanConA,
      buscaPalabras,
      findJavaScript,
      findMinMaxPages,
  };


  