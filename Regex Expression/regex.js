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

// AM
// LL
// TT
// AD