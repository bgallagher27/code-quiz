$(document).ready(function() {

    let totalSeconds = 90;


    let questions = [
        "What kind of tag is used to wrap Javascript text within a page's HTML?",
        "Which of the below is NOT an acceptable method for declaring a variable in Javascript?",
        "Which programming language applies styles and formatting to a webpage's content?",
    ];

    let firstChoice = [
        "<java>",
        "let",
        "HTML",
    ];

    let secondChoice = [
        "<link>",
        "const",
        "Javascript",
    ];

    let thirdChoice = [
        "<script>",
        "set",
        "CSS",
    ];

    let fourthChoice = [
        "<br>",
        "var",
        "JQuery",
    ];

    function showQuestionOne() {
        $("#question").text(questions[0]);
        $("#choice1").text(firstChoice[0]);
        $("#choice2").text(secondChoice[0]);
        $("#choice3").text(thirdChoice[0]);
        $("#choice4").text(fourthChoice[0]);

        $("#choice3").on("click" , function() {
            showQuestionTwo();
        });
        $("#choice1").on("click" , function() {
            totalSeconds -= 10;
        });
        $("#choice2").on("click" , function() {
            totalSeconds -= 10;
        });
        $("#choice4").on("click" , function() {
            totalSeconds -= 10;
        });
    };

    function showQuestionTwo() {
        $("#question").text(questions[1]);
        $("#choice1").text(firstChoice[1]);
        $("#choice2").text(secondChoice[1]);
        $("#choice3").text(thirdChoice[1]);
        $("#choice4").text(fourthChoice[1]);

        $("#choice3").on("click" , function() {
            showQuestionThree();
        });
    };

    function showQuestionThree() {
        $("#question").text(questions[2]);
        $("#choice1").text(firstChoice[2]);
        $("#choice2").text(secondChoice[2]);
        $("#choice3").text(thirdChoice[2]);
        $("#choice4").text(fourthChoice[2]);

        $("#choice3").on("click" , function() {
            endQuestions();
        });
    };

    function endQuestions() {
        clearInterval(scoreClock);
        let initials = prompt("Please enter your initials");
        $("#question").text("Congratulations " + initials + ", your score is " + totalSeconds + "!");
        $(".btn-primary").remove();
        localStorage.setItem(initials + totalSeconds);
    };

    let scoreClock = setInterval(function() {
        totalSeconds--;
        $("#timer").text(totalSeconds);
        if (totalSeconds === 0) {
            endQuestions();
        };
    }, 1000);


    showQuestionOne();

});