function updateTime(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let date = document.querySelector('#date');
    let Todaydate = new Date();

    date.textContent = `${weekday[Todaydate.getDay()]}  ${Todaydate.getDate()}/${Todaydate.getMonth()}/${Todaydate.getFullYear()}`
    
}
setInterval(updateTime,1000)
updateTime()

let taskcount =0;
function save(event) {
    event.preventDefault();
    let inptxt = document.getElementById('inputtext');
    if(inptxt.value === ""){
        alert("enter the to-do ")
    }else{
        let litodo = document.createElement("tr")
        let tbody = document.getElementById("tablebody")
        litodo.textContent = inptxt.value;
        tbody.append(litodo)
        inptxt.value=""
        taskcount++
        let tcount = document.getElementById('taskcount')
        tcount.textContent = `Task Count : ${taskcount}`
    }
}

