

let i = 1;
let sum = 0;
let sum2 = 0;

while(i<20){

    if(i%2!=0){
        sum = sum + i;
    }
    // console.log(i);
    i++;
    console.log(`${sum}+${i}`);

    // console.log(i);
}
console.log(sum);


for(let j=1; j<20 ;j++){
    if(j%2 ==1){
        sum2 += j;
    }

}
console.log(sum2);


console.log(`----------------------------`);

let a = 10;

while(a > 0){
    console.log(a);
    a--;
}

console.log(`----------------------------`);

for(let b = 10 ; b >0 ; b--){
    console.log(b);
}


let num = 0;
let sum3 = 0;
while(num <= 100){
    if(num%5==0 || num%2==0){
        // console.log(num);
        sum3 += num;
        // console.log(num);
        // console.log(sum);
    }
    num++;
}
console.log(sum3);

// let num2 = 0;
// let sum4 = 0;
// do{
//     if(num2%5==0 || num2%2==0){
//         // console.log(num);
//         sum4 += num2;
//         // console.log(num);
//         // console.log(sum);
//     }
// }
// while(num2<=100);

// console.log(sum4);

// let star = "*";

// let staremty = [" "];
const h = parseInt(prompt(`별 높이 입력`),10);

// prompt(`별갯수 입력` , starcount);


for(k=1 ; k<=h ; k++){
    let line =``;
    for(let e = 1 ; e <= h -k ; e++){
        line = line + ` `;

    }

    for(let star = 1 ; star <= k ; star++){
        line = line +'*';
    }
    console.log(line);
}