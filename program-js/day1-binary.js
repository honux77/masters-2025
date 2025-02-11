const dec2bin = (dec) => {
    const rest = Array(8).fill(0)
    let idx = 0
    while (dec > 0) {
        rest[7 - idx] = dec % 2
        dec = Math.floor(dec / 2)
        idx++
    }
    return rest.join('')
}

const bin2dec = (bin) => {
    return bin.split('').reverse().reduce((acc, cur, idx) => {
        return acc + cur * Math.pow(2, idx)
    }, 0)
}

const printBinary = (dec, bin) => {
    console.log(`dec: ${dec}, bin: ${bin}`)
}

module.exports = {dec2bin, bin2dec, printBinary}