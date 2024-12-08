

const todo = document.querySelectorAll('.todo');
const done = document.querySelectorAll('.done');

console.log(todo);
for(let li of todo){
    li.classList.remove("todo");
    li.classList.add("done");

}
for(let li of done){
    li.classList.remove("done");
    li.classList.add("todo");

}