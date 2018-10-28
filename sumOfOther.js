function sumOfOther(array) {
    const result = [];
    const LENGTH = array.length;
    for (let i = 0; i < LENGTH; i++) {
        if (Number(array[i]) !== array[i]) throw "I can do it with digits only";
        const filteredArray = array.filter((item, j) => j !== i);
        result[i] = filteredArray.reduce((sum, current) => sum + current);
    }
    return result;
}