

// Declare variables for first name, middle name, last name, age, and additional age
firstName = 'Trịnh';
middleName = 'Đình';
lastName = 'Phương';
var age = 2023 - 1996;
var tuoiMu = 2;
age += tuoiMu;

// Create a full name by concatenating the first name, middle name, and last name
var fullName = firstName + ' ' + middleName + ' ' + lastName;

// Create a description string using template literals and the variables declared above
var description = `Tôi tên là: ${lastName}. Tên đầy đủ là ${fullName}. Năm nay tôi ${age} tuổi.`;

// Log the description to the console
console.log('««««« description »»»»»', description);

// Log the length of the description to the console
console.log('««««« description.length »»»»»', description.length);

// Log the index of the first occurrence of the string 'Phương' in the description to the console
console.log('««««« description.indexOf() »»»»»', description.indexOf('Phương'));

// Log the index of the last occurrence of the string 'Phương' in the description to the console
console.log('««««« description.lastIndexOf() »»»»»', description.lastIndexOf('Phương'));

// Log the index of the first occurrence of the regular expression /Phương/ in the description to the console
console.log('««««« description.search("Phương"); »»»»»', description.search("Phương"));

// Log a boolean indicating whether the description includes the string 'Phương' to the console
console.log('««««« description.includes("Phương"); »»»»»', description.includes("Phương"));
//
//This code declares variables for the first name, middle name, last name, age, and additional age. It then creates a full name by concatenating the first name, middle name, and last name. The code also creates a description string using template literals and the variables declared above. Finally, the code logs the description, its length, the index of the first and last occurrence of the string 'Phương', the index of the first occurrence of the regular expression /Phư