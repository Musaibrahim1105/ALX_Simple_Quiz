
let feedBack = document.querySelector('#feedback');
let submit = document.querySelector('#submit-answer')
//console.log(feedBack)
//console.log(userAnswer.value)

//feedBack.innerHTML = 'wrong'
function checkAnswer(){
    let correctAnswer = "4";
    let userAnswer = document.querySelector('input[name="quiz"]:checked');
    userAnswer = userAnswer.value;

    if(userAnswer==correctAnswer){
        
        feedBack.textContent = "Correct! well done"
        feedBack.style.color = 'green'

    }else {
        feedBack.textContent = "That's incorrect. try again! "
        feedBack.style.color = 'red'
    }
    // else{
    //     feedBack.textContent = "please swlwct an answer before submitting"
    // }
}
  
//checkAnswer();

//EVENT LISTENER
//let btn = document.getElementById('submit-answer')
//console.log(btn)

submit.addEventListener('click', checkAnswer);