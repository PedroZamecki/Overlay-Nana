function dec2hex(num) {
    var res = num.toString(16);
    if (num === 0) {
        res = '00';
    } else if (num < 16) {
        res = '0' + res;
    } else if (num >= 16 && res.length === 1) {
        res = res + res;
    }
    return res;
}