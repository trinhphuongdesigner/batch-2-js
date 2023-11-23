function sum(a, b) {
  console.log('««««« a + b »»»»»', a + b);
};

// sum(3, 5); 

// function getFullName(firstName, middleName, lastName) {
//   var fullName = firstName + ' ' + middleName + ' ' + lastName;
//   return fullName;
// }
// function getFullName(firstName, lastName, middleName) {
//   var middle;
//   if (middleName) {
//     middle = middleName + ' ';
//   } else {
//     middle = '';
//   };

//   return firstName + ' ' + middle + lastName;
// }

// function getFullName(firstName, lastName, middleName) {
//   var middle = '';
//   if (middleName) {
//     middle = middleName + ' ';
//   };

//   return firstName + ' ' + middle + lastName;
// }


// function getFullName(firstName, lastName, middleName) {
//   var middle = '';
//   if (middleName) {
//     middle = middleName + ' ';
//   };

//   return firstName + ' ' + middle + lastName;
// }

var getFullName = (firstName, lastName, middleName) => {
  var middle = '';
  if (middleName) {
    middle = middleName + ' ';
  };

  return firstName + ' ' + middle + lastName;
}


// function sayHello(fullName, age = 20) {
//   var description = 'Tên đầy đủ là ' + fullName + '. Năm nay tôi ' + age + ' tuổi.' 

//   return description;
// };
var sayHello = (fullName, age = 20) => 'Tên đầy đủ là ' + fullName + '. Năm nay tôi ' + age + ' tuổi.'


// var getNamePhuong = getFullName('Trịnh', 'Đình', 'Phương');
// var sayHelloPhuong = sayHello(getNamePhuong, 28);
console.log('««««« sayHello »»»»»', sayHello(getFullName('Trịnh', 'Phương', 'Đinh'), 28));;

// viết arrow func trả về tổng hoặc hiệu, tích, thương 2 số a, b

// SUM 0
// MINUS 1
// TIMES 2
// DIVICE 3


const calculator = (num1, num2, type = 'SUM') => {
  switch (type) {
    case 'SUM':
      return num1 + num2;
    case 'MINUS':
      return num1 - num2;
    case 'TIMES':
      return num1 * num2;
    default:
      return num1 / num2;
  }
}

// console.log('«««««  »»»»»', calculator(10, 2, 'DIVICE'));
const funcName = () => {
  console.log('«««««  »»»»»', calculator(10, 2, 'DIVICE'));
}

setTimeout(funcName, 3000);

setInterval(funcName, 3000);
// setInterval(function(){
//   alert("Chào mừng bạn đến với freetuts.net");
// }, 3000);



