$(document).ready(function() {

    function showHighScores () {
        let scoreName = localStorage.getItem("name");
        let scoreTime = localStorage.getItem("time");
        $(".name-display").append(scoreName);
        $(".time-display").append(scoreTime);
    };

    showHighScores();

});