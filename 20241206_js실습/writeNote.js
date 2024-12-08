

const writer = document.querySelector('#writer');
const content = document.querySelector('#content');
const table = document.querySelector('#table');
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();
let time = now.getHours();
let min = now.getMinutes();

const nowtime = (`${year} - ${month+1} - ${day} - ${time}:${min}`);

function writeNote(){
    if(writer.value == ''){
        alert('작성자!')
    }else if (content.value == ''){
        alert('내용!')
    }else{

        const newtr = document.createElement('tr');
        const writertd = document.createElement('td');
        writertd.textContent = writer.value;
    
        const contenttd = document.createElement('td');
        contenttd.textContent = content.value;
    
        const nowtd = document.createElement('td');
        nowtd.innerHTML = nowtime;
    
        // 요소 생성 <p></p>
    
        table.append(newtr);
        newtr.prepend(writertd);
    
        writertd.after(contenttd);
        contenttd.after(nowtd);
    
        
        console.log(table);
    
        writer.value = '';
        content.value = '';
    
    

    }



}