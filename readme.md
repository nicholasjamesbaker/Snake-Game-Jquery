```html
   _   ____                         __             _            ___                     
  (_) /___ \_   _  ___ _ __ _   _  / _\_ __   __ _| | _____    / _ \__ _ _ __ ___   ___ 
  | |//  / / | | |/ _ \ '__| | | | \ \| '_ \ / _` | |/ / _ \  / /_\/ _` | '_ ` _ \ / _ \
  | / \_/ /| |_| |  __/ |  | |_| | _\ \ | | | (_| |   <  __/ / /_\\ (_| | | | | | |  __/
 _/ \___,_\ \__,_|\___|_|   \__, | \__/_| |_|\__,_|_|\_\___| \____/\__,_|_| |_| |_|\___|
|__/                        |___/                                                       
```

# jQuery.snake-game

jQuery Snake Game is the classic version of Snake, now in a jQuery plugin!

## Installation

This plugin requires jQuery 1.8 or higher.

Download the contents from this GitHub file.

Create the following **HTML** code:

## Container

Your plugin will be housed within this HTML element:

```html
<div id="container"></div>
```

## Canvas

The canvas element is to be placed in the container div.
This runs best at width 600 and height 400. However, you can choose any size.

```html
<canvas id="canvas" width="600" height="400"></canvas>
```

## Span

The span element is to be placed in the container div.
The score element is contained within a span element like this:

```html
<span>Score: <b id="score">0</b></span>
```

## Scripts

You must include the jquery.snake-game.js in the script element of your HTML code.

```html
<script src="jquery.snake-game.js"></script>
```

You will access this plugin from your main JavaScript file, for example:

```html
<script src="app.js" type="text/javascript"></script>
```

## CSS Styles

These are the **CSS** styles that we will be using:

```css
#container{
    text-align: center;
    width: 100%
}

#canvas {
    background-color: black;
}

button {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
}
```

## Using the plugin in your main script

Within your main script (app.js), you using the snakeGame function for your canvas selector.

You will write a selector for your canvas element, in this case "#canvas". 

The snake game function is .snakeGame, so it would look something like this:

```js
$("#canvas").snakeGame({
    board_color: "#000000",
    snake_fill: "red",
    snake_stroke: "yellow",
    game_speed: 60
});
```

There you go! You are now ready to play.

## How to play

The objective of the game is to eat as much food as possible

Try not to run into the wall or your own body, this is the challenge.

The more food you eat, the higher your score will be!

## Controls

* **Move up** - ARROW UP
* **Move down** - ARROW DOWN
* **Move left** - ARROW LEFT
* **Move right** - ARROW RIGHT

## Options

There are several options that you can enable within your app.js:
* board_color: Change the color of the playing board/canvas/field. Auto set to black (#000000)
* snake_fill: Change the color of the snakes fill
* snake_stroke: Change the color of the stroke of the snake
* food_fill: Change the color of the foods fill
* food_stroke: Change the color of the foods stroke
* game_speed: Change the game speed. 100 - EASY, 75 - MEDIUM, 50 - HARD, 25 - IMPOSSIBLE.

## License

(The MIT License)

Copyright (c) 2022 Nicholas Baker <xnickbakerx@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.