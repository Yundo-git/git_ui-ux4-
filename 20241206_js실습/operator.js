const value1 = document.querySelector('#value1');
const value2 = document.querySelector('#value2');
const ope = document.querySelector('#operator');

const result = document.querySelector('#result');
// const btn1 = document.querySelector('button');




function cal(){
        const val1 = parseInt(value1.value);
        const val2 = parseInt(value2.value);
        console.log(val1);
        console.log(val2);

  

        console.log(ope.value);

        let resultval = 0;

        if(ope.value == '+'){
           resultval =  val1 + val2 ;
           console.log('resultval >>', resultval);
            
        }else if (ope.value == '-'){
            resultval = val1 - val2;
            console.log('resultval >>', resultval);

        }else if(ope.value == '*'){
            resultval = val1 * val2;
            console.log('resultval >>', resultval);

        }else{
            resultval = val1 / val2;
            console.log('resultval >>', resultval);

        }

        result.value = resultval;

};


function resetInput(){
    value2.value = '';
    value1.value = '';

    ope.value = '';
    result.value = '';
}
    
//     console.log(value1.value)

// )

