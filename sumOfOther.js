function sumOfOther(array) {
    let result = [];
    for (let i = 0; i < array.length; i++){
        if(Number(array[i]) !== array[i]) throw ("I can do it with digits only");
        const filteredArray = array.filter((item, j) => j !== i);
            result[i] = filteredArray.reduce((sum, current) => sum + current);
        }
    return console.log(result);
}