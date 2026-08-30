class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const maxPQ = new MaxPriorityQueue();

        const counter = {};
        for (const task of tasks){
            counter[task] = counter[task] ? counter[task] + 1 : 1; 
        }

        for(let a of Object.values(counter)){
            maxPQ.enqueue(a);
        }

        const q = new Queue();
        let time = 0;
        while(maxPQ.size() > 0 || q.size() > 0 ){
            time++;
            if(maxPQ.size() > 0){
                let cnt = maxPQ.dequeue() - 1;
                if(cnt !== 0){
                    q.push([cnt,time + n]);
                }
            }

            if(q.size() > 0 && q.front()[1] == time){
                maxPQ.enqueue(q.pop()[0]);
            }
        } 
        return time;
    }
}
