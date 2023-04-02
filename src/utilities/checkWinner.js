

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

