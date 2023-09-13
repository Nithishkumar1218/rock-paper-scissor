let scores = JSON.parse(localStorage.getItem('scores')) || 
      {
        Wins : 0,
        Losses : 0,
        Ties :0
      };

      updateScoreElement();

      function playGame (playerMove) {

        const computerMove = pickComputerMove();
        let result = '';

        if (playerMove === 'scissor') {
        if(computerMove === 'scissor') {
          result = 'Tie.';
        } else if (computerMove === 'rock') {
          result = 'You Lose.';
        } else if (computerMove === 'paper') {
          result = 'You Win.'
        }
      } else if(playerMove === 'paper') {
        if(computerMove === 'paper') {
          result = 'Tie.';
        } else if (computerMove === 'rock') {
          result = 'You Win.';
        } else if (computerMove === 'scissor') {
          result = 'You Lose.'
        }
      } else if (playerMove === 'rock') {
        if(computerMove === 'rock') {
          result = 'Tie.';
        } else if (computerMove === 'paper') {
          result = 'You Lose.';
        } else if (computerMove === 'scissor') {
          result = 'You Win.'
        }
      }

      if(result === 'You Win.') {
        scores.Wins += 1;
      } else if(result === 'You Lose.') {
        scores.Losses += 1;
      } else if(result === 'Tie.') {
        scores.Ties += 1;
      }

      localStorage.setItem('scores',JSON.stringify(scores));

      updateScoreElement();

      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-move').innerHTML = `You 
      <img src=..../images/${playerMove}-emoji.png class="move-icon">
      <img src=..../images/${computerMove}-emoji.png class="move-icon">
      computer`;

      }

      function updateScoreElement ()
      {
        document.querySelector('.js-score').innerHTML = `Wins : ${scores.Wins}, Losses : ${scores.Losses}, Ties : ${scores.Ties}`;
      }

      function pickComputerMove () {
      const randomNumber = Math.random();
      let computerMove = '';

      if(randomNumber > 0 && randomNumber < 1/3) {
        computerMove = 'rock';
      } else if(randomNumber > 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
      } else if (randomNumber > 2/3 && randomNumber < 1) {
        computerMove = 'scissor';
      }
      return computerMove;
    }
