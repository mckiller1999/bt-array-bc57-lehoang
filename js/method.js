//tính tổng arr
function sumArr(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
//đếm tổng số dương
function sumN(arr) {
  return arr.filter((number) => number > 0).length;
}

//tìm số nhỏ nhất
function minNum(arr) {
  return Math.min.apply(null, arr);
}

//tìm số dương nhỏ nhất
function minNnumber(arr) {
  var min = Infinity;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

//tìm số chẵn cuối cùng trong mảng
function soChan(arr) {
  var soChan = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      soChan = arr[i];
    }
  }
  return soChan;
}

//sắp xếp
function sapXep(arr) {
  var ketqua = arr.sort((a, b) => {
    return a - b;
  });
  return ketqua;
}

//thay đổi số trong mảng
function changeNum(arr, indexChange, indexNew) {
  var iChange = indexChange;
  var iNew = indexNew;

  var iUpdate = -1;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == iChange) {
      arr[i] = iNew;
      iUpdate = i;
    }
  }
  if (iUpdate === -1) {
    alert("ko tìm thấy giá trị");
  }

  return arr;
}

//tìm số nguyên tố trong mảng

//kiểm tra SNT
function checkSnt(n) {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

//duyệt qua vòng lặp mảng
function logSnt(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (checkSnt(arr[i]) == true) {
      return arr[i];
    }
  }

  return -1;
}

//tổng số ngyên trong mảng
function sumSN(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      sum++;
    }
  }
  return sum;
}

//so sánh số lượng số âm và số dương trong mảng

function soSanh(arr) {
  var soDuong = 0;
  var soAm = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      soDuong++;
    } else {
      soAm++;
    }
    var ketQua = "";
    if (soDuong > soAm) {
      ketQua = "Số Dương > Số Âm";
    } else if (soDuong < soAm) {
      ketQua = "Số Dương < Số Âm";
    } else {
      ketQua = "số lượng 2 số bằng nhau";
    }
  }
  return ketQua;
}
