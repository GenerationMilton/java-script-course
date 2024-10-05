// 1. Tipo entero y decimal

const entero = 42;
const decimal=3.14;

console.log(typeof entero, typeof decimal);

//2. Notacion cientifica
const cientifico = 5e3;
console.log(cientifico);

//3. Infinitos y NaN
const infinito = Infinity;
const noEsUnNumero= NaN;

console.log(infinito);
console.log(noEsUnNumero);

//Operaciones aritmetica
// 1. Suma, Resta, Multiplicacion, Division
const suma= 3+4;
const resta=4-4;
const multiplicacion=4*4;
const division= 16 / 2;

// 2. Modulo y Expo
const modulo = 15 % 8;
const exponenciacion = 2**3;

// Precision

const resultadoSuma = 0.1 +0.2;
console.log(resultadoSuma);
console.log(resultadoSuma.toFixed(1));
console.log(resultadoSuma === 0.3);

//Operaciones Avanzadas
const raizCuadrada= Math.sqrt(16);
const valorAbsoluto= Math.abs(-7);
const numeroAleatorio= Math.random();

console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(numeroAleatorio);