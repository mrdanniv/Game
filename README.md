# Click Game

A simple JavaScript game where you click on balls to score points within a limited time.

## Game Logic

1. The user enters the game time and clicks **Start**.
2. When the game starts:
   - A timer counts down every second (`setInterval`).
   - Balls are generated at random positions on the game field (`createBall()` + `rand()`).
3. Clicking a ball:
   - Increases the score (`score++`).
   - Removes the current ball and spawns a new one at a different position.
4. The game ends:
   - When the timer reaches zero or the user clicks **Stop**.
   - The result is displayed (`gameBox.innerHTML = "Your score ..."`) and the button resets to **Start**.
5. Game state management:
   - `ifPlaying` flag tracks whether the game is running.
   - The **Start / Stop** button changes its text and color depending on the state.
6. Constraints:
   - Balls appear only inside the game field boundaries.
   - Ball size is random (`rand(10,100)`).

## Technologies Used

- HTML — page structure
- CSS — styling and ball positioning
- JavaScript — game logic, timer, ball generation
- Git & GitHub — version control
