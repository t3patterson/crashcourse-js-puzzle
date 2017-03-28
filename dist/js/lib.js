function initGameBoard(){
  let arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","empty"]
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
