document.addEventListener('DOMContentLoaded', function () {
  var questions = document.querySelectorAll('article');
  
  questions.forEach(function (question) {
    var answer = question.querySelector('section');
    answer.classList.add('hide');
    
    question.addEventListener('click', function () {
      if (answer.classList.contains('hide')) {
        answer.classList.remove('hide');
      } else {
        answer.classList.add('hide');
      }
    });
  });
});