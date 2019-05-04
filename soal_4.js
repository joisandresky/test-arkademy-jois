var data = [
    ['a', 'c', 'b', 'e', 'd'],
    ['g', 'e', 'f']
];

function tukarUrutkan(arr) {
    var i = arr.length - 1;
    var newArr = [];
    while (i >= 0) {
        let sorted = arr[i].sort();
        newArr.push(sorted);
        i--;
    }

    return newArr;
}

console.log(tukarUrutkan(data));