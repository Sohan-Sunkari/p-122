var screen_width = 0;
var screen_height = 0;
var apple = '';
var speak_data = '';
var to_number = '';

// Task 2: Load Image
function preload() {
    apple = loadImage('apple.png');
}

// Task 3: Inside the recognition.onresult function
recognition.onresult = function(event) {
    var content = event.results[0][0].transcript;
    to_number = Number(content);
    if (Number.isInteger(to_number)) {
        document.getElementById('status').innerHTML = "Started drawing apple";
        var draw_apple = "set";
    } else {
        document.getElementById('status').innerHTML = "The speech has not recognized a number";
    }
}

// Task 4: Inside the setup() function
function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    var canvas = createCanvas(screen_width, screen_height - 150);
    canvas.position(0, 150);
}

// Task 5: Inside the draw() function
function draw() {
    if (draw_apple == "set") {
        for (var i = 1; i <= to_number; i++) {
            var x = Math.floor(Math.random() * 700);
            var y = Math.floor(Math.random() * 400);
            image(apple, x, y, 50, 50);
        }
        document.getElementById('status').innerHTML = to_number + " Apples Drawn";
        speak_data = to_number + " Apples drawn";
        speak();
    }
}