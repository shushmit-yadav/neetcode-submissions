class Twitter {
    constructor() {
        this.count = 0;
        this.tweetMap = new Map();
        this.followMap = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if(!this.tweetMap.has(userId)){
            this.tweetMap.set(userId, []);
        }

        this.tweetMap.get(userId).push([this.count, tweetId]);
        this.count -= 1;;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const res = [];
        if(!this.followMap.has(userId)){
            this.followMap.set(userId, new Set());
        }
        this.followMap.get(userId).add(userId);

        const  minPQ = new PriorityQueue((a, b) => a[0] - b[0]);

        for(const followeeId of this.followMap.get(userId)){
            if(this.tweetMap.has(followeeId)) {
                const  tweets = this.tweetMap.get(followeeId);
                const index = tweets.length - 1;
                const  [cnt, tId] = tweets[index];
                minPQ.enqueue([cnt, tId, followeeId, index-1]);
            }
        }

        while(!minPQ.isEmpty() > 0 && res.length < 10){
            let [_, tId, fId, nextIndex] = minPQ.dequeue();
            res.push(tId);
            if(nextIndex >= 0 ){
                const [olderCnt, olderTId] = this.tweetMap.get(fId)[nextIndex];
                minPQ.enqueue([olderCnt, olderTId, fId, nextIndex-1]);
            }
        }
        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(!this.followMap.has(followerId)){
            this.followMap.set(followerId, new Set());
        }
        this.followMap.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.followMap.has(followerId)){
            this.followMap.get(followerId).delete(followeeId);
        }
    }
}
