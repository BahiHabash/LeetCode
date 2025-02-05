class User {
    constructor(id) {
        this.id = id;
        this.posts = new Map();
        this.following = new Set();
    }
}

class Twitter {
    #users;
    #timer;
    #NEWS_FEED_LIMIT = 10;

    constructor() {
        this.#timer = 0;
        this.#users = new Map();
    }

    /** 
     * @param {number} userId 
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        let user = this.#users.get(userId);

        // add user to users list if not existed
        if (!user) {
            user = new User(userId);
            this.#users.set(userId, user);
        }

        this.#timer++;
        user.posts.set(tweetId, this.#timer);
    }

    /** 
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const newsFeed = [];
        const user = this.#users.get(userId);

        // Handle if user doesn't existed
        if (!user) return newsFeed;
        
        const posts = [...user.posts];
        
        for (const followeeId of user.following) {
            const followee = this.#users.get(followeeId);

            if (followee.posts) {
                posts.push(...followee.posts);
            }
        }

        posts.sort((p1, p2) => p2[1] - p1[1]);

        for (const [id, timer] of posts) {
            if (newsFeed.length === this.#NEWS_FEED_LIMIT) break;

            newsFeed.push(id);
        }

        return newsFeed;
    }

    /** 
     * @param {number} followerId 
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followerId === followeeId) return;

        let [follower, followee] = [this.#users.get(followerId), this.#users.get(followeeId)];

        // add follower if not existed
        if (!follower) {
            follower = new User(followerId);
            this.#users.set(followerId, follower);
        }

        // add followee if not existed
        if (!followee) {
            followee = new User(followerId);
            this.#users.set(followeeId, followee);
        }

        follower.following.add(followeeId);
    }

    /** 
     * @param {number} followerId 
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        const user = this.#users.get(followerId);

        if (user) {
            user.following.delete(followeeId);
        }
    }
}

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */



      
