const bodycolor = document.querySelector('body');
const button = document.querySelector('button');
const h2 = document.querySelector('h2');


button.addEventListener('click',function(){
    console.log('클릭됨');
   let r =  Math.floor(Math.random()*255);
   console.log(r);
   let g =  Math.floor(Math.random()*255);
   console.log(g);
   let b =  Math.floor(Math.random()*255);
   console.log(b);
    const rgb = `rgb(${r},${g},${b})`
    console.log(rgb);
    bodycolor.style.backgroundColor = `rgb(${r},${g},${b}`;
    console.log(h2);
    h2.innerHTML = `${rgb}`;
    

   
})