let GAMEBOARD = initGameBoard()

printGameBoard(GAMEBOARD)

$('main').on('click div', function(evt){
  let emptyPos = findXYCoords("x", GAMEBOARD)
  let clickedPos = findXYCoords(evt.target.id, GAMEBOARD)
  let isMoveablePiece = determineIfMoveable(clickedPos, emptyPos)  
  if(isMoveablePiece === true){
    GAMEBOARD = setXYCoords(clickedPos.y, clickedPos.x, 'x', GAMEBOARD)
    GAMEBOARD = setXYCoords(emptyPos.y, emptyPos.x, evt.target.id , GAMEBOARD)
    printGameBoard(GAMEBOARD)
  }
  
})
