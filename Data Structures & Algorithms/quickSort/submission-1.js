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
    quickSort(pairs) {
        this.q(pairs, 0, pairs.length - 1);
        return pairs;
    }

    q(arr, s, e) {
        if (e - s + 1 <= 1) {
            return;
        }

        const pivot = arr[e];
        let left = s;

        for (let i = s; i < e; i++) {
            if (arr[i].key < pivot.key) {  // READ THE PROBLEM (compare VARIABLE.key instead of VARIABLE alone)
                const tmp = arr[left];
                arr[left] = arr[i];
                arr[i] = tmp;
                left++;
            }
        }

        arr[e] = arr[left];
        arr[left] = pivot;

        this.q(arr, s, left - 1);
        this.q(arr, left + 1, e);
    }
}
