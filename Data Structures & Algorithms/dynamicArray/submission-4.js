class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.length = 0;
        this.arr = new Array(this.capacity)
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        console.log("ARRAY BEFORE", this.arr)
        // if (this.capacity === this.length) {
        //     console.log("RESIZED")
        //     this.resize()
        // }
        // for (let r = this.length - 1; r >= i; r--) {
        //     this.arr[r + 1] = this.arr[r]
        //     if (r === i) {
        //         this.arr[i] = n
        //     }
        // }
        let j = i < 0 ? i * -1: i;
        this.arr[j] = n
        console.log("ARRAY after", this.arr)

    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.capacity === this.length) {
            this.resize()
        }
        this.arr[this.length] = n; // we can reuse the properties, no need to reuse the methods though (great catch one off by one error lmao)
        // DON'T EVER BE OVERCAUTIOUS
        // I WAS PREMPTIVELY TRYING TO HANDLE THE OFF BY ONE AT THE END
        // BUT I FORGOT THAT this.resize() LITERALLY HANDLES THAT IMPLICITLY
        // TRUST YOUR CODE BABY BOY
        this.length++;
    }

    /**
     * @returns {number}
     */
    popback() {
        this.length--;
        return this.arr[this.length]; // yeah dude, i don't know what to say.
        // you knew using pop() was wrong
        // but you didn't know the LANGUAGE SPECIFICATION
        // now you do
        // and now you know to check the LANGUAGE SPECIFICATION to ensure proper understanding
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
        let t = new Array(this.capacity)

        for (let i = 0; i < this.length; i++) {
            t[i] = this.arr[i]
        }
        
        this.arr = t
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
