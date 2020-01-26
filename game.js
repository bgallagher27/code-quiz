

    let question = $("#question");
    let choices = Array.from($(".choice-text"));
    let currentQuestion = {};
    let acceptingAnswers = true;
    let questionCounter = 0;
    let availableQuestions = [];

    let questions = [
        {
            question: "What kind of tag is used to wrap Javascript code within a page's HTML?",
            choice1: "<java>",
            choice2: "<link>",
            choice3: "<script>",
            choice4: "<br>",
            answer: 3,
        },
        {
            question: "Which of the below is NOT an acceptable method for declaring a variable in Javascript?",
            choice1: "let",
            choice2: "set",
            choice3: "const",
            choice4: "var",
            answer: 2,
        },
        {
            question: "Which programming language applies styles and formatting to a webpage's content?",
            choice1: "HTML",
            choice2: "Javascript",
            choice3: "JQuery",
            choice4: "CSS",
            answer: 4,
        },
    ]

    let maxQuestions = 3;

    function startGame() {
        questionCounter = 0;
        availableQuestions = [...questions];
        getNewQuestion();
    };

    function getNewQuestion() {

    };


    startGame();
