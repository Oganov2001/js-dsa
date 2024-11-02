const capitalize = (str) => {
    return str
            .toLowerCase()
            .split(" ")
            .map(word => word[0].toUpperCase().concat(word.slice(1)))
            .join(" ");
}

console.log(capitalize("hello world!"));