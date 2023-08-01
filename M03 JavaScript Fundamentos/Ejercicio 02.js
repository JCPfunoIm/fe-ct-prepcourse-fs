/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   return x + y;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return x - y;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   if (y === 0) {
      // Si y es igual a 0, la división no es válida.
      throw new Error("No se puede dividir por cero.");
    }
    return x / y; // Divide x entre y y devuelve el resultado.
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return x * y;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   if (y === 0) {
      // Si y es igual a 0, la división no es válida.
      throw new Error("No se puede dividir por cero.");
    }
    return x % y; // Divide x entre y y devuelve el resto.
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
