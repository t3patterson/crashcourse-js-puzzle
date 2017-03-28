//(0) Cover data structure in javascript
// [
//  [ A, C, G, empty ]
//  [ I, F, H, D  ]
//  [ B, E, J, K ]
// ]
//
//  
 //  <div id="A">A</div>
 //  <div id="C">C</div>
 //  <div id="G"> G</div>
 //  <div id="empty">empty</div>
 //  <div id="I">I</div>
 //  <div id="F">F</div>
 //  <div id="H">H</div>
 //  <div id="D">D</div>
 //  <div id="B">B</div>
 //  <div id="B">E</div>
 //  <div id="B">J</div>
 //  <div id="B">K</div>

// (2) Set up the event listener on the divs
$('main').on('click div', function updateGameBoard(evt){
  // find the emptyPos
  let emptyPos = findXYCoords("empty", GAMEBOARD)
  let clickedPos = findXYCoords(evt.target.id, GAMEBOARD)
  let isMoveablePiece = determineIfMoveable(clickedPos, emptyPos)  
  if(isMoveablePiece === true){
    GAMEBOARD = setXYCoords(clickedPos.y, clickedPos.x, 'empty', GAMEBOARD)
    GAMEBOARD = setXYCoords(emptyPos.y, emptyPos.x, evt.target.id , GAMEBOARD)
    printGameBoard(GAMEBOARD)
  }
  
})