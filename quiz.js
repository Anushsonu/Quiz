var quizdata=[

    {
        question: 'Which is a framework of JS',
        a: '.net',
        b: 'flask',
        c: 'react',
        d: 'django',
        correct: 'c'
    },

    {
        question: 'Which is not a programming language',
        a: 'html',
        b: 'python',
        c: 'java',
        d: 'js',
        correct: 'a'
    },

    {
        question: 'Which is not a framework',
        a: 'react',
        b: 'js',
        c: 'angular',
        d: 'django',
        correct: 'a'
    },

    {
        question: 'Full form of CSS',
        a: 'Cascading Style State',
        b: 'Cascading Style Sheet',
        c: 'Cascading Style of Sheet',
        d: 'none',
        correct: 'b'
    }
]

var quiz= document.getElementById('quiz')
var answer= document.querySelectorAll('.answer')
var question= document.getElementById('question')
var option_a= document.getElementById('b_value')
var option_b= document.getElementById('a_value')
var option_c= document.getElementById('c_value')
var option_d= document.getElementById('d_value')
var button= document.getElementById('submit')
var cq=0;
var score=0;

loadquiz()


function loadquiz(){
    deselect()
    console.log(quizdata[0],cq)
    question.innerText=quizdata[cq].question
    option_a.innerText=quizdata[cq].a
    option_b.innerText=quizdata[cq].b
    option_c.innerText=quizdata[cq].c
    option_d.innerText=quizdata[cq].d
}

button.addEventListener('click', ()=>{
    var selectedoption
    answer.forEach(answer=>{
        if(answer.checked){
            selectedoption=answer.id
        }
    })
    if(selectedoption==quizdata[cq].correct){
        score=score+1
    }
    cq=cq+1
    if(cq==quizdata.length){
        document.getElementById('quizdiv').innerHTML=`<h1> Your score: ${score}/${quizdata.length} </h1>`
    }
    else{
        loadquiz()
    }
})





function deselect(){
    answer.forEach(answer=>answer.checked=false)
}