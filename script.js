console.log("Script berjalan");

const basket = document.getElementById("basket");
const ball = document.getElementById("ball");
const scoreText = document.getElementById("score");
const lifeText = document.getElementById("life");
const gameOver = document.getElementById("gameOver");
const finalScore = document.getElementById("finalScore");

let basketX = 200;
let ballX = Math.random() * 470;
let ballY = 0;

let score = 0;
let life = 3;

// Gerakkan keranjang
document.addEventListener("keydown", function(e){

    if(e.key === "ArrowLeft"){
        basketX -= 20;
    }

    if(e.key === "ArrowRight"){
        basketX += 20;
    }

    if(basketX < 0) basketX = 0;
    if(basketX > 400) basketX = 400;

    basket.style.left = basketX + "px";

});

function resetBall(){

    ballY = 0;
    ballX = Math.random() * 470;

}

const game = setInterval(loop,20);

function loop(){

    ballY += 5;

    ball.style.top = ballY + "px";
    ball.style.left = ballX + "px";

    // Tangkap bola
    if(
        ballY >= 550 &&
        ballX + 30 > basketX &&
        ballX < basketX + 100
    ){

        score++;
        scoreText.innerHTML = "Score : " + score;

        resetBall();

    }

    // Bola jatuh
    if(ballY > 600){

        life--;

        if(life == 3)
            lifeText.innerHTML="❤️❤️❤️";
        else if(life == 2)
            lifeText.innerHTML="❤️❤️";
        else if(life == 1)
            lifeText.innerHTML="❤️";
        else
            lifeText.innerHTML="";

        if(life <= 0){

            clearInterval(game);

            gameOver.style.display="flex";

            finalScore.innerHTML="Skor Akhir : "+score;

        }else{

            resetBall();

        }

    }

}