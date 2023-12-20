// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range includes
// integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)

/** 
 * NOTE: Feel free to add any extra member variables/functions you like.
 */

class RangeList { 

    #ranges = null

    constructor() {
        this.#ranges = new Array();
    }  
    
    
    /**
     * Merge overlapping ranges
     */
    #mergeRanges() {
        // Sort the range array based the beginning element first
        this.#ranges.sort((range1, range2) => range1[0] - range2[0]);

        // Start to merge the ranges
        let range = this.#ranges[0];
        for (let i = 1; i < this.#ranges.length; i++) {
            let next_range = this.#ranges[i];
            if (range[1] >= next_range[0]) {
                this.#ranges.splice(i - 1, 2, [range[0], Math.max(range[1], next_range[1])]);
                i--;
            } else {
                range = next_range;
            }
        }
    }


    /**
     *
     * Adds a range to the list
     * @param {Array<number>} range - Array of two integers that specify beginning and
     * end of range.
     */
    add(range) {
        // TODO: implement this 
        if (range[0] >=range[1]) return;
        this.#ranges.push(range);

        // Merge the appened range based on the defined rule
        this.#mergeRanges()
    }


    /**
     * Removes a range from the list
     * @param {Array<number>} range - Array of two integers that specify beginning and
     * end of range.
     */
    remove(range) {

        // Split the ranges before removing based on given rules
        for (let i = 0; i < this.#ranges.length; i++) {
            let item = this.#ranges[i];

            // Remove the ranges following the rules
            if (item[0] >= range[0] && item[1] <= range[1]) {
                this.#ranges.splice(i, 1);
                i--;
                continue;
            }

            // Change the exising ranges based on rules
            if (item[0] < range[0] && item[1] > range[0]) {
                if (item[1] <= range[1]) {
                    this.#ranges.splice(i, 1, [item[0], range[0]]);
                } else {
                    this.#ranges.splice(i, 1, [item[0], range[0]], [range[1], item[1]]);
                    i++;
                }
                continue;
            }

            if (item[0] < range[1] && item[1] > range[1]) {
                if (item[0] >= range[0]) {
                    this.#ranges.splice(i, 1, [range[1], item[1]]);
                } else {
                    this.#ranges.splice(i, 1, [item[0], range[0]], [range[1], item[1]]);
                    i++;
                }
                continue;
            }
        }

        this.#mergeRanges();
    }


    /** 
     * Convert the list of ranges in the range list to a string
     * @returns A string representation of the range list
     */
    toString() {
        // TODO: implement this
        let str = ``;
        for (let range of this.#ranges) {
            str += `[${range[0]}, ${range[1]}) `;
        }
        return str.substring(0, str.length - 1);    
    }

}

module.exports = {
    RangeList: RangeList
}
