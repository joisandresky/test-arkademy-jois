function cetak_gambar(limit) {
    for (var i = 0; i < limit; i++) {
        var temp = [];
        var center = Math.ceil(limit / 2);
        var isCenter = i + 1 === center ? true : false;
        for (var j = 0; j < limit; j++) {
            if (isCenter) {
                temp.push("*");
            } else {
                if (j > 0 && j < (limit - 1)) {
                    temp.push("=");
                } else {
                    temp.push("*");
                }
            }
        }
        console.log(temp.join(" "));
    }
}

cetak_gambar(5)



