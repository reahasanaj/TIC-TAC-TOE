
function App() {
    const [board, setBoard] = React.useState(["","","","","","","","",""])
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ] 

    let board
    let gameOver = false
    let turn = 'X'
    let win
    function handleTurn(event) {
        console.log(event.target, event.target.id)
        let idx = event.target.id
        if (gameOver == false) {
          let newBoard = [...board]
          newBoard[idx] = turn
          setBoard(newBoard)
          turn = turn === 'X' ? 'O' : 'X'
          //  win = getWinner()
          // render()
        }
      }
    return (
        <div>
          <h1>Tic-React-Toe</h1>
          <h2>It's X's turn!</h2>
          <div class="flex-container flex-column">
            <div class="flex-container flex-wrap" id="board" onClick={handleTurn}>
              {board.map((value, idx) => {
                return (
                  <div class="square" key={idx} id={idx}>
                    {value}
                  </div>
                )
              })}
            </div>
            <button id="reset-button">reset</button>
          </div>
        </div>
      )
}

      <div>
        <h1>Tic-React-Toe</h1>


<head>
   
    <link rel="stylesheet" href="style.css">
    <script scr="main.js"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet">
    <title>Tic-Tac-Toe</title>
</head>
<body>
    
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"> </script
        
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script

            <main class ="background"></main>

   
        <section class="title">

            <h1>Tic Tac Toe</h1>
        </section>
        <selection class ="display">
            Player <span  class="display-player playerX">X</span>'s turn'
        </selection>
        <selection class="container">
            <div class="tile"></div>
            <div class="tile"></div>
            <div class="tile"></div>
            <div class="tile"></div>
            <div class="tile"></div>
            <div class="tile"></div>
            <div class="tile"></div>
            <div class="tile"></div>
            <div class="tile"></div>
        </selection>
<selection class="controls">
    <button id="reset">Reset</button>

</selection>
       
        </main>
    
</body>
      </div>
    
  

  ReactDOM.render(<App />, document.getElementById('root'));