
//funciones
function isAngrama(word_one, word_two) {
    if (word_one == word_two) {return false}

    if (word_one.split("").sort().join("") === word_two.split("").sort().join("")) {
        return true
    }else{
       return false
    }
}
let word_one = prompt("Ingrese la primera palabra")
let word_two = prompt("Ingrese la segunda palabra")

console.log(isAngrama(word_one, word_two))


