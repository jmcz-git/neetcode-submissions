class Graph {
    constructor() {
        this.al = {}; // al: adjecency list
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {void}
     */
    addEdge(src, dst) {
        if (!(src in this.al)) this.al[src] = new Set();
        if (!(dst in this.al)) this.al[dst] = new Set();
        this.al[src].add(dst);
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src, dst) {
        if (src in this.al && this.al[src].has(dst)) {
            this.al[src].delete(dst);
            return true;
        }
        return false;
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst) {
        const visited = new Set();
        return this._d(src, dst, visited);
    }

    _d(src, dst, visited) {
        if (src === dst) return true;
        
        visited.add(src);

        for (const n of this.al[src] || [])
            if (!visited.has(n))
                if (this._d(n, dst, visited))
                    return true;
        return false;
    }
}
