// for(n = 0; n < 10; ++n) {
//   console.log('««««« n »»»»»', n);
// }

// let n = 0;
// while (n < 10) {
//   console.log('««««« n »»»»»', n);
//   ++n
// }

// let n = 100;

// do {
//   console.log('««««« n »»»»»', n);
//   ++n
// } while (n < 10) 

// for(n = 10; n > 0; --n) {
//   console.log('««««« n »»»»»', n);
// }
// viết arrow func trả về tính n giai thừa.

// tinh tong tu 0 - n neeu co 4 thi bo qua

// const func = (n) => {
//   let result = 0;
//   for(i = 0; i <= n; ++i) {
//     if (i === 4) {
//       continue;
//     }
//     result += i;
//   };
//   return result;
// }

const func = (n) => {
  let result = 0;
  for(i = 0; i <= n; ++i) {
    if (i === 10) {
      break;
    }
    result += i;
  };
  return result;
}

console.log('««««« func() »»»»»', func(1100));