var strings = ['P', 'R', 'O', 'G', 'R', 'A', 'M', 'M', 'E', 'R'];

function cetak_gambar() {
  for (var i = 0; i < strings.length; i++) {
    var strIdx_1 = i;
    var strIdx_2 = strings.length - (i + 1);
    let temp = [];
    for (var j = 0; j < strings.length; j++) {
      if (j === strIdx_1 || j === strIdx_2) {
        temp.push(strings[i]);
      } else {
        temp.push("=");
      }
    }
    console.log(temp.join(" "));
  }
}

cetak_gambar();