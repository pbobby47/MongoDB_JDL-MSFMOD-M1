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
        >>> $group
        >>> $match
        >>> $sort
        >>> $limit
        >>> $skip
        >>> $unwind
        >>> $lookup
        >>> $addFields
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
