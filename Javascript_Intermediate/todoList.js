console.log("hello world")
const save =(event)=>{
    event.preventDefault();
    const todoAction = document.querySelector('#todotext')
    console.log(todoAction.value)
    if(todoAction.value === "") {
        alert("enter the todo action")
    }else{
        let todolist = document.createElement('li');
        let ullist = document.getElementById('list')
        todolist.innerHTML= todoAction.value;   // innerHTML or textContent you can use for changing content of the element
        ullist.appendChild(todolist)
    }
    todoAction.value = ""
}