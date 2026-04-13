class AuthenticationManager {
    private readonly timeToLive: number;
    private readonly session: Record<string, number>;

    constructor(timeToLive: number) {
        this.timeToLive = timeToLive;
        this.session = {};
    }

    generate(tokenId: string, currentTime: number): void {
        this.session[tokenId] = currentTime + this.timeToLive;
    }

    renew(tokenId: string, currentTime: number): void {
        if (this.session[tokenId] > currentTime) {
            this.session[tokenId] =  currentTime + this.timeToLive;
        } else {
            delete this.session[tokenId];
        }
    }

    countUnexpiredTokens(currentTime: number): number {
        let count: number = 0;
        
        for (const [tokenId, expireTime] of Object.entries(this.session)) {
            if (expireTime > currentTime) {
                count++;
            } else {
                delete this.session[tokenId];
            }
        }

        return count;
    }
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */