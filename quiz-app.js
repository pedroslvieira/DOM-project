
const message = document.querySelector('.message');
let correctAnswers = 0;

correctOptions = document.querySelectorAll('.correct');

questionCards = document.querySelectorAll('.question');

console.log(correctOptions);

document.getElementById('quiz-form').addEventListener('submit', function(e){
  
  // Hide questions
  document.getElementById('quiz-form').style.display = 'none';

  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 500)

  e.preventDefault();

});

  // Calculating results

  function calculateResults(){
  var i;
  for(var i=0; i < correctOptions.length; i++){

  // Check if answers
    if(correctOptions[i].checked){
    
    correctAnswers +=1;
    
    questionCards[i].style.borderColor = 'green';

            
        
  } else{

    questionCards[i].style.borderColor = 'red';
    
  }
  }
  
  // Show questions
  document.getElementById('quiz-form').style.display = 'block';

  // Hide loader
  document.getElementById('loading').style.display = 'none';

  
  if(correctAnswers === 2 ){

    quizOver('green', `Muito bom! Você acertou ${correctAnswers} de 2 questões`)

  } else if(correctAnswers === 1 ){

    quizOver('black', `Razoável. Você acertou ${correctAnswers} de 2 questões`)

  } else {

    quizOver('red', `PQP! Jumento, acertou ${correctAnswers} de 2 questões`)

  }



}



// Function quizOver

function quizOver (color, msg){
  
  // Change color
  message.style.color = color;
  // Set message
  message.textContent = msg;
}


