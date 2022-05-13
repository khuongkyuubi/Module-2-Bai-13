var phoneNumberList = "03922327680346175234032510963903587451660335467386086568923909692404750869681539";
var arrPhoneList = [];
for (var i = 0; i < phoneNumberList.length; i += 10) {
    arrPhoneList.push(phoneNumberList.substring(i, i + 10));
}
console.log(arrPhoneList);
var viettelNumbers = [];
var vinaNumbers = [];
var mobiNumbers = [];
arrPhoneList.forEach(function (phoneNumber) {
    if (["034", "032", "086"].indexOf(phoneNumber.substring(0, 3)) > -1) {
        viettelNumbers.push(phoneNumber);
    }
    else if (["039", "035"].indexOf(phoneNumber.substring(0, 3)) > -1) {
        vinaNumbers.push(phoneNumber);
    }
    else if (["033", "096"].indexOf(phoneNumber.substring(0, 3)) > -1) {
        mobiNumbers.push(phoneNumber);
    }
});
console.log(viettelNumbers);
console.log(vinaNumbers);
console.log(mobiNumbers);
