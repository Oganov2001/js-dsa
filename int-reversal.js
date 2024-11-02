const reverseInt = (num) => {
    const reversed = num.toString().split("").reverse().join("");
    return parseInt(reversed) * Math.sign(num);
};

console.log(reverseInt(1234));
console.log(reverseInt(-321));