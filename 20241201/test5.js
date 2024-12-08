
let test = [''];
let sum = 0;
let sum2 = 0;
let sum3 = 0;

for(i = 1 ; test.length < 100;){

    for(j=0 ; test.length<100 ; j++){
    test[j]=i;
    i++
    }

;}



console.log(test);




for(k=0 ; k < test.length ; k++){
    sum = sum + parseInt(test[k]);
}

console.log(sum);


for(let a of test){

    // console.log(sum2);
    sum2 = sum2 + a;

}
console.log(sum2);

test.forEach(function(num , i){

    sum3 = sum3 +num;

});
console.log(sum3);



let fruits1 = [`사과`,`딸기`,`파인애플`,`수박`,`참외`,`오렌지`,`자두`,`망고`];
let fruits2 = [`사과`,`파인애플`,`수박`,`참외`,`오렌지`,`망고`];


let same = fruits1.filter((fr) => fruits2.includes(fr));
let diff = fruits1.filter((tr) => !fruits2.includes(tr));
console.log(same);
console.log(diff);
