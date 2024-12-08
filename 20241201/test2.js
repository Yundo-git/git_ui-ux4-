
let mathScore = prompt('수학점수 입력');

let engScore = prompt('영어점수 입력');

// let testnumber = 1;

// console.log(String(testnumber) , typeof testnumber);
// console.log(Number(testnumber) , typeof testnumber);


// console.log(Number.mathScore, typeof mathScore);

// let a = (parseInt(mathScore)+parseInt(engScore))/2;


// console.log(typeof a);

// // console.log("수학과 영어의 평균 점수는 ");
// console.log(`수학과 영어의 평균점수는 ${a} 입니다.`);


let avg = (Number(mathScore)+Number(engScore))/2;

console.log(mathScore, typeof mathScore);
console.log(avg , typeof avg);

console.log(`평균 점수는 ${avg}입니다.`);