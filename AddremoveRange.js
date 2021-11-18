class RangeList {
    /**
     * Represents a RangeList, which is like a domain(Math).
     * @constructor
     * @description Initlize the empty array to store range.
     */
    constructor() {
        this.rangeList = [];
    }
    /**
  * Adds a range to the list
  * @param {Array<number>} range - Array of two integers that specify
  * beginning and end of range.
  * @description Put the input range into rangelist of the class. 
  * First vertify if the input is valid, otherwise throw relevant error. 
  * Then check the correct position of range, which divided by sevarl cases and merge them.
  * l represent the left most relative position of range, and r represent the right most position of range.
  */
    add(range) {
        if (!range.length) {
            throw 'Range is not a Array or length 0!';
        }
        else if (range.length !== 2) {
            throw 'Input Range should be a length 2 array!';
        }
        else if (isNaN(range[0]) || isNaN(range[1])) {
            throw 'Input Range should be number array!';
        }
        else if (range[0] > range[1]) {
            throw 'The first number of range should be smaller!';
        }

        if (this.rangeList.length === 0) {
            this.rangeList = range;
        }
        else if (this.rangeList[this.rangeList.length - 1] <= range[0]) {
            if (this.rangeList[this.rangeList.length - 1] === range[0]) {
                this.rangeList[this.rangeList.length - 1] = range[1];
            }
            else {
                this.rangeList[this.rangeList.length] = range[0];
                this.rangeList[this.rangeList.length] = range[1];
            }
        }
        else {
            const l = this.rangeList.findIndex((element) => range[0] <= element);
            const r = this.rangeList.findIndex((element) => range[1] <= element);
            let part1;let part2;
            if (l % 2 === 0) {
                part1=this.rangeList.slice(0,l).concat(range[0]);
            }
            else {
                part1=this.rangeList.slice(0,l);
            }
            if (r % 2 === 0) {
                if(range[1]===this.rangeList[r]){
                    part2=this.rangeList.slice(r+1);
                }
                else{
                    part2=[range[1]].concat(this.rangeList.slice(r));
                }
            }
            else {
                part2=this.rangeList.slice(r);
            }
            this.rangeList=part1.concat(part2);
        }
    }
    /**
    * Removes a range from the list
    * @param {Array<number>} range - Array of two integers that specify
    * beginning and end of range.
    * @description First vertify if the input is valid, otherwise throw relevant error. 
    * Then check the correct position of range. And only check overlapping cases. 
    * Also, the range shoud include at least one integer, otherwise nothing changes.
    * The right most element of range is not deleted.
    * l represent the left most relative position of range, and r represent the right most position of range.
    */
    remove(range) {

        if (!range.length) {
            throw 'Range is not a Array or length 0!';
        }
        else if (range.length !== 2) {
            throw 'Input Range should be a length 2 array!';
        }
        else if (isNaN(range[0]) || isNaN(range[1])) {
            throw 'Input Range should be number array!';
        }
        else if (range[0] > range[1]) {
            throw 'The first number of range should be smaller!';
        }

        if (range[1] > this.rangeList[this.rangeList.length - 1] && range[0] <= this.rangeList[0]) {
            this.rangeList = [];
        }
        else if (range[1] === this.rangeList[this.rangeList.length - 1] && range[0] <= this.rangeList[0]) {
            this.rangeList = [range[1], range[1]];
        }
        else if (range[0] !== range[1]) {
            const l = this.rangeList.findIndex((element) => range[0] <= element);
            const r = this.rangeList.findIndex((element) => range[1] <= element);
            let part1;let part2;
            if(l%2==0){
                part1= part1=this.rangeList.slice(0,l);
            }
            else{
                part1=this.rangeList.slice(0,l).concat(range[0]);
            }
            if (r % 2 === 0) {
                part2=this.rangeList.slice(r);
            }
            else {
                if(range[1]===this.rangeList[r]){
                    part2=this.rangeList.slice(r);
                }
                else{
                    part2=[range[1]].concat(this.rangeList.slice(r));
                }
            }
            this.rangeList=part1.concat(part2);
        }
    }
    /**
    * Prints out the list of ranges in the range list
    * @description iterate whole list and make every pair to be a needed string. Concat the strings and remove the extra blank.
    */
    print() {
        let res = "";
        for (let i = 0; i < this.rangeList.length; i++) {
            res = res.concat(`[${this.rangeList[i]}, ${this.rangeList[i + 1]}) `);
            i++;
        }
        console.log(res.trim());
    }
}
let x = new RangeList();
x.add([1, 5]);
x.print();
x.add([10, 20]);
x.print();
x.add([20, 20]);
x.print();
x.add([20, 21]);
x.print();
x.add([2, 4]);
x.print();
x.add([3, 8]);
x.print();
x.remove([10, 10]);
x.print();
x.remove([10, 11]);
x.print();
x.remove([15, 17]);
x.print();
x.remove([3, 19]);
x.print();
x.remove([1, 22]);
x.print();
