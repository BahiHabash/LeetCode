class AuthenticationManager {
    private readonly timeToLive: number;
    private readonly session: Map<string, number>;

    constructor(timeToLive: number) {
        this.timeToLive = timeToLive;
        this.session = new Map;
    }

    generate(tokenId: string, currentTime: number): void {
        this.session.set(tokenId, currentTime + this.timeToLive);
    }

    renew(tokenId: string, currentTime: number): void {
        if ((this.session.get(tokenId) ?? 0) > currentTime) {
            this.session.delete(tokenId); // to preserv the order of operations
            this.session.set(tokenId, currentTime + this.timeToLive);
        }
    }

    countUnexpiredTokens(currentTime: number): number {
        let count: number = this.session.size;

        for (const expiresAt of this.session.values()) {
            if (expiresAt <= currentTime) {
                count--;
            } else {
                break;
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