function initGameBoard(){
  let arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","x"]
  return _.chunk( _.shuffle(arr), 4)
}

function printGameBoard(board){
  let boardHtml = board.map((rowVals)=> rowVals.map( (colVal)=> {
      return `<div id="${colVal}">${colVal}</div>`
  }).join('')).join('')
  
  document.querySelector('main').innerHTML = boardHtml
}

function setXYCoords( xCoord, yCoord, val, board){
  board[xCoord][yCoord] = val
  return board
}

function findXYCoords(pieceToFind, board){
  let pos = {
    x: null,
    y: null
  }
  
  board.forEach(function(boardRowVals, rowIndex){
    boardRowVals.forEach(function(colVal , colIndex){
      if( colVal === pieceToFind ){
         pos.y = rowIndex
         pos.x = colIndex
      } 
    })
  })
  
  return pos
}

function determineIfMoveable(clickedPos, emptyPos){
  let isMoveable = false
  if( clickedPos.x + 1 === emptyPos.x && 
      clickedPos.y === emptyPos.y
    ){
    isMoveable = true
    console.log('clicked-piece-MOVES-RIGHT')
  } 
  
  if( clickedPos.x - 1 === emptyPos.x && 
      clickedPos.y === emptyPos.y
    ){
    isMoveable = true
    console.log('clicked-piece-MOVES-LEFT')
  } 
  
  if( clickedPos.x === emptyPos.x  && 
      clickedPos.y - 1 === emptyPos.y 
    ){
    isMoveable = true
    console.log('clicked-piece-MOVES-UP')
  } 
  
  if( clickedPos.x  === emptyPos.x && 
      clickedPos.y + 1 === emptyPos.y
    ){
    isMoveable = true
    console.log('clicked-piece-MOVES-DOWN')
  } 
  return isMoveable
}
