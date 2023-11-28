// var batch02 = {
//   startDate: '',
//   teacher : {},
//   students: [
//     {
//       name: 'phuong',
//       age: 28,
//     },
//     {
//       name: 'phuong2',
//       age: 27,
//     },
//     {
//       name: 'phuong3',
//       age: 26,
//     },
//     {
//       name: 'phuong4',
//       age: 25,
//     },
//     {
//       name: 'phuong5',
//       age: 24,
//     },
// ]
//   // students: ['abc']
// };

// batch02.startDate = '20/9/2023';
// batch02.teacher.name = 'Phuong';
// batch02.teacher.firstName = 'Trinh';
// batch02.teacher.age = 28;

// // batch02.students.push('thinh')
// // batch02.students.push('thai')
// // batch02.students.push('phuong')
// batch02.students.push({
//   name: 'thinh',
//   age: 20,
// })

// batch02.students.pop()
// batch02.students.unshift('hung')
// batch02.students.shift()

// for (i = 0; i <= batch02.students.length - 1; ++i) {
//   console.log('«««««  »»»»»', batch02.students[i].name);
// }

// let i = 0;
// do {
//   console.log('«««««  »»»»»', batch02.students[i].name);
//   ++i
// } while (i < batch02.students.length)

// batch02.students.forEach((student, index) => {
//   console.log(`««««« ${index + 1} »»»»»`, student.name);
// });

// batch02.students.map((student, index) => {
//   // student = batch02.students[index]
//   console.log(`««««« ${index + 1} »»»»»`, student.name);
// });

// for (var i in arr) {
//   console.log(i); // logs "0", "1", "2", "foo"
// }

// for (var i of arr) {
//   console.log(i); // logs "3", "5", "7"
//   // it doesn't log "3", "5", "7", "hello"
// }

var university = [
  [
    {
      name: 'phuong',
      description: 'trinh phuong',
    },
    {
      name: 'thai',
      description: 'van thai',
    }
  ],
  [
    {
      name: 'phuong',
      description: 'hoang phuong',
    },
    {
      name: 'hai',
      description: 'hoang hai',
    }
  ],
  [
    {
      name: 'hung',
      description: 'hoang hung',
    },
    {
      name: 'thinh',
      description: 'van thinh',
    }
  ],
]

// [
//   [1,2,3],1
//   [4,5,6],2
//   [7,8,9],3
// ]

// for (var i = 0; i < university.length; ++i){
//   for (var j = 0; j < university[i].length; ++j){
//     console.log('«««««  »»»»»', university[i][j].name);
//   }
// }

university.forEach((item, index) => {
  item.forEach((student, index2) => {
    console.log('««««« student.name »»»»»', student.name)
  })
});

// university.forEach((classs, index) => {
//   classs.forEach((student) => console.log('««««« student.name »»»»»', student.name))
// });

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let tong = 0;
// arr1.forEach((num) => {
//   tong += num;
// })
// arr1.forEach((num, idx) => {
//   tong += arr1[idx];
// })


// tinhs tongr cuar arr1 bang map or foreach

const arr2 = [ arr1, arr1, arr1]

const arr3 = [arr2, arr2, arr2]

console.log('««««« arr3 »»»»»', arr3);

let tich = 1;
arr3.forEach(ba => {
  ba.forEach(hai => {
    hai.forEach(mot => {
      if (mot !== 0) {
        tich *= mot;
      }
    })
  })
})


console.log('««««« tich »»»»»', tich);

