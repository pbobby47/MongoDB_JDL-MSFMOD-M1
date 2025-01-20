// ! ==== Update Operators =====
/*
    These Operators mainly used to update the docuements present in a collection.
    we have to use along with update methods like updateOne() , updateMany().

    Update Operators are breakdown into 2 categories:
        1. Field related updates
        2. Array related updates
*/

// ! ============ Field Related Update ============
/*
>>> $set:
    It will check the specified field is present or not.
    If present, it will udpate the field. 
    If not present, it will create the field. 
    Syntax: { $set: {field: value} }

>>> $unset:
    It is the quite opposite to $set.
    It will remove the field.
    It will check the specified field is present or not.
    If present, it will remove the field. 
    If not present, it will ignore it. 
    Syntax: { $unset: {field: false} }
    Syntax: { $unset: {field: ""} }

>>> $inc:
    It will udpate the field value by specified number.
    This operator only for numbers
    Syntax: {$inc: {field: value , field: value , ...}}
    Syntax: {$inc: {field: -value , field: -value , ...}}

>>> $min:
    It will provide the all time min value.
    if the specified value is less than current value, it will udpate it
    if the specified value is more than current value, it does nothing.
    Syntax: {$min : {filed: value}}

>>> $min:
    It will provide the all time max value.
    if the specified value is more than current value, it will udpate it
    if the specified value is less than current value, it does nothing.
    Syntax: {$max : {filed: value}}

>>> $mul:
    It will multiply the filed values with specified number.
    Syntax: {$mul : {field : number }}

    difference b/w $mul and $multiply:
    $mul:       ---> {$mul : {field : number} }
                ---> It will update the original field

    $multiply:  ---> {$multiply : ["$filedName" , number]}
                ---> It will store the value into an alias name

>>> $rename:
    It will update the field name
    Syntax: {$rename : {oldname : newname}}
*/

// ! dataset:
db.students.insertMany([
  {
    name: "Bobby Perecharla",
    age: 20,
    grade: "A",
    subjects: ["HTML", "CSS", "JavaScript"],
    attendance: 85,
    contact: { email: "bobby.perecharla@example.com", phone: "9876543210" },
    enrolled: true,
    scores: { midterm: 75, final: 80 },
    address: { city: "Mumbai", zip: "400001" },
  },
  {
    name: "Riza Washiq",
    age: 22,
    grade: "O",
    subjects: ["Core Java", "SQL", "MongoDB"],
    attendance: 90,
    contact: { email: "riza.washiq@example.com", phone: "8765432109" },
    enrolled: true,
    scores: { midterm: 88, final: 92 },
    address: { city: "Delhi", zip: "110001" },
  },
  {
    name: "Akash Kumar",
    age: 19,
    grade: "A",
    subjects: ["Manual", "SQL", "API Testing"],
    attendance: 78,
    contact: { email: "akash.kumar@example.com", phone: "7654321098" },
    enrolled: true,
    scores: { midterm: 82, final: 85 },
    address: { city: "Bengaluru", zip: "560001" },
  },
  {
    name: "Sushant Hegde",
    age: 21,
    grade: "A+",
    subjects: ["SQL", "Manual"],
    attendance: 95,
    contact: { email: "sushant.hegde@example.com", phone: "6543210987" },
    enrolled: false,
    scores: { midterm: 89, final: 90 },
    address: { city: "Chennai", zip: "600001" },
  },
  {
    name: "Prabhu Gowda",
    age: 21,
    grade: "A+",
    subjects: ["Python", "Django", "Selenium"],
    attendance: 95,
    contact: { email: "prabhu.gowda@example.com", phone: "6543210987" },
    enrolled: false,
    scores: { midterm: 89, final: 90 },
    address: { city: "Chennai", zip: "600001" },
  },
  {
    name: "Ithiyas",
    age: 21,
    grade: "A",
    subjects: ["SQL", "MongoDB"],
    attendance: 95,
    contact: { email: "ithiyas.history@example.com", phone: "6543210987" },
    enrolled: false,
    scores: { midterm: 89, final: 90 },
    address: { city: "Chennai", zip: "600001" },
  },
]);

// ? >>> $set:
// & WAQ to update Bobby Perecharla's attedence to 92%.
db.students.updateOne(
  { name: "Bobby Perecharla" },
  { $set: { attendance: 92 } }
);

// & WAQ to update Ithiyas grade as O+.
db.students.updateOne({ name: "Ithiyas" }, { $set: { grade: "O+" } });

// & WAQ to update Riza Washiq position as Class Representative(CR).
db.students.updateOne({ name: "Riza Washiq" }, { $set: { position: "CR" } });

// & WAQ to update the enroll status of chennai based students to true.
db.students.updateMany(
  { "address.city": "Chennai" },
  { $set: { enroll: true } }
);

// ? >>> $unset:
// & WAQ to remove the phone number of Akash Kumar.
db.students.updateOne(
  { name: "Akash Kumar" },
  { $unset: { "contact.phone": false } }
);

// & WAQ to remove the phone number of Sushant Hegde.
db.students.updateOne(
  { name: "Sushant Hegde" },
  { $unset: { "contact.phone": "" } }
);

// & WAQ to remove the age of the students with age 21 and less.
db.students.updateMany({ age: { $lte: 21 } }, { $unset: { age: "" } });

// ? >>> $inc:
// & WAQ to provide the bonus in final marks of 3 to all the students.
db.students.updateMany({}, { $inc: { "scores.final": 3 } });

// & WAQ to provide the decrement in midterm marks of 5 to all the students.
db.students.updateMany({}, { $inc: { "scores.midterm": -5 } });

// & WAQ to provide the decrement of 10 in midterm and increment of 2 in final  to all the students.
db.students.updateMany(
  {},
  { $inc: { "scores.midterm": -10, "scores.final": 2 } }
);

// ? >>> $min:
// & WAQ to update Akash Kumar Attendence with 60%
// if 60 is less than akash kumar attendence , it will update it
// if 60 is more than akash kumar attendence , it will ignore
db.students.updateOne({ name: "Akash Kumar" }, { $min: { attendance: 60 } });

// & WAQ to update Akash Kumar Attendence with 80%
db.students.updateOne({ name: "Akash Kumar" }, { $min: { attendance: 80 } }); // ignore

// & WAQ to update Prabhu Attendence with 98%
db.students.updateOne({ name: "Prabhu Gowda" }, { $min: { attendance: 98 } });

// Remember: movies prices

// ? >>> $mul:
// & WAQ to update the midterm marks as double
db.students.updateMany({}, { $mul: { "scores.midterm": 2 } });

// & WAQ to update the final marks as triple
db.students.updateMany({}, { $mul: { "scores.final": 3 } });

// & WAQ to update the attendence as half.
db.students.updateMany({}, { $mul: { attendance: 0.5 } });
db.students.updateMany({}, { $mul: { attendance: 1 / 2 } });

// & WAQ to update midterm marks to 80% of orginal and final marks to 68% of original
db.students.updateMany(
  {},
  { $mul: { "scores.midterm": 0.8, "scores.final": 0.68 } }
);

// ? >>> $rename:
// & WAQ to update name as sname
db.students.updateMany({}, { $rename: { name: "sname" } });

// & WAQ to update enrolled as enrollment
db.students.updateMany({}, { $rename: { enrolled: "enrollment" } });

// & WAQ to update address as location
db.students.updateMany({}, { $rename: { address: "location" } });
