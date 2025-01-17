// ! ===== Comparision / Relational Operators ====
/*
    These Operators are used to compare values in fields to specific values to filter documents based on specific conditions.
    >>> $eq:
        It will matches values equal to specific value.
        Syntax: {field : {$eq : value}}
    >>> $ne:
    >>> $gt:
    >>> $gte:
    >>> $lt:
    >>> $lte:
    >>> $in:
        It will matches data to any of the values speicfied in an array.
        Syntax: {field : {$in : [value1 , value2 , ...] } }
    >>> $nin:
        It will matches data to none of the values speicfied in an array.
        Syntax: {field : {$nin : [value1 , value2 , ...] } }
*/

// === $eq ===
// & WAQTD of employees who are working in department no 10.
db.emp.find({ deptno: 10 }, {}, {}); // implicit way
db.emp.find({ deptno: { $eq: 10 } }, {}, {}); // explicit way

// & WAQTD of employees who are working as salesman
db.emp.find({ job: "salesman" }); // implict way
db.emp.find({ job: { $eq: "salesman" } });

// === $ne ====
// & WAQTD of employee who are not working in deptno 20.
db.emp.find({ deptno: { $ne: 20 } });

// & WAQTD of employee who are not working clerk.
db.emp.find({ job: { $ne: "clerk" } });

// === $gt ===
// & WAQTD the detials of employees who are earning more than 1000.
db.emp.find({ sal: { $gt: 1000 } });

// & WAQTD the detials of employees who are earning comm more than 500.
db.emp.find({ comm: { $gt: 500 } });

// === $gte ===
// & WAQTD the detials of employees who are earning more than or equal to 1000 .
db.emp.find({ sal: { $gte: 1000 } });

// & WAQTD the detials of employees who are earning comm more than or equal to 500.
db.emp.find({ comm: { $gte: 500 } });

// === $lt ===
// & WAQTD the detials of employees who are earning less than 1000.
db.emp.find({ sal: { $lt: 1000 } });

// & WAQTD the detials of employees who are earning comm less than 500.
db.emp.find({ comm: { $lt: 500 } });

// === $lte ===
// & WAQTD the detials of employees who are earning less than 1000.
db.emp.find({ sal: { $lte: 1000 } });

// & WAQTD the detials of employees who are earning comm less than 500.
db.emp.find({ comm: { $lte: 500 } });

// === $in ====
// & WAQTD the details who are working in dept no 10, 20.
db.emp.find({ deptno: { $eq: 10 } }); // this is possible only for 10
db.emp.find({ deptno: { $eq: 20 } }); // this is possible only for 20
db.emp.find({ deptno: { $in: [10, 20] } });

// & WAQTD the details who are working as analyst or manager
db.emp.find({ job: { $in: ["analyst", "manager"] } });

// & WAQTD the details who are working in deptno 10 or as a salesman or as a clerk
// Not Possible
// When to use $in ---- if we want to check the details of single field then we have to use it.

// & WAQTD the details who are working as analyst or manager or clerk.
db.emp.find({ job: { $in: ["analyst", "manager", "clerk"] } });

// === $nin ====
// & WAQTD the details who are not working in dept no 10, 20.
db.emp.find({ deptno: { $nin: [10, 20] } });

// & WAQTD the details who are not working as analyst or manager
db.emp.find({ job: { $nin: ["analyst", "manager"] } });

// & WAQTD the details who are not working as salesman or president or clerk.
db.emp.find({ job: { $nin: ["salesman", "president", "clerk"] } });

// ! === TASK ====
// === $eq ===
// ? Q) WAQTD the details of the employees who belongs to department 10.

// ? Q) WAQTD the details of the employees who belongs to department 20.

// ? Q) WAQTD the details of the employees whose job is manager.

// ? Q) WAQTD the details of the employees whose job is clerk.

// ? Q) WAQTD the details of the employees whose name is blake.

// ? Q) WAQTD the details of the employees who are earning exactly 3000.

// ? Q) WAQTD the details of the employees who are earning exactly 1500.

// ? Q) WAQTD the details of the employees whose mgrno is exactly 7788.

// ? Q) WAQTD the details of the employees whose empno is exactly 7788.

// === $ne ===
// ? Q) WAQTD the details of the employees who are not belongs to department 10.

// ? Q) WAQTD the details of the employees who are not belongs to department 20.

// ? Q) WAQTD the details of the employees who are not working as manager.

// ? Q) WAQTD the details of the employees who are not working as clerk.

// ? Q) WAQTD the details of the employees whose name is not blake.

// ? Q) WAQTD the details of the employees who are not earning exactly 3000.

// ? Q) WAQTD the details of the employees who are not earning exactly 1500.

// ? Q) WAQTD the details of the employees whose mgrno is not exactly 7788.

// ? Q) WAQTD the details of the employees whose empno is not exactly 7788.

// === $gt ===
// ? Q) WAQTD the details of the employees who are earning more than 3000.

// ? Q) WAQTD the details of the employees who are earning more than 1000.

// ? Q) WAQTD the details of the employees who are earning more than 500 as commision.

// ? Q) WAQTD the details of the employees who are joined after 01-MAY-81.

// ? Q) WAQTD the details of the employees who joined after 1981.

// === $gte ===
// ? Q) WAQTD the details of the employees who are earning 3000 or more.

// ? Q) WAQTD the details of the employees who are earning 1000 or more.

// ? Q) WAQTD the details of the employees who are earning 500 or more as commision.

// ? Q) WAQTD the details of the employees who joined on or after 01-MAY-81.

// ? Q) WAQTD the details of the employees who joined on or after 1981.

// === $lt ===
// ? Q) WAQTD the details of the employees who are earning less than 3000.

// ? Q) WAQTD the details of the employees who are earning less than 1000.

// ? Q) WAQTD the details of the employees who are earning less than 500 as commision.

// ? Q) WAQTD the details of the employees who joined before 01-MAY-81.

// ? Q) WAQTD the details of the employees who joined before 1981.

// === $lte ===
// ? Q) WAQTD the details of the employees who are earning 3000 or less.

// ? Q) WAQTD the details of the employees who are earning 1000 or less.

// ? Q) WAQTD the details of the employees who are earning 500 or less as commision.

// ? Q) WAQTD the details of the employees who joined on or before 01-MAY-81.

// ? Q) WAQTD the details of the employees who joined on or before 01-JAN-1981.

// === $in ===
// ? Q) WAQTD the details of the employees who are working in department 10 or 30.

// ? Q) WAQTD the details of the employees who are working in department 10 or 20.

// ? Q) WAQTD the details of the employees who are working as manager or president or analyst.

// ? Q) WAQTD the details of the employees who are working as clerk or salesman or analyst.

// ? Q) WAQTD the details of the employees whose name is smith or jones or scott or miller.

// ? Q) WAQTD the details of the employees whose salary is 800 or 3000 or 5000 or 1500.

// ? Q) WAQTD the details of the employees who are reporting to 7698 or 7788 or 7566.

// ? Q) WAQTD the details of the employees who joined on 01-MAY-81 or 03-DEC-81 or 02-APR-81.

// ? Q) WAQTD the name , job , deptno of all the employees who are working as manager , analyst , president.

// ? Q) WAQTD NAMES OF EMPLOYEES WORKING IN DEPT 10 , 20 , 30 , 40

// ? Q) WAQTD DETAILS OF EMPLOYEES WORKING AS CLERK OR MANAGER IN DEPT 10

// === $nin ===
// ? Q) WAQTD the details of the employees who are not working in department 10 or 30.

// ? Q) WAQTD the details of the employees who are not working in department 10 or 20.

// ? Q) WAQTD the details of the employees who are not working as manager or president or analyst.

// ? Q) WAQTD the details of the employees who are not working as clerk or salesman or analyst.

// ? Q) WAQTD the details of the employees whose name is neither smith nor jones nor miller.

// ? Q) WAQTD the details of the employees whose salary is neither 800 nor 3000 nor 5000 nor 1500.

// ? Q) WAQTD the details of the employees who are not required to report 7698, 7788, 7566.

// ? Q) WAQTD the details of the employees who are joined on except these dates 01-MAY-81 or 03-DEC-81 or 02-APR-81.
