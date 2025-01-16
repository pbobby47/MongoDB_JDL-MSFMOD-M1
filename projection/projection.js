// ! ====== projection ======
// Projection is a process diplay the results as per our need.
// Syntax: db.collection.find({filter} , {projection} , {options})
// Syntax: db.collection.findOne({filter} , {projection} , {options})

// filter ---> it will filter the documents based on condition
//        ---> it is similar to WHERE clause.

// projection ---> by using we can decide what to display
//            ---> it is similar to select clause
//            ---> to display we have to use boolean (0 and 1 values)

// options  ----> options will provide the additional data for projecting
//          ----> Ex: sorting , limiting the records , etc...

// ~ as we performed CRUD commands enter scott data once again.

// & WAQTD all the employee's details
// sql:
// SELECT *
// FROM EMP;

// mongodb:
db.emp.find({}, {}, {});

// & WAQTD all employees details who are working as clerk
// & WAQTD all employees details who are working as salesman
// & WAQTD all employees details who are working as manager
// & WAQTD all employees details who are working in 20
// & WAQTD all employees details who are earning 3000.
// & WAQTD all employees details who are earning 1500.
// & WAQTD all employees details whose name is smith.
// & WAQTD all employees details who are reporting to 7698.
// & WAQTD all employees details who are reporting to 7788.
// & WAQTD all employees details who are reporting to 7788 and working as clerk.
// & WAQTD all employees details who are reporting to 7788 and working as analyst.
// & WAQTD all employees details who are reporting to 7902 and working as analyst.
// & WAQTD all employees details who are earning 1300 as clerk in deptno 10.
// & WAQTD all employees details who are earning 1300 as clerk in deptno 20.

/*! 
>>> limit:
    To limit the result to a specific number of documents.
    As Option Syntax: db.collection.find({} , {} , {limit : number});
    As method Syntax: db.collection.find({} , {} , {}).limit(number);

>>> skip:
    Useful for pagination by skipping over a certain number of documents.
    As Option Syntax: db.collection.find({} , {} , {skip : number});
    As method Syntax: db.collection.find({} , {} , {}).skip(number);

>>> sort:
    To sort the query results in ascending or descending order.
    As Option Syntax: db.collection.find({} , {} , {sort : {field : value} }); // value = 1 or -1.
    As method Syntax: db.collection.find({} , {} , {}).sort({field: value}); // value = 1 or -1.
*/

// ? Limit:
// emp data
// & WAQTD the details of first 5 employees
db.emp.find({}, {}, { limit: 5 });
db.emp.find({}, {}, {}).limit(5);

// & WAQTD the details of first 8 employees
// & WAQTD the details of first 2 clerks
// & WAQTD the details of first 2 employees of deptno 10
// & WAQTD the details of first manager
// & WAQTD the details of first salesman in deptno 30

// products data
// & WAQTD the title and price of all products.
// & WAQTD the first 7 products.
// & WAQTD the first 10 products title , price , rating.
// & WAQTD the first 15 products title , category , rating.
// & WAQTD the first 15 products title , rate .
db.products.find({}, { title: 1, "rating.rate": 1 }, {});
// & WAQTD the first 5 products title , rate , price.

// users data
// & WAQTD the details of first 3 users
// & WAQTD the details of first 5 users along with username and email
// & WAQTD the details of first 1 users along with name and address
// & WAQTD the details of first 4 users along with id and geolocation
// & WAQTD the details of first 8 users along with id and zipcode
// & WAQTD the details of first 7 users along with user name , phone and city.
// & WAQTD the details of all users first name
// & WAQTD the details of all users last name

// ? Skip:
// emp data
// & WAQTD the details of employees other than first 4
// & WAQTD the details of employees other than first 5
// & WAQTD the details of employees other than first 2
// & WAQTD the details of employees who earning salary as 3000 apart from the first employee
// & WAQTD the details of deptno 10 employees aaprt from first 2 employees
// & WAQTD the details of exact 3rd salesman
// & WAQTD the details of exact 3rd clerk
// & WAQTD the details of exact 3rd manager

// ? Sort:
// emp data
// & WAQTD the name and salary of employees based on sorting their names
db.emp.find({}, { _id: 0, ename: 1, sal: 1 }, { sort: { ename: 1 } }); // ascending
db.emp.find({}, { _id: 0, ename: 1, sal: 1 }, { sort: { ename: -1 } }); // descending

db.emp.find({}, { _id: 0, ename: 1, sal: 1 }, {}).sort({ ename: 1 }); // ascending
db.emp.find({}, { _id: 0, ename: 1, sal: 1 }, {}).sort({ ename: -1 }); // descending

// & WAQTD the names and salaries based on sorting salaries
// & WAQTD the names and salaries based on sorting emp id's
// & WAQTD the names ,salary , comm based on sorting comm
// & WAQTD the name, hiredate  based on sorting
// & WAQTD the details of 4th hired employee.
// & WAQTD the details of 7th hired employee.
// & WAQTD the details of 4th highest slary.
// & WAQTD the details of 2nd highest slary between the range 1500 to 4000.
// & WAQTD the details of 2nd lowest slary between the range 1500 to 4000.
// & WAQTD the details of 3rd highest slary between the range 1000 to 5000.
// & WAQTD the details of 3rd lowest slary between the range 1000 to 5000.

// products data:
// & Shortlist the products based on price.
// & Shortlist the products based on title.
// & Shortlist the products based on category.

// ! =============== Alias Name ===============
/*Alias Name is an alternative name provided to the columns.
SQL:
    SELECT COLUMNNAME AS ALIASNAME FROM TABLE;
    SELECT COLUMNNAME ALIASNAME FROM TABLE;

mongodb:
    db.collection.find({} , {aliasName : "$fieldName"} , {}); 

    db.collection.find({} , {sal : 1} , {}); -- to display sal
    db.collection.find({} , {salary : "$sal"} , {}); -- to display sal as salary
*/

// & WAQTD the name and sal of all the employees
db.emp.find({}, { _id: 0, ename: 1, sal: 1 }, {});

// & WAQTD the name, sal and wellwisher name as varun of all the employees
db.emp.find({}, { _id: 0, ename: 1, sal: 1, wellwisher: "varun" }, {});

// & WAQTD the salary  of all the employees as "salary".
db.emp.find({}, { _id: 0, salary: "$sal" }, {});

// & WAQTD ename as employeeName
// & WAQTD hiredate as date_of_join
// & WAQTD deptno as department
// & WAQTD mgr as manager
// & WAQTD comm as commision
