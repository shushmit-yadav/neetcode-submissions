class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if(amount == 0) return 0;
        const q = new Queue([0]);
        const seen = new Array(amount + 1).fill(false); 
        seen[0] = true;
        let res = 0;
        while(!q.isEmpty()){
            res++;
            const size = q.size();
            for(let i = 0; i < size; i++){
                const curr = q.pop();
                for(const coin of coins){
                    const next = curr + coin;
                    if(next == amount) return res;
                    if(next > amount || seen[next]) continue;
                    seen[next] = true;
                    q.push(next);
                }
            }
        }
        return -1;
    }
}
