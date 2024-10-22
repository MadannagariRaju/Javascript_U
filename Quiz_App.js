let questions = [
    {
        question:"which programming language is used for web development ?",
        options: ['1.java','2.python','3.javascript','4.C++'],
        answer:3
    },
    {
        question:"which is 50+92 ?",
        options: ['1.142','2.172','3.122','4.110'],
        answer:1
    },
    {
        question:"which is the capital of India ?",
        options: ['1.New Delhi','2.Gujarat','3.Hyderabad','4.Mumbai'],
        answer:1
    }
]

const userInput=()=>{
    const inp = parseInt(prompt("enter you option"))
    if(inp == null || inp == '' || isNaN(inp)) {
        return undefined
    }
    return inp;
}

const askQuestion =(questions)=>{
    console.log(questions.question);
    for(let i=0;i<questions.options.length;i++){
        console.log(questions.options[i]);
    }
   
    let  uinp =userInput();
    console.log(uinp)
    return uinp;
}
let score =0
const checkans = (questions,useroption) => {
    // console.log("useroption  ",useroption)
    // console.log("questions.answer   ",questions.answer)
    if(useroption === questions.answer) {
        score++
    }else{
        console.log("wrong answer")
        score--
    }
}

const passquestion =()=>{
    for(let i=0;i<questions.length;i++){
        let useroption = askQuestion(questions[i]);
        // console.log(useroption)
        checkans(questions[i],useroption)

    }
    console.log(score)
}

passquestion();