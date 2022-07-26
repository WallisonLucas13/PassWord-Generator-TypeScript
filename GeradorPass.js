var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// ==> Função que escolherá de forma aleatoria os indices da senha
var gerarNumberAleatorio = function (min, max) {
    return Math.floor(Math.random() * max + min);
};
// ==> String com os caracteres inseridos na senha
var alfabet = 'qwertyuiopasdfghjklçzxcvbnm!@#$%&1234567890';
// ==> Lista que recebe cada letra
var chars = [];
// ==> Iteração que quebra a string e coloca cada caracter na lista citada anteriormente
for (var i = 0; i >= 0; i++) {
    if (alfabet.substring(i, i + 1) == "") {
        break;
    }
    chars = __spreadArrays(chars, [alfabet.substring(i, i + 1)]);
}
// ==> Função que de forma aleatoria decide se o caracter será M ou m
var retornarCharUpperCase = function (char) {
    var byte = gerarNumberAleatorio(0, 3);
    if (typeof char != 'number') {
        if (byte == 1) {
            return char.toUpperCase();
        }
    }
    return char;
};
// ==> Variavel que guarda o tamanho da senha;
var range = 24;
// ==> Metodo que randomiza a senha com base na lista de Chars
var passGenerator = function (list, range) {
    var indice = 0;
    var passwordListChars = [];
    var char = '';
    for (var i = 0; i < range; i++) {
        indice = gerarNumberAleatorio(0, list.length);
        char = retornarCharUpperCase(list[indice]);
        passwordListChars = __spreadArrays(passwordListChars, [char]);
    }
    var password = '';
    for (var w = 0; w < passwordListChars.length; w++) {
        password = password + passwordListChars[w];
    }
    return password;
};
console.log("\n");
console.log("==> Gerando senha de " + range + " caracteres...");
console.log("\n");
console.log("Senha ==> " + passGenerator(chars, range));
console.log("\n");
