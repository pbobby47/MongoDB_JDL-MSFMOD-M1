// ! =================== Regular Expression ==================
/*
Regex --> Regular Expression
Regular Expressions are available  in all programming languages 
and similarly in mongodb too.
$regex operator is used to write regex.
$regex operator is used to write a pattern.
Based on pattern we can shortlist the documents.
It is very text-based searches.

Syntax: { filedName : {$regex: / pattern / } }

text starts with ---> use ^ symbol -----> Ex: starts with s -->  / ^s /
text ends with ---> use $ symbol -----> Ex: starts end s -->  / s$ /
for single character ---> use . symbol
for double characters ---> use .. symbol
for triple characters ---> use ... symbol
for four characters ---> use .... symbol
and so on
for unknown characters ---> use .* symbol

for case -insensentive ---> /pattern/i
*/

// & WAQTD the names of the employees whose names starts with "s".
db.emp.find({ ename: { $regex: /^s.*/ } }, { _id: 0, ename: 1 }, {});

// & WAQTD the names of the employees whose names ends with "n".
db.emp.find({ ename: { $regex: /.*n$/ } }, { _id: 0, ename: 1 }, {});

// & WAQTD the names of the employees whose names ends with "s".
db.emp.find({ ename: { $regex: /.*s$/ } }, { _id: 0, ename: 1 }, {});

// & WAQTD the names of the employees whose names ends with "S".
db.emp.find({ ename: { $regex: /.*S$/ } }, { _id: 0, ename: 1 }, {});

// & WAQTD the names of the employees whose names ends with "S" or "s".
db.emp.find({ ename: { $regex: /.*s$|.*S$/ } }, { _id: 0, ename: 1 }, {});

// & WAQTD the names of the employees whose names ends with "s" or "r" or "n".
db.emp.find({ ename: { $regex: /.*s$|.*r$|.*n$/ } }, { _id: 0, ename: 1 }, {});

// & WAQTD the names of the employees whose names ends with "S" or "s".
db.emp.find({ ename: { $regex: /.*s$/i } }, { _id: 0, ename: 1 }, {});

// & WAQTD the names of employees who contains "a" in their names.
db.emp.find({ ename: { $regex: /.*a.*/ } }, { _id: 0, ename: 1 }, {});

// & WAQTD the names of employees who contains "a" as second character of their names.
db.emp.find({ ename: { $regex: /^.a.*/ } }, { _id: 0, ename: 1 }, {});

// & WAQTD the names of employees who contains "t" in their names.
db.emp.find({ ename: { $regex: /.*t.*/ } }, { _id: 0, ename: 1 }, {});

// & WAQTD the names of employees who contains "t" in their names as 2nd last character.
db.emp.find({ ename: { $regex: /.*t.$/ } }, { _id: 0, ename: 1 }, {});

// & WAQTD the names of employees who contains 2 "t"'s in their names.
db.emp.find({ ename: { $regex: /.*t.*t.*/ } }, { _id: 0, ename: 1 }, {});

// & WAQTD the names of employees who contains 2 continues "t" in their names.
db.emp.find({ ename: { $regex: /.*tt.*/ } }, { _id: 0, ename: 1 }, {});

// & WAQTD the names of employees who contains "a" and "m" in their names.
db.emp.find({ ename: { $regex: /.*a.*m.*/ } }, { _id: 0, ename: 1 }, {});

// & WAQTD the names of employees who contains  2 "a"'s in their names.
db.emp.find({ ename: { $regex: /.*a.*a.*/ } }, { _id: 0, ename: 1 }, {});

// & WAQTD the names of employees who contains 2 continues "l" in their names.
// & WAQTD the names of employees who starts with "a" and ends with "s" in their names.
// & WAQTD the names of employees who job contains "man".
// & WAQTD the names of employees who name has exactly 4 characters.
// & WAQTD the names of employees who name has exactly 4 characters.
// & WAQTD the names of employees who name has "l" as 3rd character.
// & WAQTD the names of employees who name ends with "r" and contains exactly 6 characters.
// & WAQTD the names of employees whose name starts with "t" and 4th character is n and second last character is "e" and total lenght is 6.
// & WAQTD the names of employees whose name contains "a" followed by any 2 characters
db.emp.find({ ename: { $regex: /a.{2}/ } }, { _id: 0, ename: 1 }, {});
db.emp.find({ ename: { $regex: /a../ } }, { _id: 0, ename: 1 }, {});

// & WAQTD the job title contains 4 character exactly
db.emp.find({ job: { $regex: /^.{4}$/ } }, { _id: 0, ename: 1, job: 1 }, {});
db.emp.find({ job: { $regex: /^....$/ } }, { _id: 0, ename: 1, job: 1 }, {});

// & WAQTD the job title contains 5 character exactly
db.emp.find({ job: { $regex: /^.{5}$/ } }, { _id: 0, ename: 1, job: 1 }, {});
db.emp.find({ job: { $regex: /^.....$/ } }, { _id: 0, ename: 1, job: 1 }, {});

// & WAQTD the employees names contains either "e" or "o"
db.emp.find({ ename: { $regex: /[eo]/ } }); // [] --> we can mention specific characters.

// & WAQTD the employees names contains vowels
// & WAQTD the employees names contains 2 consecutive vowels
// & WAQTD the employees names ends with "ar" or "or"

// ! ================= Escape Characters ===================
db.students.insertMany([
  {
    _id: 1,
    name: "Arjun",
    age: 18,
    address: {
      street: "123 College Ave",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    subjects: ["Mathematics", "Physics", "Chemistry"],
  },
  {
    _id: 2,
    name: "^Ria",
    age: 20,
    address: {
      street: "456 University Blvd",
      city: "Othertown",
      state: "NY",
      zip: "67890",
    },
    subjects: ["Biology", "Chemistry", "English"],
  },
  {
    _id: 3,
    name: "$Mohan",
    age: 22,
    address: {
      street: "789 Science Dr",
      city: "Bangalore",
      state: "KA",
      zip: "34567",
    },
    subjects: ["Physics", "Mathematics", "Computer Science"],
  },
  {
    _id: 4,
    name: "Sita",
    age: 21,
    address: {
      street: "101 Library Ln",
      city: "Mumbai",
      state: "MH",
      zip: "23456",
    },
    subjects: ["Literature"],
  },
  {
    _id: 5,
    name: "Rakesh$",
    age: 24,
    address: {
      street: "102 Engineering Rd",
      city: "Chennai",
      state: "TN",
      zip: "56789",
    },
  },
  {
    _id: 6,
    name: "Kiran^",
    age: 19,
    address: {
      street: "103 Science Park",
      city: "Hyderabad",
      state: "TS",
      zip: "65432",
    },
  },
]);

// to escape ^ --> \^
// to escape $ --> \$
// to escape . --> \.
// to escape * --> \*
// NOTE : by using backward slash the super power of literal will be removed and it will be consider as a character.

// & WAQTD students whose names start with the literal character ^
db.students.find({ name: { $regex: /^\^.*/ } }, { _id: 0, name: 1 }, {});

// & Find students whose names end with the literal character $
db.students.find({ name: { $regex: /.*\$$/ } }, { _id: 0, name: 1 }, {});
// here \$ --- equal to character $
// here $ --- equal to literal $

// & Find students whose names contain the literal character ^ anywhere in the name
db.students.find({ name: { $regex: /.*\^.*/ } }, { _id: 0, name: 1 }, {});

// & Find students whose names contain the literal character $ anywhere in the name
db.students.find({ name: { $regex: /.*\$.*/ } }, { _id: 0, name: 1 }, {});

// & Find students whose names start with any character followed by ^
db.students.find({ name: { $regex: /^.\^.*/ } }, { _id: 0, name: 1 }, {});
