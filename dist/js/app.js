let GAMEBOARD = initGameBoard()

printGameBoard(GAMEBOARD)

$('main').on('click div', function updateGameBoard(evt){
   //
  let emptyPos = findXYCoords("empty", GAMEBOARD)
  let clickedPos = findXYCoords(evt.target.id, GAMEBOARD)
  let isMoveablePiece = determineIfMoveable(clickedPos, emptyPos)  
  if(isMoveablePiece === true){
    GAMEBOARD = setXYCoords(clickedPos.y, clickedPos.x, 'empty', GAMEBOARD)
    GAMEBOARD = setXYCoords(emptyPos.y, emptyPos.x, evt.target.id , GAMEBOARD)
    printGameBoard(GAMEBOARD)
  }
  
})
