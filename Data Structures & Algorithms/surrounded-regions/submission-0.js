class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROWS = board.length,
            COLS = board[0].length;
        
        function capture(r,c){
            if(r < 0 || c < 0 || r == ROWS || c == COLS || board[r][c] != 'O'){
                return;
            }
            board[r][c] = 'A';
            capture(r+1, c);
            capture(r-1, c);
            capture(r, c+1);
            capture(r, c-1)
        }

        // run on boarder cells
        for (let r = 0; r < ROWS; r++){
            for (let c = 0; c < COLS; c++){
                if(board[r][c] == 'O' && ([0, ROWS-1].includes(r) || [0,COLS-1].includes(c))){
                    capture(r, c);
                }
            }
        }


        for(let r = 0; r < ROWS;  r++){
            for(let c = 0; c < COLS; c++){
                if(board[r][c] == 'O') board[r][c] = 'X';
            }
        }

        for(let r = 0; r < ROWS;  r++){
            for(let c = 0; c < COLS; c++){
                if(board[r][c] == 'A') board[r][c] = 'O';
            }
        }
        
    }
}
