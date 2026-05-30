class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = new Map();
        for (let i = 0; i < numCourses; i++) preMap.set(i, new Array());
        for (const [c, p] of prerequisites) preMap.get(c).push(p);

        const visiting = new Set();

        const d = c => {
            if (visiting.has(c)) return false;
            if (preMap.get(c).length === 0) return true;

            visiting.add(c);
            for (const p of preMap.get(c)) if (!d(p)) return false;

            visiting.delete(c);
            preMap.set(c, []);
            return true;
        }

        for (let c = 0; c < numCourses; c++) if (!d(c)) return false;

        return true;
    }
}
