class User {
    constructor(id) {
        this.id = id;
        this.tweets = new Map();
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
        // Get user or create if not existed
        const user = this.#users.get(userId) ?? this.addUser(userId);
        user.tweets.set(tweetId, this.#timer++); // Fixed typo: `tweetes` -> `tweets`
    }

    /** 
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const user = this.#users.get(userId);

        // Handle if user doesn't exist
        if (!user) return [];

        const recentTweets = this.recentTweets(user);

        // Include tweets from users being followed
        for (const followeeId of user.following) {
            const followee = this.#users.get(followeeId);
            if (followee) recentTweets.push(...this.recentTweets(followee));
        }

        // Sort tweets by timestamp (most recent first)
        recentTweets.sort((p1, p2) => p2[1] - p1[1]);

        // Return the top `#NEWS_FEED_LIMIT` tweets
        return recentTweets.slice(0, this.#NEWS_FEED_LIMIT).map(([id]) => id);
    }

    /** 
     * @param {number} followerId 
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followerId === followeeId) return;

        // Get follower & followee or create if not existed
        const follower = this.#users.get(followerId) ?? this.addUser(followerId);      
        const followee = this.#users.get(followeeId) ?? this.addUser(followeeId); 

        follower.following.add(followeeId);
    }

    /** 
     * @param {number} followerId 
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        const user = this.#users.get(followerId);
        if (user) user.following.delete(followeeId);
    }

    /** 
     * @param {number} userId
     * @return {User}
     */
    addUser(userId) {
        const user = new User(userId);
        this.#users.set(userId, user);
        return user;
    }

    /** 
     * @param {User} user
     * @return {[number, number][]} most recent tweets
     */
    recentTweets(user) {
        if (!user) return [];

        // Return the top `#NEWS_FEED_LIMIT` tweets
        return [...user.tweets.entries()].slice(0, this.#NEWS_FEED_LIMIT + 1);
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