

function checkNext(board, position, direction){
    let counter = 1;
    let curr = position;
    let next = board[curr][direction]
    let check = board[curr].value
    let fourInRow = [curr]

    for (let i = 1; i < 4; i++){
        if (board[curr].value && next)
            if (board[next].value === check){
                counter++
                fourInRow.push(next)
                curr = next
                next = board[curr][direction]
            }
    }
    return [counter, fourInRow]
}

function checkHorizontal(board, position) {
    let counterR = checkNext(board, position, "right");
    let counterL = checkNext(board, position, "left")
    let horizontalCount = counterL[0] + counterR[0] -1
    let combinedArr = counterL[1].concat(counterR[1])
    let uniqueArr = [...new Set(combinedArr)]
    return [horizontalCount, uniqueArr]
}

function checkForwardSlash(board, position){
    let counterUpRight = checkNext(board, position, "upright")
    let counterDownLeft = checkNext(board, position, "downleft")
    let forwardSlashCount = counterDownLeft[0] + counterUpRight[0] -1
    let combinedArr = counterUpRight[1].concat(counterDownLeft[1])
    let uniqueArr = [...new Set(combinedArr)]
    return [forwardSlashCount, uniqueArr]
}

function checkDown(board, position){
    let counterDown = checkNext(board, position, "down")
    return counterDown
}


function checkWinner(board, position) {
    let down = checkDown(board, position)
    let horizontal = checkHorizontal(board, position)
    let forwardslash = checkForwardSlash(board, position)
    let backslash = checkBackSlash(board, position)

    if (down[0] >= 4) {
        return [true, down[1]]
    }
    if (horizontal[0] >= 4) {
        return [true, horizontal[1]]
    }
    if (forwardslash[0] >= 4) {
        return [true, forwardslash[1]]
    }
    if (backslash[0] >= 4) {
        return [true, backslash[1]]
    }
    return [false, null]
}

export { checkWinner }
