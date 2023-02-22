const button = document.querySelector(".submit-btn");
const inputDiv = document.querySelector(".input-number");
const showResult = document.querySelector(".show-result");

inputDiv.addEventListener("input", (e) => {
  const inputValue = Number(e.target.value);
  // kiểm tra điều kiện isNumber
  if (Number.isInteger(inputValue) == true && inputValue >= 0) {
    ChuyenSoThanhChu(inputValue);
  } else {
    alert("Vui lòng nhập số đầu vào là 1 số nguyên !");
    showResult.innerHTML ='None'
  }
});

const ChuyenSoThanhChu = (number) => {
  if (number >= 0 && number < 1000) {
    const hangTram = Math.floor(number / 100);
    const hangChuc = Math.floor((number % 100) / 10);
    const hangDonVi = number % 10;

    // 3 trường hợp
    //  ---------   in số đơn vị     ---------
    if (number >= 0 && number < 10) {
      showResult.innerHTML = translateNumber(number);
      //  ---------   IN SỐ HÀNG CHỤC     ---------
    } else if (number >= 10 && number < 100) {
      var inSoHangChuc =
        translateNumber(hangChuc) + " Mươi " + translateNumber(hangDonVi);
      // 1TH đặc biệt:
      // Mười một, hai, ba
      if (hangChuc == 1) {  
        inSoHangChuc = "Mười " + translateNumber(hangDonVi);
        // lại thêm 1 trường hợp đặc biệt
        if (hangDonVi == 0) inSoHangChuc = "Mười.";
      }
      // lại có thêm 1 th đặc biệt
      if (hangDonVi == 0 && hangChuc != 1) {
        inSoHangChuc = translateNumber(hangChuc) + " Mươi ";

      }
      showResult.innerHTML = inSoHangChuc;

      //  ---------   IN SỐ HÀNG TRĂM     ---------
    } else if (number >= 100 && number <= 999) {
      var inSoHangTram = 0;
      // 3 trường hợp
      // 9 mười 1
      if (hangChuc == 1) {
        inSoHangTram =
          translateNumber(hangTram) +
          " Trăm " +
          "Mười " +
          translateNumber(hangDonVi);
      }
      // 9 lẻ 1
      else if (hangChuc == 0) {
        inSoHangTram =
          translateNumber(hangTram) +
          " Trăm " +
          "Lẻ " +
          translateNumber(hangDonVi);
      }
      // 9 trăm hai mươi ->  chín mươi
      else {
        inSoHangTram =
          translateNumber(hangTram) +
          " Trăm " +
          translateNumber(hangChuc) +
          " Mươi " +
          translateNumber(hangDonVi);
      }
// in kết quả
      showResult.innerHTML = inSoHangTram;
    }
  } else {
    showResult.innerHTML ='None'
    alert("Vui lòng nhập số nằm trong khoảng [0,999]");
  }
};

const translateNumber = (number) => {
  switch (number) {
    case 0:
      return "Không";
      break;
    case 1:
      return "Một";
      break;
    case 2:
      return "Hai";
      break;
    case 3:
      return "Ba";
      break;
    case 4:
      return "Bốn";
      break;
    case 5:
      return "Năm";
      break;
    case 6:
      return "Sáu";
      break;
    case 7:
      return "Bảy";
      break;
    case 8:
      return "Tám";
      break;
    case 9:
      return "Chín";
      break;
    default:
      console.log("error in translateNumber");
  }
};

// Trường hợp:
// ------------ HÀNH ĐƠN VỊ ------------
/**
 * 0: không
 * 1: một
 * 2: hai
 * 3: ba
 * 4: bốn
 * 5: năm
 * 6: sáu
 * 7: bảy
 * 8: tám
 * 9: chín
 * ------------ HÀNH CHỤC ------------
 * 10: mười 0
 * 11: mười một
 * 12: mười hai
 * ------------
 * 20: hai mười 0
 * 21: hai mươi mốt
 * 22: hai mươi hai
 * ------------
 * 30: ba mươi 0
 * 31: ma mươi mốt
 * 32: ba mươi hai
 * ...
 *
 *
 *
 *
 *
 *
 * ------------ HÀNH TRĂM ------------
 * trăm lẻ 1
 * trăm lẻ 2
 * -------- 
 * trăm mười 1
 * trăm mười 2
 * trăm mười 3
 * 
 * 
 * 
 * 
 * ---------- 
 * trăm hai mốt 
 * trăm hau hai
 *  */
