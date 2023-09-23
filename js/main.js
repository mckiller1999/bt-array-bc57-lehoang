arrNumber = [];

//*: in ra từ input thành 1 chuỗi
document.querySelector("#btnNumber").onclick = function (a) {
  a.preventDefault();
  var input = +document.getElementById("IpNumber").value;

  arrNumber.push(input);
  document.getElementById("ketQuaNumber").innerHTML = arrNumber;
};

//1: tổng các số dương trong mảng
document.querySelector("#tinhTongArray").onclick = function (a) {
  a.preventDefault();
  var tong = sumArr(arrNumber);
  document.querySelector("#ketQuaTongArray").innerHTML =
    "Tổng số dương là: " + tong;
};

//2: đếm các số dương có trong mảng
document.querySelector("#tinhTongSoDuongArray").onclick = function (a) {
  a.preventDefault();
  var totalLength = sumN(arrNumber);
  document.querySelector("#ketQuaTongSoDuongArray").innerHTML =
    "tổng số dương trong mảng là: " + totalLength;
};

//3: tìm số nhỏ nhất mảng

document.querySelector("#btnSoMinArr").onclick = function (a) {
  a.preventDefault();
  var soMin = minNum(arrNumber);
  document.querySelector("#ketQuaMin").innerHTML = "số nhỏ nhất là: " + soMin;
};

//4: tìm số dương nhỏ nhất mảng
document.querySelector("#btnSoMinNArr").onclick = function (a) {
  a.preventDefault();
  var minNumBer = minNnumber(arrNumber);
  document.querySelector("#ketQuaMinN").innerHTML =
    "số dương nhỏ nhất là: " + minNumBer;
};

//5:tìm số chẵn trong mảng:
document.querySelector("#btnSoChan").onclick = function (a) {
  a.preventDefault();
  var timSoChan = soChan(arrNumber);
  document.querySelector("#ketQuaSoChan").innerHTML =
    "số chẵn cuối của mảng là: " + timSoChan;
};

//6:thay đổi số
document.querySelector("#btnKetQuaChange").onclick = function (a) {
  a.preventDefault();
  var numChange = +document.querySelector("#numChange").value;
  var numNew = +document.querySelector("#numNew").value;

  var change = changeNum(arrNumber, numChange, numNew);
  document.querySelector("#ketQuaChange").innerHTML =
    "kết quả sau khi đổi số: " + change;
  document.querySelector("#ketQuaNumber").innerHTML =
    "kết quả sau khi đổi số: " + change;
};

//7:sắp xếp mảng

document.querySelector("#btnKetQuaSapXep").onclick = function (a) {
  a.preventDefault();
  var ketqua = arrNumber.sort((a, b) => {
    return a - b;
  });
  document.querySelector("#ketQuaSapXep").innerHTML =
    "mảng sau khi sắp xếp: " + ketqua;
};

//8:kiểm tra Snt

document.querySelector("#btnCheck").onclick = function (a) {
  a.preventDefault();
  var check = arrNumber.find(soNt);
  if (check === undefined || check < 0) {
    check = -1;
  }

  document.querySelector("#CheckSnt").innerHTML =
    "số nguyên tố đầu tiên trong mảng là:" + check;
};

//9: tìm số nguyên trong mảng
arrNumber2 = [];

//+ in ra mảng:
document.querySelector("#btnNumber2").onclick = function (a) {
  a.preventDefault();
  var input = +document.getElementById("IpNumber2").value;

  arrNumber2.push(input);
  document.getElementById("ketQuaNumber2").innerHTML = arrNumber2;
};
//+ đếm số lượng số nguyên có trong mảng:
document.querySelector("#countNumber").onclick = function (a) {
  a.preventDefault();
  var output = sumSN(arrNumber2);
  document.querySelector("#tongSoNguyen").innerHTML =
    "số nguyên trong mảng là: " + output;
};

//10: so sánh số lượng số âm và số dương trong mảng

document.querySelector("#btnSoSanh").onclick = function (a) {
  a.preventDefault();
  var output = soSanh(arrNumber);
  document.querySelector("#ketQuaSoSanh").innerHTML = output;
};
