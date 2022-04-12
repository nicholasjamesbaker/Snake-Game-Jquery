"use strict";

$(function($){
    $.fn.snakeGame = function(options){
        var settings = $.extend({
            board_color: "#000000",
            snake_fill: "blue",
            snake_stroke: "lime",
            food_fill: "blue",
            food_stroke: "lime",
            game_speed: 60
        }, options);

        return this.each(function(){
            
            let board = $(this)[0];
            $(this).css('background-color', settings.board_color);
            let context = board.getContext('2d');

            let snake = [
                { x:50, y:100, lastX: 0, lastY: 0}
            ];

            let snakeWidth = 10;
            let snakeHeight = 10;
            let snakeSize = 10;

            let food = { x: 200, y:200, eaten: false};

            const left = 37;
            const right = 39;
            const down = 40;
            const up = 38;

            let keyPressed = down;
            let score = 0;
            let game;

            playButton();
            

            function playButton(){
                let startButton = document.createElement("button");
                startButton.innerHTML = "Play Snake";

                let container = document.getElementById("container");
                container.appendChild(startButton);

                startButton.addEventListener ("click", function() {
                    startButton.hidden = true;
                    game = setInterval(gameLoop, settings.game_speed);
                });
            }
            

            function gameLoop(){
                clearBoard();
                drawFood();
                moveSnake();
                drawSnake();
            }

            function resetGame(){
                snake = [
                    { x:50, y:100, lastX: 0, lastY: 0}
                ];
                food = { x: 200, y:200, eaten: false};
                keyPressed = down;
                score = 0;
            }

            function clearBoard(){
                context.clearRect(0, 0, board.width, board.height);
            }

            function drawFood(){
                context.fillStyle = settings.food_fill;
                context.strokeStyle = settings.food_stroke;
                if (food.eaten == true){
                    food = newFoodPosition();
                }
                context.fillRect(food.x, food.y, snakeWidth, snakeHeight);
                context.strokeRect(food.x, food.y, snakeWidth, snakeHeight);
            }

            function newFoodPosition(){
                let newX;
                let newY;
                newX = Math.floor(Math.random() * ((board.width - 10)/10)) * 10;
                newY = Math.floor(Math.random() * ((board.height - 10)/10)) * 10;
                return{
                    x: newX,
                    y: newY
                }
            }

            function didEatFood(x, y){
                return food.x == x && food.y == y;
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
                    context.fillStyle = settings.snake_fill;
                    context.fillRect(value.x, value.y, snakeWidth, snakeHeight)
                    context.strokeStyle = settings.snake_stroke;
                    context.strokeRect(value.x, value.y, snakeWidth, snakeHeight)
                    if (index == 0) {
                        if(collision(value.x, value.y)){
                            gameOver();
                        }
                        if(didEatFood(value.x, value.y)){
                            score++;
                            $('#score').text(score);
                            growSnake();
                            food.eaten = true;
                        }
                    }
                })
            }

            function growSnake(){
                snake.push({
                    x: snake[snake.length - 1].lastX,
                    y: snake[snake.length - 1].lastY
                })
            }

            function collision(x, y){
                return snake.filter(function(value, index){
                    return index != 0 && value.x == x && value.y == y;
                }).length > 0 || x < 0 || x > board.width || y < 0 || y > board.height;
            }

            $(document).keydown(function(event){
                //only allow these 4 keys
                if($.inArray(event.which, [down, up, left, right]) != -1){
                    keyPressed = checkKeyIsAllowed(event.which);
                }
                
            });

            function checkKeyIsAllowed(temp){
                let key;
                if (temp == down){
                    key = (keyPressed != up) ? temp : keyPressed;
                }
                else if (temp == up){
                    key = (keyPressed != down) ? temp : keyPressed;
                }
                else if (temp == right){
                    key = (keyPressed != left) ? temp : keyPressed;
                }
                else if (temp == left){
                    key = (keyPressed != right) ? temp : keyPressed;
                }
                return key;
            }

            function gameOver(){
                clearInterval(game);
                resetGame();
                let gameOver = document.createElement("button");
                gameOver.innerHTML = "Game over!";

                let container = document.getElementById("container");
                container.appendChild(gameOver);

                gameOver.addEventListener ("click", function() {
                    gameOver.hidden = true;
                    playButton();
                });
            }
        })
    }
}(jQuery));