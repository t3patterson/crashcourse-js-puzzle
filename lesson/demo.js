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

// (1) Set up the event listener on the divs
$('main').on('click div', function updateGameBoard(evt){
  // (2) find the empty position
  let emptyPos = findXYCoords("empty", GAMEBOARD)
  // (3) the clicked pos
  let clickedPos = findXYCoords(evt.target.id, GAMEBOARD)
  //  (4) Set the coords anywhere
  //   GAMEBOARD = setXYCoords(clickedPos.y, clickedPos.x, 'empty', GAMEBOARD)
  //   GAMEBOARD = setXYCoords(emptyPos.y, emptyPos.x, evt.target.id , GAMEBOARD)
  //   printGameBoard(GAMEBOARD)

  // (5) is moveable??? --> see function below
  let isMoveablePiece = determineIfMoveable(clickedPos, emptyPos) 
 
  //  (5) if is moveable set the coords
  if(isMoveablePiece === true){
    GAMEBOARD = setXYCoords(clickedPos.y, clickedPos.x, 'empty', GAMEBOARD)
    GAMEBOARD = setXYCoords(emptyPos.y, emptyPos.x, evt.target.id , GAMEBOARD)
    printGameBoard(GAMEBOARD)
  }
  
})


function determineIfMoveable(clickedCoords, emptyCoords){
  let isMoveable = false
  if( clickedCoords.x + 1 === emptyCoords.x && 
      clickedCoords.y === emptyCoords.y
    ){
    isMoveable = true
    console.log('clicked-piece-MOVES-RIGHT')
  } 
  
  if( clickedCoords.x - 1 === emptyCoords.x && 
      clickedCoords.y === emptyCoords.y
    ){
    isMoveable = true
    console.log('clicked-piece-MOVES-LEFT')
  } 
  
  if( clickedCoords.x === emptyCoords.x  && 
      clickedCoords.y - 1 === emptyCoords.y 
    ){
    isMoveable = true
    console.log('clicked-piece-MOVES-UP')
  } 
  
  if( clickedCoords.x  === emptyCoords.x && 
      clickedCoords.y + 1 === emptyCoords.y
    ){
    isMoveable = true
    console.log('clicked-piece-MOVES-DOWN')
  } 
  return isMoveable
}