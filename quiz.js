let userAnswer = document.querySelector('input[name="quiz"]');
let feedBack = document.querySelector('#feedback');
//console.log(feedBack)
//console.log(userAnswer.value)

//feedBack.innerHTML = 'wrong'
function checkAnswer(){
    let correctAnswer = "4";

    if(userAnswer.value==correctAnswer){
        feedBack.innerHTML = "Correct! well done"
        feedBack.style.color = 'green'

    }else{
        feedBack.innerHTML = "That's incorrect. try again! "
        feedBack.style.color = 'red'
    }
}
  
//checkAnswer();

//EVENT LISTENER
let btn = document.getElementById('submit-answer')
//console.log(btn)

btn.addEventListener('click', checkAnswer);