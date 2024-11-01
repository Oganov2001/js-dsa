class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const last_item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return last_item;
    }

    shift() {
        const first_item = this.data[0];
        
        // Re-index the array.
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
        return first_item;
    }

    deleteByIndex(index) {
        const deleted_item = this.data[index];

        // Re-index the array.
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
        return deleted_item;
    }

    getByIndex(index) {
        return this.data[index];
    }
}

const myArray = new CustomArray();
myArray.push("Sussy");
myArray.push("Baka");
myArray.push("Among Us");

console.log(myArray);
console.log(myArray.deleteByIndex(1));
console.log(myArray);