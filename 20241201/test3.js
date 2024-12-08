

let value = prompt(`10000까지의 숫자를 입력해주세요`);
// 사용자 입력값

// let value2=[``];

let sum =0;
for(i=0 ; i <=value ; i++){

    // console.log(i);

    if(i % 2 ===1 && i % 13===0){
        console.log(i);
    
        sum=sum+i
    }

}

console.log(`====================== `)

console.log(sum);

