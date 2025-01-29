// ! ================ Aggregation ==============
/*!
Aggregation allows us to perform and transform collections of documents in a flexible way.
using Pipelines, we can perform various data manipulations, including flitering, grouping, sorting, projecting, etc.
An aggregation pipline is a sequence of stages that process data in steps.
Each stage in the pipeline performs an operation on the data.

//? Syntax: 
db.collectionName.aggregate([
    // stage 1
    {
        $pipeline1 :  {
            ....
        }
    },

    // stage 2
    {
        $pipeline2 :  {
            ....
        }
    },

    // stage 3
    {
        $pipeline3 :  {
            ....
        }
    },
    . 
    .
    . 
    // stage N
    {
        $pipelineN :  {
            ....
        }
    },
])

Note: Aggregate() method is nothing but find() method with more facilities.

Aggregate() is similar to the find().
It will provide a lot more stages than the find method. 
Pipeline stages are:
        >>> $match
        >>> $project
        >>> $addFields
        >>> $group
        >>> $match
        >>> $sort
        >>> $limit
        >>> $skip
        >>> $unwind
        >>> $lookup
*/

// ! ======================= $match ========================
/*
It is similar to WHERE clause in SQL.
It is similat to the first parameter of the find method.
It will iterate through each and every document in a collection and it will filter the data based on $match condition.
Syntax: 
    $match : {
        field1 : value1 ,
        field2 : value2 ,
        field3 : value3 ,
        ...
        fieldN : valueN ,
    }
*/

// & WAQTD the details of the employees. (without $match)
// SQL:
// SELECT *
// FROM EMP;

// find():
db.emp.find();

// aggregate():
db.emp.aggregate();
db.emp.aggregate([]);

// & WAQTD the details of the employees who are working in dept no.10
// SQL:
// SELECT *
// FROM EMP
// WHERE DEPTNO = 10;

// find():
db.emp.find({ deptno: 10 });

// aggregate():
db.emp.aggregate([
  {
    $match: {
      deptno: 10,
    },
  },
]);

// & WAQTD the details of the employees who are working as manager.
// SQL:
// SELECT *
// FROM EMP
// WHERE JOB = "MANAGER";

// find():
db.emp.find({ job: "manager" });

// aggregate():
db.emp.aggregate([
  {
    $match: {
      job: "manager",
    },
  },
]);

// & WAQTD the details of the employees whose name is JONES.
// SQL:
// SELECT *
// FROM EMP
// WHERE ENAME = "JONES";

// find():
db.emp.find({ ename: "jones" });

// aggregate:
db.emp.aggregate([
  {
    $match: {
      ename: "jones",
    },
  },
]);

// & WAQTD the details of the employees who are reporting to 7698.
// SQL:

// find():

// aggregate():

// & WAQTD the details of the employee who are hired after 01-JAN-81.
// SQL:
// SELECT *
// FROM EMP
// WHERE HIREDATE >= ('01-JAN-81');

// find():
db.emp.find({
  hiredate: {
    $gte: new Date("1981 jan 01"),
  },
});

// aggregate():
db.emp.aggregate([
  {
    $match: {
      hiredate: {
        $gte: new Date("1981 jan 01"),
      },
    },
  },
]);

// & WAQTD the details of the employees who are working in dept no.10 or 20.
// SQL:
// SELECT *
// FROM EMP
// WHERE DEPTNO = 10 OR DEPTNO = 20;

// SQL:
// SELECT *
// FROM EMP
// WHERE DEPTNO IN (10,20);

// find():
db.emp.find({
  $or: [{ deptno: 10 }, { deptno: 20 }],
});

// find():
db.emp.find({
  deptno: { $in: [10, 20] },
});

// & WAQTD the details of the employees who are working as analyst
// & WAQTD the details of the employees who are working as salesman
// & WAQTD the details of the employees who are working as manager or clerk
// & WAQTD the details of the employees who are working as manager in deptno 20
// & WAQTD the details of the employees who are working as clerk in deptno 30
// & WAQTD the details of the employees who are earing more than 1000.
// & WAQTD the details of the employees who are earing less than 3000.
// & WAQTD the details of the employees who are earing in between 1500 and 3500.
// & WAQTD the details of the employees who are earing more than 2500 as a manager
// & WAQTD the details of the employees who are earing more than 1000 as a salesman
// & WAQTD the details of the employees who are earing commision.
// & WAQTD the details of the employees who are earing commision and in dept no 30.
// & WAQTD the details of the employees who are reporting to 7839.
// & WAQTD the details of the employees who are reporting to 7788 or 7839.
// & WAQTD the details of the employees who are not reporting anyone.
// & WAQTD the details of the employees who are hired after 01-jan-81
// & WAQTD the details of the employees who are hired before 30-nov-85
// & WAQTD the details of the employees who are hired after 01-may-82 and before 30-june-84.
// & WAQTD the details of the employees who are working manager or analyst in deptno 20.
// & WAQTD the details of the employees who are working clerk or salesman in deptno 10 or 30.

// ! ======================= $project ========================
/*
It is similar to the SELECT CLAUSE in SQL.
It is similar to the 2nd paramter of the find() method.
It will dicide what to display and what not to display in the output.
It is for projection.
Syntax: 
        $project: {
            fieldName: 1,
            fieldName: 1,
            . 
            . 
            . 
            fieldName: 1,
        }

To display 1 , not to diplay 0.
*/

// & WAQTD the details of the employees.
// SQL:
// SELECT *
// FROM EMP;

// find():
db.emp.find();

// aggregate():
db.emp.aggregate();

// & WAQTD the ename and job of the employees.
// SQL:
// SELECT ENAME , JOB
// FROM EMP;

// find():
db.emp.find({}, { _id: 0, ename: 1, job: 1 }, {});

// aggregate():
db.emp.aggregate([
  {
    $project: {
      _id: 0,
      ename: 1,
      job: 1,
    },
  },
]);

// & WAQTD the ename , sal and comm of the employees.
// SQL:
// SELECT ENAME, SAL , COMM
// FROM EMP;

// find():
db.emp.find({}, { _id: 0, ename: 1, sal: 1, comm: 1 });

// aggregate():
db.emp.aggregate([
  {
    $project: {
      _id: 0,
      ename: 1,
      sal: 1,
      comm: 1,
    },
  },
]);

// & WAQTD the ename , sal of the employees who are earing more than 1500.
// SQL:
// SELECT ENAME , SAL
// FROM EMP
// WHERE SAL > 1500;

// find():
db.emp.find({ sal: { $gt: 1500 } }, { _id: 0, ename: 1, sal: 1 });

// aggregate():
db.emp.aggregate([
  {
    $match: {
      sal: {
        $gt: 1500,
      },
    },
  },
  {
    $project: {
      _id: 0,
      ename: 1,
      sal: 1,
    },
  },
]);

// & WAQTD the ename , sal , quaterlysal, halferlysal, annualsal of the employees who are working as clerk in deptno 20.
// SQL:
// SELECT ENAME , SAL , SAL * 4 AS QUATERLYSAL , SAL * 6 AS HALFERLYSAL , SAL * 12 AS ANNUALSAL
// FROM EMP
// WHERE JOB = 'CLERK' AND DEPTNO = 20;

// find():
db.emp.find(
  { job: "clerk", deptno: 20 },
  {
    _id: 0,
    ename: 1,
    sal: 1,
    quaterlySal: { $multiply: ["$sal", 4] },
    halferlySal: { $multiply: ["$sal", 6] },
    annualSal: { $multiply: ["$sal", 12] },
  }
);

// aggregate:
db.emp.aggregate([
  {
    $match: {
      job: "clerk",
      deptno: 20,
    },
  },
  {
    $project: {
      _id: 0,
      ename: 1,
      sal: 1,
      quaterlySal: { $multiply: ["$sal", 4] },
      halferlySal: { $multiply: ["$sal", 6] },
      annualSal: { $multiply: ["$sal", 12] },
    },
  },
]);

// WORKING:
// Stage 1 : $match
db.emp.aggregate([
  {
    $match: {
      job: "clerk",
      deptno: 20,
    },
  },
]);

// Stage 1 result
[
  {
    _id: ObjectId("67873947a391bc53d546b799"),
    empno: 7369,
    ename: "smith",
    job: "clerk",
    mgr: 7902,
    hiredate: ISODate("1980-12-17T00:00:00.000Z"),
    sal: 800,
    comm: null,
    deptno: 20,
  },
  {
    _id: ObjectId("67873947a391bc53d546b7a3"),
    empno: 7876,
    ename: "adams",
    job: "clerk",
    mgr: 7788,
    hiredate: ISODate("1987-05-23T00:00:00.000Z"),
    sal: 1100,
    comm: null,
    deptno: 20,
  },
];

// Stage 2: $project
// This $project will not work on entire data, instead it will work on previous stage result.

// & WAQTD the empno and names of the employees who are working in deptno 30.
// & WAQTD the name and hiredate of the employees if they hired before 1981.
// & WAQTD the name and deptno of all the employees.
// & WAQTD the name, job and hiredate of all the employees.
// & WAQTD the name , sal , 5 months salary of employees who are wokking as salesman.
// & WAQTD the name , sal , 5 months salary of employees who are wokking as salesman.
// & WAQTD the name , job and deptno of the employees who are working in deptno 10 as clerk.
// & WAQTD ename , mgrno who are reporting to 7788 or 7839.
// & WAQTD name of employees working as clerk.
// & WAQTD name and salary of employees working as salesman.
// & WAQTD the salary of the emp who earns more than 2500.

// ! ======================= $addFields ========================
/*
It is used to add new fields in a collection.
It will not effect the original data in the database.
Syntax: { $addFields : { newFiled: expression , newFiled: expression , ... } }

we may think alias name and $addFields works similar, still there is a difference.
*/

// & WAQTD  the details of the employees along with annnual salary
db.emp.aggregate([
  {
    $addFields: {
      annualSal: { $multiply: ["$sal", 12] },
    },
  },
]);

// & WAQTD the details of the employees along with an annual sal with bonus of 2000.
db.emp.aggregate([
  {
    $addFields: {
      annualSal_bonus: {
        $add: [{ $multiply: ["$sal", 12] }, 2000],
      },
    },
  },
]);

// & WAQTD to details of salaries after an hike of 30%.
db.emp.aggregate([
  {
    $addFields: {
      sal: { $multiply: ["$sal", 1.3] },
    },
  },
]);

// & WAQTD the details of the employees who are earning more than 30,000 as thier annual salary.
// alias name:
// FROM ---> 1st
// WHERE ----> 2nd
// SELECT ---> 3rd

db.emp.aggregate([
  {
    $project: {
      ename: 1,
      job: 1,
      sal: 1,
      annualSal: { $multiply: ["$sal", 12] },
    },
  },
  {
    $match: {
      annualSal: { $gt: 30000 },
    },
  },
]);
// Here as we have only 2 stages might it works fine. But if have a lot of stages it will not work.

// addFields:
db.emp.aggregate([
  {
    $addFields: {
      annualSal: { $multiply: ["$sal", 12] },
    },
  },
  {
    $match: {
      annualSal: { $gt: 30000 },
    },
  },
  {
    $project: {
      _id: 0,
      ename: 1,
      sal: 1,
      annualSal: 1,
    },
  },
]);

// & WAQTD the name and salary of all the employees whose name start with "a".
db.emp.aggregate([
  {
    $match: {
      ename: { $regex: /^a/ },
    },
  },
  {
    $project: {
      _id: 0,
      ename: 1,
      sal: 1,
    },
  },
]);

// & WAQTD the name and salary of all the employees whose name start with "3".
db.emp.aggregate([
  {
    $addFields: {
      salary: {
        $toString: "$sal",
      },
    },
  },
  {
    $match: {
      salary: {
        $regex: /^3/,
      },
    },
  },
  {
    $match: {
      ename: "ford",
    },
  },
  {
    $project: {
      _id: 0,
      ename: 1,
      sal: 1,
    },
  },
]);

// & WAQTD name and hiredate of all the employees who are hired on feb.
// { aliasname :  { $year : "$field_name"} } --> returns year
// { aliasname :  { $month : "$field_name"} } --> returns month
// { aliasname :  { $dayOfMonth : "$field_name"} } --> day

db.emp.aggregate([
  {
    $addFields: {
      year: { $year: "$hiredate" },
      month: { $month: "$hiredate" },
      day: { $dayOfMonth: "$hiredate" },
    },
  },
  {
    $match: {
      month: 2,
    },
  },
  {
    $project: {
      _id: 0,
      ename: 1,
      hiredate: 1,
    },
  },
]);

// & Q) WAQTD the all the details of an employee along with the halferly salary.
// & Q) WAQTD all the details of the employee along with an annual bonus of 2000.
// & Q) WAQTD the employees who receive 9600 annually.
// & Q) WAQTD the annual salary of the employee whose name is smith.
// & Q) WAQTD the name and sal along with annual salary if the salary is more than 12000.
// & WAQTD the name, sal, Quarterly salary with 1000 bonus, Half Yearly Salary with 2000 bonus, yearly salary with 3000 to the employees.
// & WAQ to add new fields of job as designation, mgr as managerRef, sal as salary with hike 30% to employee collection.
// & Q) waqtd name and salary of all the employees whose salary start with 2
// & waqtd name and salary of all the employees whose salary ends with 5
// & WAQTD name and hiredate of all the employees who are hired on october.
// & WAQTD name and hiredate of all the employees who are hired on december.
// & WAQTD name and hiredate of all the employees who are hired on 1981.
// & WAQTD name and hiredate of all the employees who are hired on 1987.
// & WAQTD name and hiredate of all the employees who are hired on 20 of any month.
// & WAQTD name and hiredate of all the employees who are hired on 10 of any month.
// & WAQTD name and hiredate of all the employees who are hired on b/w the dates 5 to 15 of any month any year.
// & WAQTD name and hiredate of all the employees who are hired on b/w the dates 5 to 15 of june any year.
db.emp.aggregate([
  {
    $addFields: {
      year: { $year: "$hiredate" },
      month: { $month: "$hiredate" },
      day: { $dayOfMonth: "$hiredate" },
    },
  },
  {
    $match: {
      day: { $gte: 5, $lte: 15 },
      month: 6,
    },
  },
]);

// & WAQTD name and hiredate of all the employees who are hired on b/w the dates 5 to 15 of any month any 1981.

// ! ======================= $group ========================
/*
It groups the documents by a specific key and allows us to perform aggregation operations like sum, avg, max, min, etc.. on grouped data.
$group is used to group the documents.
Whenever we group the documents it must contain _id for unique reference.
Syntax: 
{
  $group: {
    _id: "$fieldname",
      alias_name: {$max : "$field_name"}
      alias_name: {$min : "$field_name"}
      alias_name: {$avg : "$field_name"}
      alias_name: {$sum : "$field_name"}
      alias_name: {$sum : 1}  
    }
} 

Common $group Operations are:
>>> $sum
>>> $avg
>>> $min
>>> $max
>>> $first
>>> $last
>>> $push
>>> $addToSet
*/

// ? ============ $sum ==============
/*
It will perform the sum operation.
It will accept fieldnames as value or number as value.
Syntax: { $sum : < "$fieldName" | 1 >}
For Ex: { $sum : "$sal" } ---> returns the total of salaries
For Ex: { $sum : 1 } ---> returns the count of records shortlisted.
*/

// & WAQTD the totalsal of all the employees.
db.emp.aggregate([
  {
    $group: {
      total_Sal: { $sum: "$sal" },
    },
  },
]);
// MongoServerError[Location15955]: a group specification must include an _id

db.emp.aggregate([
  {
    $group: {
      _id: null,
      total_Sal: { $sum: "$sal" },
    },
  },
]);

// & WAQTD the totalsal, count of all the employees.
db.emp.aggregate([
  {
    $group: {
      _id: null,
      total_Sal: { $sum: "$sal" },
      count: { $sum: 1 },
    },
  },
]);

// or

db.emp.aggregate([
  {
    $group: {
      _id: null,
      total_Sal: { $sum: "$sal" },
      count: { $count: {} },
    },
  },
]);

// & WAQTD the totalsal of all the employees based on each department number.
db.emp.aggregate([
  {
    $group: {
      _id: "$deptno",
      total_Sal: { $sum: "$sal" },
    },
  },
]);

// & WAQTD the totalsal , count of all the employees based on each department number.
db.emp.aggregate([
  {
    $group: {
      _id: "$deptno",
      total_Sal: { $sum: "$sal" },
      count: { $sum: 1 },
    },
  },
]);

// & WAQTD the totalsal, count of all the employees who are working in dept no 10.
db.emp.aggregate([
  {
    $match: {
      deptno: 10,
    },
  },
  {
    $group: {
      _id: "$deptno",
      total_Sal: { $sum: "$sal" },
      count: { $sum: 1 },
    },
  },
]);

// & WAQTD the totalsal, count of all the employees based on each job.
db.emp.aggregate([
  {
    $group: {
      _id: "$job",
      total_Sal: { $sum: "$sal" },
      count: { $sum: 1 },
    },
  },
]);

// & WAQTD the totalsal, count of all the employees who are woking as manager.
db.emp.aggregate([
  {
    $match: {
      job: "manager",
    },
  },
  {
    $group: {
      _id: "job",
      total_Sal: { $sum: "$sal" },
      count: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      total_Sal: 1,
      count: 1,
    },
  },
]);

// ? WAQTD the totalSal of all the employees.
// ? WAQTD the count of all the employees.
// ? WAQTD the total_Sal and count of all the employees.
// ? WAQTD the total_Sal and count of the employees who are working dept no 10.
// ? WAQTD the total_Sal and count of the employees who are working as manager.
// ? WAQTD the total salary provided to each department and count of employees in each department.
// ? WAQTD the total salary provided to each designation and count of employees in each designation.
// ? WAQTD the total salary manager's and count of managers.
// ? WAQTD NUMBER OF EMPLOYEES HAVING 'A' AS THEIR FIRST CHARACTER IN THEIR NAME
// ? WAQTD no.of employees and total salary need to pay for those who hired in february.
// ? WAQTD NUMBER OF EMPLOYEES WORKING IN EACH DEPARTMENT EXCEPT PRESIDENT
// ? WAQTD NUMBER OF EMPLOYEES REPORTING TO 7839 (MGR)

// ? ============ $avg ==============
/*
It will return the average value of the data. 
Syntax: { $avg: "$fieldName" }
*/

// & WAQTD the average salary of the employees.
db.emp.aggregate([
  {
    $group: {
      _id: null,
      averageSal: { $avg: "$sal" },
    },
  },
]);

// & WAQTD the average salary of the employees in each department.
db.emp.aggregate([
  {
    $group: {
      _id: "$deptno",
      averageSal: { $avg: "$sal" },
    },
  },
]);

// & WAQTD the average salary of the employees who are working in deptno 10.
db.emp.aggregate([
  {
    $match: {
      deptno: 10,
    },
  },
  {
    $group: {
      _id: "$deptno",
      averageSal: {
        $avg: "$sal",
      },
    },
  },
]);

// & WAQTD the average salary of the employees who are working in deptno 20 and 30.
db.emp.aggregate([
  {
    $match: {
      $or: [{ deptno: 20 }, { deptno: 30 }],
    },
  },
  {
    $group: {
      _id: "$deptno",
      averageSal: {
        $avg: "$sal",
      },
    },
  },
]);

db.emp.aggregate([
  {
    $match: {
      deptno: { $in: [20, 30] },
    },
  },
  {
    $group: {
      _id: "$deptno",
      averageSal: {
        $avg: "$sal",
      },
    },
  },
]);

// & WAQTD the average salary, total salary, count of the employees who are working "salesman".
db.emp.aggregate([
  {
    $match: {
      job: "salesman",
    },
  },
  {
    $group: {
      _id: "$job",
      averageSal: { $avg: "$sal" },
      total_Sal: { $sum: "$sal" },
      count: { $sum: 1 },
    },
  },
]);

// ? WAQTD the average salary of all the employees.
// ? WAQTD the average salary of all the employees after the hike of 250 per employee.
// ? WAQTD the average salary of all the employees in each department.
// ? WAQTD the average salary of all the employees who are working in dept no 10.
// ? WAQTD the average salary of all the employees who are working in dept no 20 and 30.
// ? WAQTD the average salary of clerks.
// ? WAQTD the average salary of managers.
// ? WAQTD the average salary of each designation.
// ? WAQTD the average salary of employees who are reporting to 7698.
//? WAQTD the average comm of all the employees and no.of employees earning and total comm.
// ? WAQTD the average salary of employees who are earning greater than or equal to 2000.
// ? WAQTD the average salary of employees who are earning less than or equal to 2000.

// ? =============== $min ===============
/*
It will return minimum value among all the records.
Syntax: {$min : "$fieldName"}
*/

// & WAQTD the minimum of among all the employees.
db.emp.aggregate([
  {
    $group: {
      _id: null,
      minimum_sal: { $min: "$sal" },
    },
  },
]);

// & WAQTD the minimum of among all the employees who are working as 'clerk'.
db.emp.aggregate([
  {
    $match: { job: "clerk" },
  },
  {
    $group: {
      _id: "$job",
      minimum_sal: { $min: "$sal" },
    },
  },
]);

// & WAQTD the minimum salary among all the employees who are working as 'managers'.
db.emp.aggregate([
  {
    $match: { job: "manager" },
  },
  {
    $group: {
      _id: "$job",
      minimum_sal: { $min: "$sal" },
    },
  },
]);

// & WAQTD the minimum salary amoung all the employees based on each department.
db.emp.aggregate([
  {
    $group: {
      _id: "$deptno",
      minimum_sal: { $min: "$sal" },
    },
  },
]);

// & WAQTD the minimum salary amoung all the employees based on each job.
db.emp.aggregate([
  {
    $group: {
      _id: "$job",
      minimum_sal: { $min: "$sal" },
    },
  },
]);

// ? WAQTD the min sal among all the employees.
// ? WAQTD the min sal among the salesman.
// ? WAQTD the min sal among the clerks.
// ? WAQTD the min sal among the all designation individually.
// ? WAQTD the min sal of the employees who are working in deptno 10.
// ? WAQTD the min sal of the employees who are working in deptno 20 or 30.
// ? WAQTD the min sal of the employees who are working in deptno 20 as clerk.
// ? WAQTD the min sal of the employees based on departments.

// ? =============== $max ===============
/*
It will return maximum value among all the records.
Syntax: {$max : "$fieldName"}
*/

// & WAQTD the maximum of among all the employees.
db.emp.aggregate([
  {
    $group: {
      _id: null,
      maximum_sal: { $max: "$sal" },
    },
  },
]);

// & WAQTD the maximum of among all the employees who are working as 'clerk'.
db.emp.aggregate([
  {
    $match: { job: "clerk" },
  },
  {
    $group: {
      _id: "$job",
      maximum_sal: { $max: "$sal" },
    },
  },
]);

// & WAQTD the maximum salary among all the employees who are working as 'managers'.
db.emp.aggregate([
  {
    $match: { job: "manager" },
  },
  {
    $group: {
      _id: "$job",
      maximum_sal: { $max: "$sal" },
    },
  },
]);

// & WAQTD the maximum salary amoung all the employees based on each department.
db.emp.aggregate([
  {
    $group: {
      _id: "$deptno",
      maximum_sal: { $max: "$sal" },
    },
  },
]);

// & WAQTD the maximum salary amoung all the employees based on each job.
db.emp.aggregate([
  {
    $group: {
      _id: "$job",
      maximum_sal: { $max: "$sal" },
    },
  },
]);

// & WAQTD the total salary, minimum salary , maximum salary , average salary , count of all the employees.
db.emp.aggregate([
  {
    $group: {
      _id: null,
      total_Sal: { $sum: "$sal" },
      minimum_sal: { $min: "$sal" },
      maximum_sal: { $max: "$sal" },
      averageSal: { $avg: "$sal" },
      count: { $sum: 1 },
    },
  },
]);

// ? WAQTD the max sal among all the employees.
// ? WAQTD the max sal among the managers.
// ? WAQTD the max sal among the salesman.
// ? WAQTD the max sal among the clerks.
// ? WAQTD the max sal among the all designation individually.
// ? WAQTD the max sal of the employees who are working in deptno 10.
// ? WAQTD the max sal of the employees who are working in deptno 20 or 30.
// ? WAQTD the max sal of the employees who are working in deptno 20 as clerk.
// ? WAQTD the max sal of the employees based on departments.
// ? WAQTD NUMBER OF EMPLOYEES GETTING SALARY LESS THAN 2000 IN DEPTNO 10

// ? ============== $first ==================
/*
It will return the first matching document
Syntax: 
{
  $group: {
    _id: null  | anyRef,
    aliasName : { $first : "$feildName" }
  }
}
*/

// & WAQTD the first employee name in the emp collection.
db.emp.aggregate([
  {
    $group: {
      _id: null,
      firstEmp: { $first: "$ename" },
    },
  },
]);

// & WAQTD the first employee document in the emp collection.
db.emp.aggregate([
  {
    $group: {
      _id: null,
      firstDoc: { $first: "$$ROOT" },
    },
  },
]);

// & WAQTD the first employee document in the emp collection who matches with the designation "analyst".
db.emp.aggregate([
  {
    $match: {
      job: "analyst",
    },
  },
  {
    $group: {
      _id: null,
      firstDoc: { $first: "$$ROOT" },
    },
  },
]);

db.emp.aggregate([
  {
    $match: {
      job: "analyst",
    },
  },
  {
    $group: {
      _id: "$job",
      firstDoc: { $first: "$$ROOT" },
    },
  },
]);

// & WAQTD the first employee document in the emp collection based on each job.
db.emp.aggregate([
  {
    $group: {
      _id: "$job",
      firstDoc: {
        $first: "$$ROOT",
      },
    },
  },
]);

// ? WAQTD the first employee of the employee collection.
// ? WAQTD the first employee of the employee collection who is working as manager.
// ? WAQTD the first employee of the employee collection who is working as a salesman.
// ? WAQTD the first employee of the employee collection who is working as a clerk.
// ? WAQTD the first employee of the employee collection who belongs to dept no 10.
// ? WAQTD the first employee of the employee collection who belongs to dept no 20.
// ? WAQTD the first employee shortlist from the employee collection who joined after May 1981.
// ? WAQTD the first employee of the employee collection who is earning more than 1500.
// ? WAQTD the first employee of the employee collection who is earning commision.

// ? ============== $last ==================
/*
It will return the last matching document
Syntax: 
{
  $group: {
    _id: null  | anyRef,
    aliasName : { $last : "$feildName" }
  }
}
*/

// & WAQTD the last employee name in the emp collection.
db.emp.aggregate([
  {
    $group: {
      _id: null,
      lastEmp: { $last: "$ename" },
    },
  },
]);

// & WAQTD the last employee document in the emp collection.
db.emp.aggregate([
  {
    $group: {
      _id: null,
      lastDoc: { $last: "$$ROOT" },
    },
  },
]);

// & WAQTD the last employee document in the emp collection who matches with the designation "analyst".
db.emp.aggregate([
  {
    $match: {
      job: "analyst",
    },
  },
  {
    $group: {
      _id: null,
      lastDoc: { $last: "$$ROOT" },
    },
  },
]);

db.emp.aggregate([
  {
    $match: {
      job: "analyst",
    },
  },
  {
    $group: {
      _id: "$job",
      lastDoc: { $last: "$$ROOT" },
    },
  },
]);

// & WAQTD the last employee document in the emp collection based on each job.
db.emp.aggregate([
  {
    $group: {
      _id: "$job",
      lastDoc: {
        $last: "$$ROOT",
      },
    },
  },
]);

// ? WAQTD the last employee of the employee collection.
// ? WAQTD the last employee of the employee collection who is working as manager.
// ? WAQTD the last employee of the employee collection who is working as a salesman.
// ? WAQTD the last employee of the employee collection who is working as a clerk.
// ? WAQTD the last employee of the employee collection who belongs to dept no 10.
// ? WAQTD the last employee of the employee collection who belongs to dept no 20.
// ? WAQTD the last employee shortlisted from the employee collection who joined after May 1981.
// ? WAQTD the last employee of the employee collection who is earning more than 1500.
// ? WAQTD the last employee of the employee collection who is earning commision.
