/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
        return this.helper(pairs, 0, pairs.length - 1);
    }

    helper(pairs, l, r) {
        if (r - l + 1 <= 1) {
            return pairs;
        }

        // const m = Math.floor((l + r) / 2);
        const m = Math.floor(l + (r - l) / 2); // this way prevents overflow

        this.helper(pairs, l, m);

        this.helper(pairs, m + 1, r);

        this.merge(pairs, l, m, r);

        return pairs;
    }

    merge(pairs, l, m, r) {
        const L = pairs.slice(l, m + 1);
        const R = pairs.slice(m + 1, r + 1);

        let i = 0;
        let j = 0;
        let k = l;

        while (i < L.length && j < R.length) {
            if (L[i].key <= R[j].key) {
                pairs[k] = L[i];
                i++;
            } else {
                pairs[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < L.length) {
            pairs[k] = L[i];
            i++;
            k++;
        }

        while (j < R.length) {
            pairs[k] = R[j];
            j++;
            k++;
        }
    }
}
