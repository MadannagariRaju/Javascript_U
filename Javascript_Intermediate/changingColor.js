console.log("hello world")
let btn = document.getElementById('subbtn');
let text = document.querySelectorAll('.text')
console.log(text)

btn.addEventListener('click',()=>{
    text.forEach((ele,i)=>{
        if(ele.textContent === 'Hello') {
            ele.style.color = "Blue"
        }else{
            ele.style.color = "red"
        }
    })
})

const updateTime =()=>{
    let todaydate = document.querySelector('#date')
    let date = new Date()
    todaydate.textContent = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}   ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
setInterval(updateTime,1000)
updateTime();