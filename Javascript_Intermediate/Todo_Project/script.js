let tasks =[]

function showDate() {
    const todaydate = new Date()
    let date = document.getElementById('date')
    date.textContent = todaydate.toDateString();
}

function updateTaskCount() {
    let taskcount = document.getElementById('taskcount')
    taskcount.textContent = `Task Count : ${tasks.length}`;
}

function save(event) {
    event.preventDefault()
    let inptxt = document.getElementById("text")
    if(inptxt){
        let task = {
            id:Math.random().toString(30).substring(2,9),
            description: inptxt.value,
            completed : false
        }
        tasks.push(task)
        inptxt.value = ""
        render()
        // updateTaskCount();
    }
    console.log(inptxt.value)
}

function render() {
    let tasklist = document.getElementById('list')
    tasklist.textContent = ""
    tasks.map((task)=>{
        let li = document.createElement('li')
        li.className = "li-task"
        li.id = task.id

        let desc = document.createElement('span')
        desc.textContent = task.description

        if(task.complete) {
            desc.className = "completed"
        }

        let complete = document.createElement('button')
        complete.textContent = "Completed"
        complete.onclick = ()=> toggleCompleteButton(task.id)

        let deletebtn = document.createElement('button');
        deletebtn.textContent = "delete"
        deletebtn.onclick =()=> deleteTask(task.id)

        li.appendChild(desc)
        li.appendChild(complete)
        li.appendChild(deletebtn)
        tasklist.appendChild(li)
        })
    updateTaskCount();
    console.log(tasks)

}

function toggleCompleteButton(taskid) {
    tasks.map((task)=>{
        if(task.id === taskid) {
            task.complete = !task.complete
        }
    })
    render();
}

function deleteTask(taskid) {
    tasks = tasks.filter((task)=> task.id != taskid)
    render()
}
console.log(tasks)
showDate()