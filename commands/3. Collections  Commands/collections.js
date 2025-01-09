// ! ==== Collections =====:
/* Table's in SQL === Collection's in MongoDB

Ex: As we have multiple tables in scott database.
    here also we will have multiple collections in a database.

    As a table having multiple rows in sql
    here we will have multipele documents in a collection.
*/

// ? >>> show tables    |    show collections
// To list all the collections in a database.

// ? createCollection():
// It will create the collection in a database. similar creating table in database.
// Syntax: db.createCollection("collectionName");
// Ex: 
db.createCollection("emp");
db.createCollection("dept");
db.createCollection("qspiders students");

// ? getCollection():
// It will points to the collection
// syntax: db.getCollection("collectionName");
// Ex: 
db.getCollection("emp");
db.getCollection("dept");
db.getCollection("qspiders students");

// ? renameCollection():
// It will rename the collectionname with new name
// syntax: db.oldName.renameCollection("newName");
// Ex: 
db.emp.renameCollection("employees");
db.dept.renameCollection("department");
db.getCollection("qspiders students").renameCollection("qspiders data"); // Explicit way

// ? db.collectionName.drop():
// It will delete the collection
// syntax: db.collectionName.drop()
// Ex: 
db.employees.drop();
db.department.drop();
db.getCollection("qspiders data").drop();