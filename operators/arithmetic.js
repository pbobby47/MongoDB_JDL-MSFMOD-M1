/* 
! ARITHMETIC OPERATORS:
    These operators are used to perform mathematical operations on numeric fields.
    They are:
        1. $add:
            To perfrom sum of numbers
            Syntax: $add : [operand1 , operand2 , operand3 , ...]

        2. $subtract:
            To perform subtraction b/w numbers
            Syntax: $subtract: [operand1 , operand2]

        3. $multiply:
            To perform multiplication of numbers
            Syntax: $multiply: [operand1 , operand2 , operand3 , ...]

        4. $divide:
            To perfrom division b/w numbers
            Syntax: $divide: [operand1 , operand2 , operand3 , ...]

        5. $mod:
            To work with modules values
            Syntax: fieldName: {$mod : [divisor , remainder]}
*/

// & WAQTD the salary of all the employee with a hike of 200.
// SQL:
// SELECT SAL , SAL + 200 AS NEWSAL
// FROM EMP;

// mongodb:
db.emp.find({}, { _id: 0, sal: 1, newSal: { $add: ["$sal", 200] } }, {});

// & WAQTD the salary of all the employee with a hike of 150.
db.emp.find({}, { _id: 0, sal: 1, hikeSal: { $add: ["$sal", 150] } }, {});

// & WAQTD the salary of all the employee with a hike of 150 and 350 and 450.
db.emp.find(
  {},
  { _id: 0, sal: 1, hikesal: { $add: ["$sal", 150, 350, 450] } },
  {}
);

// & WAQTD the salary of all the employee with a deduction of 200.
// SQL:
// SELECT SAL , SAL - 200 AS NEWSAL
// FROM EMP;

// mongodb:
db.emp.find({}, { _id: 0, sal: 1, newSal: { $subtract: ["$sal", 200] } }, {});

// & WAQTD the salary of all the employee with a deduction of 150.
db.emp.find({}, { _id: 0, sal: 1, newSal: { $subtract: ["$sal", 150] } }, {});

// & WAQTD the salary of all the employee with a deduction of 150 and 350 and 450.
db.emp.find(
  {},
  { _id: 0, sal: 1, newSal: { $subtract: ["$sal", 150, 350, 450] } },
  {}
); //! MongoServerError[Location16020]: Expression $subtract takes exactly 2 arguments. 4 were passed in.

// & WAQTD the double salary of each employee
db.emp.find(
  {},
  { _id: 0, sal: 1, doubleSal: { $multiply: [5, 40, 10, 20] } },
  {}
);
db.emp.find({}, { _id: 0, sal: 1, doubleSal: { $multiply: ["$sal", 2] } }, {});

// & WAQTD the trible salary of each manager
db.emp.find(
  { job: "manager" },
  { _id: 0, sal: 1, thribleSal: { $multiply: ["$sal", 3] } },
  {}
);

// & WAQTD the details after deduction of half salary.
db.emp.find({}, { _id: 0, sal: 1, newSal: { $divide: [4, 2] } }, {});
db.emp.find({}, { _id: 0, sal: 1, newSal: { $divide: [24, 4] } }, {});
db.emp.find({}, { _id: 0, sal: 1, newSal: { $divide: [24, 5] } }, {});
db.emp.find({}, { _id: 0, sal: 1, newSal: { $divide: [24, 5] } }, {});
db.emp.find({}, { _id: 0, sal: 1, newSal: { $divide: ["$sal", 2] } }, {});

// & WAQTD the details of even empno employees.
db.emp.find({ empno: { $mod: [2, 0] } }, {}, {});

// & WAQTD the details of odd empno employees.
db.emp.find({ empno: { $mod: [2, 1] } }, {}, {});
db.emp.find({ empno: { $mod: [2, 1] } });

// ! ============ Task ================
// === $add ===
// & Q) WAQTD ename, salary of the employees with the hike of 200 dollars.

// & Q) WAQTD ename, salary of the employees with the hike of 250 dollars.

// & Q) WAQTD ename, salary, comm of the employees with the comm hike of 50 dollars.
db.emp.find(
  {},
  { _id: 0, ename: 1, sal: 1, comm: { $add: ["$comm", 50] } },
  {}
);

// Above query is correct unless the $comm is null.
// To handle null values in a better way
// $ifNull: To check if the value is null or not. If null  substitutes an alternate value else no changes.
// Syntax: $ifNull: ["$fieldName" , value]

// & Q) WAQTD ename, salary, comm of the employees with the comm hike of 50 dollars AND if anyone with no comm provide the 0 as default.
db.emp.find(
  {},
  { _id: 0, ename: 1, sal: 1, comm: { $add: [{ $ifNull: ["$comm", 0] }, 50] } },
  {}
);

// === $subtract ===
// & Q) WAQTD the salary with 50$ deduction.

// & WAQTD the name and salary with 100$ penalty.

// & Q) WAQTD the name, job, and deducted salary(200$) of all salesman.

// === $multiply ===
// & Q) WAQTD the name , salary and annual salary of an employee.

// & Q) WAQTD the name , salary and half yearly salary of an employee.

// & Q) WAQTD the name , salary and quarterly salary of an employee.

// & WAQTD the name , salary , comm and thrice comm of all the employees.
db.emp.find(
  {},
  {
    _id: 0,
    ename: 1,
    sal: 1,
    comm: 1,
    thriceComm: { $multiply: ["$comm", 3] },
  },
  {}
);

db.emp.find(
  {},
  {
    _id: 0,
    ename: 1,
    sal: 1,
    comm: 1,
    thriceComm: { $multiply: [{ $ifNull: ["$comm", 0] }, 3] },
  },
  {}
);

// === $divide ===
// & WAQTD the name, salary and per day salary.

// & Q) WAQTD the name, salary and 15 days salary.

// === $mod ===
// & Q) WAQTD empno , ename of all the employees whose empno number is odd digit.

// & Q) WAQTD empno , ename of all the employees whose empno number is even digit.

// & Q) WAQTD the name ,salary and annual_sal with a hike of 100.
