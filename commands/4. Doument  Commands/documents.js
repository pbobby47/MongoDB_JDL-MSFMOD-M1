//! === Documents ===
// ? create -----> insert(), insertOne(), insertMany()
// ? read   -----> find() , findOne()
// ? update
// ? delete

// ! =================== Create ===================
// ? >>> insert():
// It will create new document(s) in the collection.
// Syntax: db.collectionName.insert(doc);
// Syntax: db.collectionName.insert([doc1, doc2, doc3, ....]);

// for single doc
db.emp.insert({
  empno: 7369,
  ename: "smith",
  job: "clerk",
  mgr: 7902,
  hiredate: new Date("1980-12-17"),
  sal: 800,
  comm: null,
  deptno: 20,
});

// output:
/*
DeprecationWarning: Collection.insert() is deprecated.Use insertOne, insertMany, or bulkWrite.
{
  acknowledged: true,
  insertedIds: { '0': ObjectId('677f555be970ada6eb46b799') }
}
*/

// for multiple docs
db.emp.insert([
  {
    empno: 7499,
    ename: "allen",
    job: "salesman",
    mgr: 7698,
    hiredate: new Date("1981-02-20"),
    sal: 1600,
    comm: 300,
    deptno: 30,
  },
  {
    empno: 7521,
    ename: "ward",
    job: "salesman",
    mgr: 7698,
    hiredate: new Date("1981-02-22"),
    sal: 1250,
    comm: 500,
    deptno: 30,
  },
  {
    empno: 7566,
    ename: "jones",
    job: "manager",
    mgr: 7839,
    hiredate: new Date("1981-04-02"),
    sal: 2975,
    comm: null,
    deptno: 20,
  },
]);

// ? >>> insertOne():
// It will add only one document into the collection at a time.
db.emp.insertOne({
  empno: 7654,
  ename: "martin",
  job: "salesman",
  mgr: 7698,
  hiredate: new Date("1981-09-28"),
  sal: 1250,
  comm: 1400,
  deptno: 30,
});

// ? >>> insertMany():
// It will add one or more documents into the collection.
db.emp.insertMany([
  {
    empno: 7698,
    ename: "blake",
    job: "manager",
    mgr: 7839,
    hiredate: new Date("1981-05-01"),
    sal: 2850,
    comm: null,
    deptno: 30,
  },
  {
    empno: 7782,
    ename: "clark",
    job: "manager",
    mgr: 7839,
    hiredate: new Date("1981-06-09"),
    sal: 2450,
    comm: null,
    deptno: 10,
  },
  {
    empno: 7788,
    ename: "scott",
    job: "analyst",
    mgr: 7566,
    hiredate: new Date("1987-04-19"),
    sal: 3000,
    comm: null,
    deptno: 20,
  },
]);

// ! =================== Read ===================
// ? >>> find()
// It will helps us to read the data.
// Syntax: db.collection.find({filter} , {projection} ,{options});
// filter --> will pass the filtering condition to the data ---> equal where clause in SQL
// pojection --> will display the data --> equal to select clause in SQL
// options --> to pass additional options

// & WAQTD the details employees in emp collection.
// SQL : SELECT * FROM EMP;
// mongodb : db.emp.find();

// & WAQTD the details departments in dept collection.
// SQL: SELECT * FROM DEPT;
// mongodb: db.dept.find();

// & WAQTD ename , sal , Job of all the employees.
// SQL:
/*
SELECT ENAME, SAL, JOB 
FROM EMP;
*/

// mongodb:
/* db.emp.find({}, { _id: 0, ename: 1, sal: 1, job: 1 }, {}); */

// & WAQTD empno , deptno of all the employees
// SQL:
/*
SELECT EMPNO, DEPTNO
FROM EMP;
*/

// mongodb:
/* db.emp.find({}, { _id: 0,  , empno:1 , deptno:1 }, {}); */

// & WAQTD the employees details who are earning 1250.
// SQL:
/*
SELECT * 
FROM EMP
WHERE SAL = 1250
*/
// mongodb:
/* db.emp.find({ sal: 1250 }, {}, {}); */

// & WAQTD the employees details who are working as manager
// SQL:
/*
SELECT * 
FROM EMP 
WHERE JOB = "MANAGER"
*/

// mongodb:
/* db.emp.find({ job: "manager" }, {}, {}); */

// ? Task
// & WAQTD the details of the employees who are in dept no 20

// & WAQTD the details of the employees who are in dept no 10

// & WAQTD the details of the employees who are in dept no 30

// & WAQTD the details of the employees who are working as clerk

// & WAQTD the details of the employees who are working as analyst

// & WAQTD the details of the employees who are working as salesman

// & WAQTD the details of the employees whose name is Scott

// & WAQTD the details of the employees whose name is Turner

// & WAQTD the details of the employees who are working as clerk in dept no 20.

// & WAQTD the details of the employees who are working as manager in dept no 10.

// & WAQTD the details of the employees who are working as salesman in dept no 30.

// & WAQTD the details of the employees who are earning 3000 as a analyst.

// & WAQTD the details of the employees who are reporting to 7698.

// & WAQTD the details of the employees who are reporting to 7566.

// & WAQTD the details of the employees who are earning comm of 500 exactly.

// & WAQTD the manager no of martin.

// & WAQTD Ford's name , job and hire date

// & WAQTD Jones name , employee number and his manager number along with dept no.

// ? >>> findOne()
// It will helps us to read the data.
// It will return only the first macthing data.
// Syntax: db.collection.findOne({filter} , {projection} ,{options});
// filter --> will pass the filtering condition to the data ---> equal where clause in SQL
// pojection --> will display the data --> equal to select clause in SQL
// options --> to pass additional options

// & WAQTD of first matching job as manager.
// mongodb:
db.emp.findOne({ job: "manager" }, {}, {});

// & WAQTD the name , job , sal of the employee who earns 3000.
db.emp.findOne({ sal: 3000 }, { _id: 0, ename: 1, job: 1, sal: 1 }, {});
db.emp.findOne({ sal: 3000 }, { _id: false, ename: 1, job: 1, sal: true }, {});

// ? >>> count() method
// It will count that no.of results sortlisted.

// & WAQ to count no.of employees are present in emp collection.
db.emp.find({}, {}, {}).count();

// & WAQ to count no.of managers are present in emp collection.
db.emp.find({ job: "manager" }, {}, {}).count();

// & WAQ to count no.of clerks are present in emp collection.
db.emp.find({ job: "clerk" }, {}, {}).count();

// & WAQ to count no.of analysts are present in emp collection.
db.emp.find({ job: "analyst" }, {}, {}).count();

// & WAQ to count no.of salesman are present in emp collection.
db.emp.find({ job: "salesman" }, {}, {}).count();

// & WAQ to count no.of employee belongs to dept 10.
// & WAQ to count no.of employee belongs to dept 20.
// & WAQ to count no.of employee belongs to dept 30.
// & WAQ to count no.of employee reporting to 7698.
// & WAQ to count no.of employee reporting to 7839.

// ? >>> pretty() method
// It will display in a pretty view format.
db.emp.find({}, {}, {});
db.emp.find({}, {}, {}).pretty();
// in older version of mongodb we have to use it for better view
// now its not required.

// ? >>> limit() method
// It will limit for the no.of results.

// & WAQ to display the first 5 employees details.
db.emp.find().limit(5);

// & WAQ to display the first 2 employees details.
db.emp.find().limit(2);

// & WAQ to display the first 2 employees details who belongs to dept 20.
// & WAQ to display the first 2 employees details who belongs to dept 10.
// & WAQ to display the first 2 employees details who belongs to dept 30.
// & WAQ to display the first 2 employees details who are working as salesman.
// & WAQ to display the first 2 employees details who are working as clerk.

// ? >>> skip() method
// It will skip the documents
// & WAQTD the details of the employees excluding first 2 employees.
db.emp.find();
db.emp.find().skip(2);

// & WAQTD the details of 2nd working employee as a manager.
db.emp.findOne({ job: "manager" }, {}, {}).skip(1); //! WRONG
db.emp.find({ job: "manager" }, {}, {}).skip(1).limit(1);

// & all managers expect first manager
db.emp.find({ job: "manager" }, {}, {}).skip(1);

// & WAQTD the details of 3rd working employee as a clerk.
// & WAQTD the details of 2nd employee who earns 3000.
