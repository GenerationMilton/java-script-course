//Methods that iterate over an array.
//Methods that DO NOT modify the original array(Immutability).

//Filter()
/*
Crea un nuevo array con elementos que cumplen una condicion dada por una funcion
*/
const numbers =[1,2,3,4,5,6,7,8,9,10];
const evenNumbers=numbers.filter(number => number % 2 ===0);
console.log('**filter example**');
console.log(numbers);
console.log(evenNumbers);


//Reduce() * case 1
/*
Ejecuta una funcion reductora sobre cada elementos de un array, devolviendo como resultado un unico valor.
*/

const numberReduce=[1,2,3,4,5];
const sum = numberReduce.reduce((accumulator, currentValue)=> accumulator + currentValue,0);
console.log('**Reduce example 1**');
console.log(numberReduce);
console.log(sum);

//Reduce() * case 2

const words=['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye'];
const wordFrecuency= words.reduce((accumulator, currentValue)=>{
    if(accumulator[currentValue]){
        accumulator[currentValue]++
    }else{
        accumulator[currentValue]=1;
    }
    return accumulator;
    //objeto vacio como valor inicial
},{});
console.log('**Reduce example 2**');
console.log(wordFrecuency);



//Excercise filter and reduce
//Passing Grade Average
/*
Create a program that takes an array of grades as input
and calculates the average only for passing grades(greater than or equal to 70);
*/
const grades =[85, 92, 60, 78, 95, 66, 88, 50, 94];

const passingGrades= grades.filter(grade => grade >=70);

const averagePassingGrade=passingGrades.reduce((sum, grade)=> sum+grade,0)/passingGrades.length;

console.log('**Excersise**');
console.log('Original Grades: ', grades);
console.log('Passing Grades: ', passingGrades);
console.log('Average Passing Grade: ', averagePassingGrade);
