

async function f1() {
    return 1;

}

async function f2() {
    return Promise.resolve(1);
    
};

console.log(f1());
console.log(f2());

const f3 = async()=>{
    return 3;
}
f1().then(
    function(result){
        console.log(result)
    }
);
f2().then(
    function(result){
        console.log(result)
    }
)

function fetchFruits(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const fruits = ['apple','banana', 'orange'];
            resolve(fruits);
            reject(new Error(`알수없는 에러`));

        },100)
    })
}

// fetchFruits().then(
//     function(f){
//         console.log(f);
//     }
// ).catch(
//     function(err){
//         console.error(err);
//     }
// )

async function printItems() {
    try {
        const fruit = await fetchFruits();
    } catch (error) {
        
    }
    
}
