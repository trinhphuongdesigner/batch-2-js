var firstName;
var middleName;
var lastName;

firstName = 'Trịnh';
middleName = 'Đình';
lastName = 'Phương';
var age = 2023 - 1996;
var tuoiMu = 2;
age += tuoiMu;

var fullName = firstName + ' ' + middleName + ' ' + lastName;

var description = 'Tôi tên là: ' + lastName + '. Tên đầy đủ là ' + fullName + '. Năm nay tôi ' + age + ' tuổi.' 
// console.log(description);

var a = 5;
var b = '5';
var c = true;

// console.log('««««« a == b »»»»»', a == b);
// console.log('««««« a != b »»»»»', a != b);

// console.log('««««« a === b »»»»»', a === b);
// console.log('««««« a !== b »»»»»', a !== b);

// console.log('««««« a == c »»»»»', a == c);
// console.log('««««« a === c »»»»»', a === c);

// console.log('««««« b »»»»»', b);
// console.log('««««« Number(b) »»»»»', Number(b));

// console.log('««««« Boolean(0) »»»»»', Boolean(0));
// console.log('««««« Boolean(-1) »»»»»', Boolean(-1));
// console.log('««««« Boolean(1) »»»»»', Boolean(1));
// console.log('««««« Boolean(2) »»»»»', Boolean(2));
// console.log('««««« Boolean(3) »»»»»', Boolean(3));

// console.log('««««« 0 »»»»»', Boolean('0'));
// console.log('«««««  »»»»»', Boolean(''));

// const d = 0;
// console.log('««««« d »»»»»', Boolean(String(d)));

// == => Giá trị bằng nhau thì => true (không quan tâm đến kiểu dữ liệu)
// != => Giá trị bằng nhau thì => false (không quan tâm đến kiểu dữ liệu)

// === => Giá trị bằng nhau và kiểu dữ liệu giống nhau => true
// !== => Giá trị bằng nhau và kiểu dữ liệu giống nhau => false
// console.log('««««« 5 == 5 »»»»»', 5 == '5'); // = =
// console.log('««««« 5 != 5 »»»»»', 5 != '5'); // ! =
// console.log('««««« 5 === 5 »»»»»', 5 === 5); // = = =
// console.log('««««« 5 !== 5 »»»»»', 5 !== 5); // ! = =

// console.log('««««« 0 »»»»»', 0);
// console.log('««««« Boolean(0) »»»»»', Boolean(0));
// console.log('««««« !0 »»»»»', !0);
// console.log('««««« !!1 »»»»»', !!1);
// console.log('««««« !!2 »»»»»', !!2);
// console.log('««««« !!3 »»»»»', !!3);

// console.log('««««« Boolean(null) »»»»»', Boolean(null));
// console.log('««««« Boolean(undefined) »»»»»', Boolean(undefined));
// console.log('««««« !!null »»»»»', !!null);
// console.log('««««« !!undefined »»»»»', !!undefined);

// console.log('««««« a && b »»»»»', !(a && b));

// console.log('««««« xxxx »»»»»', undefined || null);
// console.log('««««« a || b »»»»»', (undefined || null) && 'anh phuong dep zai lan 2');

// nếu lương <= 11tr không cần đóng thuế. Nếu lương lớn hơn 11tr nhưng nhỏ hơn hawocj bằng 16tr thì đóng 5% của mức lớn hơn 11tr. nếu lương lớn hơn 16tr => đóng 5% của 5tr + 10% của mức vượt 16tr.

// <= 11 thuế  = 0
// <= 16 thuế  = 5% n - 11
// > 16 = 5% của 5tr  + 10%

var salary = 10000000;
var tax;

// if (salary <= 11000000) {
//   tax = 0;
// } else if (salary <= 16000000) {
//   tax = (salary - 11000000) * 0.05;
// } else {
//   tax = ((salary - 16000000) * 0.1) + 5000000 * 0.05 ;
// }

if (salary <= 11000000) {
  tax = 0;
}

if (salary <= 16000000) {
  tax = (salary - 11000000) * 0.05;
} 

if (16000000 < salary) {
  tax = ((salary - 16000000) * 0.1) + 5000000 * 0.05 ;
}

console.log('««««« tax »»»»»', tax);

// var elm = document.getElementById('root');
// root.innerHTML = description;
