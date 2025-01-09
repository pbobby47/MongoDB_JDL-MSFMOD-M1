//! === Documents ===
// ? create -----> insert(), insertOne(), insertMany()
// ? read
// ? update
// ? delete

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
