"use strict";

$(function(){

    let board = $("#canvas")[0];
    let context = board.getContext('2d');

    let snake = [
        { x:50, y:100, lastX: 0, lastY: 0},
        { x:50, y:90, lastX: 0, lastY: 0},
        { x:50, y:80, lastX: 0, lastY: 0}
    ];

    let snakeWidth = 10;
    let snakeHeight = 10;
    let snakeSize = 10;

    const left = 37;
    const right = 39;
    const down = 40;
    const up = 38;

    let keyPressed = down;

    setInterval(gameLoop, 1000);

    function gameLoop(){
        clearBoard();
        moveSnake();
        drawSnake();
    }

    function clearBoard(){
        context.clearRect(0, 0, board.width, board.height);
    }

    function moveSnake(){
        $.each(snake, function(index, value){
            snake[index].lastX = value.x;
            snake[index].lastY = value.y;
            if(index == 0){
                if(keyPressed == down){
                    snake[index].y = value.y + snakeSize;
                }
                else if (keyPressed == up){
                    snake[index].y = value.y - snakeSize;
                }
                else if (keyPressed == right){
                    snake[index].x = value.x + snakeSize;
                }
                else if (keyPressed == left){
                    snake[index].x = value.x - snakeSize;
                }
            }
            else{
                snake[index].x = snake[index - 1].lastX;
                snake[index].y = snake[index - 1].lastY;
            }
        })
    }

    function drawSnake(){
        $.each(snake, function(index, value){
            context.fillStyle = 'blue';
            context.fillRect(value.x, value.y, snakeWidth, snakeHeight)
            context.strokeStyle = 'lime';
            context.strokeRect(value.x, value.y, snakeWidth, snakeHeight)
        })
    }

    $(document).keydown(function(event){
        keyPressed = event.which;
    });

})