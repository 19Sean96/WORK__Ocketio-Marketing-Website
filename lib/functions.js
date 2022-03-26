const humanUnits = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

function humanFileSize(size) {
    if (!size) {
        return "0 B"
    }
    const i = Math.floor(Math.log(size) / Math.log(1000));
    return (size / Math.pow(1000, i)).toFixed(2) + ' ' + humanUnits[i];
}

function getObjInArrayByProperty(arr, val, key) {
    const i = arr.map(obj => obj[key]).indexOf(val)
    return arr[i]
}

export {
    humanFileSize,
    getObjInArrayByProperty
}