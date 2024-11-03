const chunkArray = (arr, size) => {
    let result = [];
    let startIndex = 0;

    while (startIndex < arr.length) {
        const chunk = arr.slice(startIndex, startIndex + size);
        if (chunk.length === size) {
            result.push(chunk);
        }
        startIndex += size;
    }

    return result;
};

console.log(chunkArray([1,2,3,4,5,6,7,8], 3));
console.log(chunkArray([1,2,3,4,5], 2));