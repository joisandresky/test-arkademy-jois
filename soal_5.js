let alphanumeric = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function buatKode(limit) {
    for (var x = 0; x < limit; x++) {
        let arr = [];
        for (var i = 0; i < 32; i++) {
            let posisi = Math.floor(Math.random() * alphanumeric.length);
            arr.push(alphanumeric[posisi]);
        }
        console.log(arr.join(""));
    }
}

buatKode(3);