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

  let quizData = [
    {
        "category": "General Knowledge",
        "questions": [
            {
                "question": "Who wrote 'To Kill a Mockingbird'?",
                "options": ["Harper Lee", "George Orwell", "Jane Austen", "F. Scott Fitzgerald"],
                "answer": "Harper Lee"
            },
            {
              "question": "Who painted the Mona Lisa?",
              "options": ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
              "answer": "Leonardo da Vinci"
            },
            {
              "question": "In which year did the Titanic sink?",
              "options": ["1912", "1920", "1905", "1931"],
              "answer": "1912"
            },
        ]
      },
      {
        "category": "Science",
        "questions": [
          {
            "question": "Who discovered penicillin?",
            "options": ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Joseph Lister"],
            "answer": "Alexander Fleming"
          },
          {
            "question": "What is the chemical symbol for gold?",
            "options": ["Au", "Ag", "Fe", "Cu"],
            "answer": "Au"
          },
          {
            "question": "Who is known as the father of modern physics?",
            "options": ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Galileo Galilei"],
            "answer": "Albert Einstein"
          },
        ]
      },
      {
        "category": "Mathematics",
        "questions": [
          {
            "question": "What is the value of pi (π)?",
            "options": ["3.14", "2.71", "1.618", "4.20"],
            "answer": "3.14"
          },
          {
            "question": "What is the Pythagorean theorem?",
            "options": [
              "a² + b² = c²",
              "E = mc²",
              "F = ma",
              "sin²θ + cos²θ = 1"
            ],
            "answer": "a² + b² = c²"
          },
          {
            "question": "Who is known for the development of calculus?",
            "options": ["Isaac Newton", "Leonhard Euler", "Euclid", "Pythagoras"],
            "answer": "Isaac Newton"
          }, 
        ]
    },
    
  ];

  let currentQuestionIndex = 0;
let userScore = 0;

function showQuestion() {
  const questionContainer = document.getElementById('app');
  questionContainer.innerHTML = ''; // Clear previous content

  const questionData = quizData[currentQuestionIndex];
  const question = questionData.questions[currentQuestionIndex];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = `
    <h2 style="background: yellow;color: white;">${question.question}</h2>
    <div class="options">
      ${question.options.map((option, index) => `
        <div class="option" onclick="selectOption(${index})">${String.fromCharCode(97 + index)}. ${option}</div>
      `).join('')}
    </div>
  `;

  questionContainer.appendChild(questionElement);
}

function selectOption(optionIndex) {
  const questionData = quizData[currentQuestionIndex];
  const question = questionData.questions[currentQuestionIndex];

  // Store user's answer in localStorage
  localStorage.setItem(`question${currentQuestionIndex + 1}`, question.options[optionIndex]);

  // Check if the answer is correct and update the score
  if (question.options[optionIndex] === question.answer) {
    userScore++;
  }

  // Move to the next question or end the quiz
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  const questionContainer = document.getElementById('app');
  questionContainer.innerHTML = `
     `;

  // Optionally, you can clear localStorage here if needed
  // localStorage.clear();
}

// Start the quiz by showing the first question
showQuestion();