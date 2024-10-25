const questions = [
    { 
        question: "What is your name?", 
        options: ["Vasanth Kumar", "Arthi", "Rohit", "Vasu"], 
        answer: "Vasanth Kumar" 
    },
    { 
        question: "What is your age?", 
        options: ["39", "43", "41", "42"], 
        answer: "41" 
    },
    { 
        question: "What's your wife's phone number?", 
        options: ["8903519008", "7382736453", "9841148982", "8870026237"], 
        answer: "8903519008" 
    },
    { 
        question: "Do you wear underwear?", 
        options: ["yes", "no"], 
        answer: "no" 
    },
    { 
        question: "Do you love Arthi Vijayan?", 
        options: ["yes", "no"], 
        answer: "yes" 
    },
    { 
        question: "Does Arthi know trigonometry?", 
        options: ["yes", "no"], 
        answer: "no" 
    },
    { 
        question: "When did you marry Arthi?", 
        options: ["April 28, 2010", "April 26, 2010"], 
        answer: "April 26, 2010" 
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const nextBtn = document.getElementById('next-btn');
const resultMsg = document.getElementById('result-msg');
const questionTitle = document.getElementById('question-title');
const scoreTracker = document.getElementById('score-tracker');

// Display the current question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = `Question ${currentQuestionIndex + 1}`;

    questionContainer.innerHTML = ''; // Clear previous question

    const questionText = document.createElement('p');
    questionText.textContent = currentQuestion.question;
    questionContainer.appendChild(questionText);

    currentQuestion.options.forEach(option => {
        const optionLabel = document.createElement('label');
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'answer';
        radioInput.value = option;

        optionLabel.appendChild(radioInput);
        optionLabel.appendChild(document.createTextNode(option));
        questionContainer.appendChild(optionLabel);
    });

    resultMsg.classList.add('hidden');
    nextBtn.classList.add('hidden');
}

// Check if the selected answer is correct
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert('Please select an answer!');
        return;
    }

    const userAnswer = selectedOption.value;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        resultMsg.textContent = 'Correct!';
        resultMsg.style.color = 'green';
        score++; // Increment score for correct answer
    } else {
        resultMsg.textContent = 'Wrong! Try again.';
        resultMsg.style.color = 'red';
    }

    scoreTracker.textContent = `Score: ${score}`;
    resultMsg.classList.remove('hidden');
    nextBtn.classList.remove('hidden'); // Show "Next" button
}

// Move to the next question or final page
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // Directly redirect to the final page
        window.location.href = 'birthday website.html'; // Replace with your final page URL
    }
}

// Event Listeners
questionContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
        checkAnswer();
    }
});

nextBtn.addEventListener('click', nextQuestion);

// Initialize the quiz
displayQuestion();
