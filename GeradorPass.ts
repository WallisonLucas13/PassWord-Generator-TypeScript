
// ==> Função que escolherá de forma aleatoria os indices da senha
const gerarNumberAleatorio = (min: number, max: number):number =>{
    return Math.floor(Math.random() * max + min)
}

// ==> String com os caracteres inseridos na senha
let alfabet: string= 'qwertyuiopasdfghjklçzxcvbnm!@#$%&1234567890'

// ==> Lista que recebe cada letra
let chars: Array<string> = [];

// ==> Iteração que quebra a string e coloca cada caracter na lista citada anteriormente
for(let i: number=0; i>=0; i++){

    if(alfabet.substring(i, i+1) == ""){
        break;
    }
    
    chars = [...chars, alfabet.substring(i, i+1)];
}

// ==> Função que de forma aleatoria decide se o caracter será M ou m
const retornarCharUpperCase = (char: string): string =>{
    let byte: number = gerarNumberAleatorio(0, 3);
    
    if(typeof char != 'number'){
        if(byte == 1){
            return char.toUpperCase();
        }
    }

    return char; 
}

// ==> Variavel que guarda o tamanho da senha;
let range: number=24;

// ==> Metodo que randomiza a senha com base na lista de Chars
const passGenerator = (list: Array<string>, range: number): string => {

    let indice: number = 0;

    let passwordListChars: string[] = [];

    let char: string = '';

    for(let i: number=0; i<range; i++){

        indice = gerarNumberAleatorio(0, list.length);
        char = retornarCharUpperCase(list[indice]);
        passwordListChars = [...passwordListChars, char];
        
    }

    let password: string = '';

    for(let w: number=0; w<passwordListChars.length; w++){
        password = password + passwordListChars[w];
    }
    return password;
}

console.log("\n");
console.log(`==> Gerando senha de ${range} caracteres...`);
console.log("\n");
console.log(`Senha ==> ${passGenerator(chars, range)}`);
console.log("\n");
