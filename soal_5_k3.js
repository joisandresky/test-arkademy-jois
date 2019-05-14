var data = [
    ['g', 'h', 'x', 'j'],
    ['a', 'c', 'b', 'e', 'd'],
    ['q', 'w', 'a']
];

function tukarUrutkan(arr) {
    var i = 0;
    var newArr = [];
    while (i < arr.length) {
        let sorted = arr[i].sort();
        newArr.push(sorted[sorted.length - 1]);
        i++;
    }

    return newArr;
}

console.log(tukarUrutkan(data));