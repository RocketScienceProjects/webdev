var p1Button = document.getElementById("p1Button");
var p1Score = 0;
var p1Span = document.getElementById("p1ScoreSpan");

var p2Button = document.getElementById("p2Button");
var p2Score = 0;
var p2Span = document.getElementById("p2ScoreSpan");

var winningScore = document.querySelector("#targetScore").textContent
var gameOver = false;

//for the reset button
var resetButton = document.getElementById("ResetButton");

// p1Button.addEventListener("click", function(){
//     // console.log(gameOver)
//     if(!gameOver) {
//         p1Score++;
//         if(p1Score == winningScore) {
//             p1Span.classList.add('winner');
//             gameOver = true;
//         }
//         p1Span.textContent = p1Score;
//     }
    
// })


// p2Button.addEventListener("click", function () {
//     console.log(gameOver)
//     if (!gameOver) {
//         p2Score++;
//         if(p2Score == winningScore){
//             p2Span.classList.add('winner');
//             gameOver = true;
//         }}
//         p2Span.textContent = p2Score;
// })

// callback function to keep things DRY
var callBackfunct = function (playerScore, playerSpan) {
    if (!gameOver) {
        // playerScore++;
        score = playerSpan.textContent
        score++;
        if (score == winningScore) {
            playerSpan.classList.add('winner');
            gameOver = true;
        }
    playerSpan.textContent = score;
    }
    
}

//p1Button.addEventListener("click", callBackfunct.bind(null, p1Score, p1Span));
p1Button.addEventListener("click", () => callBackfunct(p1Score, p1Span));

p2Button.addEventListener("click", () => callBackfunct(p2Score, p2Span));


resetButton.addEventListener("click", function(){
    p1ScoreSpan.textContent = 0;
    p1Span.classList.remove('winner');
    p2ScoreSpan.textContent = 0;
    p2Span.classList.remove('winner');
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
})


