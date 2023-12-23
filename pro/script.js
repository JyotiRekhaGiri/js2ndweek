

let currentCategoryIndex = 0;
let currentQuestionIndex = 0;
let userScore = 0;

function startQuiz() {
  showQuestion();
}

document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.querySelector('.btn-warning');
  startButton.addEventListener('click', startSolving);
});

function startSolving(){
  window.location.href="./topic.html";
}
function toggleButton(button) {
  button.classList.toggle('selected');
}

function startQuiz() {
  window.location.href="./questions.html";
}

function closeWindow() {
  window.location.href="./index.html";
}



