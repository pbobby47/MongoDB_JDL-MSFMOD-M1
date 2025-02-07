// ! ================== bulkWrite ==================
/*
It will perform multiple operation at a time. 
Valid Operations are: 
insertOne , updateOne , updateMany , replaceOne , deleteOne , deleteMany

Syntax - 1: 
db.collection.bulkWrite([
    { insertOne: ______ },
    { updateOne: ______ },
    { updateMany: ______ },
    { replaceOne: ______ },
    { deletOne: ______ },
    { deletMany: ______ },
]);

Syntax - 2: 
db.collection.bulkWrite([
    { insertOne: { document : {_____} }},
    { updateOne: { filter : {______} , update: {_______} } },
    { updateMany: { filter : {______} , update: {_______} } },
    { replaceOne: { filter : {_____} , replacement: {_______} } },
    { deletOne: {filter: {______} } },
    { deletMany: {filter: {______} } },
]);

*/

db.pizzas.insertMany([
  { _id: 0, type: "pepperoni", size: "small", price: 4 },
  { _id: 1, type: "cheese", size: "medium", price: 7 },
  { _id: 2, type: "vegan", size: "large", price: 8 },
]);

db.pizzas.bulkWrite([
  {
    insertOne: {
      document: { _id: 3, type: "beef", size: "medium", price: 6 },
    },
  },
  {
    insertOne: {
      document: { _id: 4, type: "sausage", size: "large", price: 10 },
    },
  },
  {
    updateOne: {
      filter: { type: "cheese" },
      update: { $set: { price: 8 } },
    },
  },
  { deleteOne: { filter: { type: "pepperoni" } } },
  {
    replaceOne: {
      filter: { type: "vegan" },
      replacement: { type: "tofu", size: "small", price: 4 },
    },
  },
]);

// & WAQ to insert 1 student data.
db.students.bulkWrite([
  {
    insertOne: {
      document: {
        student_id: 1,
        first_name: "Alfonso",
        last_name: "Seckington",
        age: 18,
        email: "aseckington0@github.io",
        phone_number: "570-885-6734",
        address: "7748 Division Trail",
        course: "Engineering",
      },
    },
  },
]);

// & WAQ to insert one more student data.
db.students.bulkWrite([
  {
    insertOne: {
      document: {
        student_id: 2,
        first_name: "Northrop",
        last_name: "Tallon",
        age: 22,
        email: "ntallon1@multiply.com",
        phone_number: "807-113-5068",
        address: "249 Loomis Terrace",
        course: "Science",
      },
    },
  },
]);

// & WAQ to insert 3 more students data.
db.students.bulkWrite([
  {
    insertOne: {
      document: {
        student_id: 3,
        first_name: "Jerald",
        last_name: "Kobieriecki",
        age: 18,
        email: "jkobieriecki2@paginegialle.it",
        phone_number: "430-697-8672",
        address: "757 Elka Hill",
        course: "Medicine",
      },
    },
  },
  {
    insertOne: {
      document: {
        student_id: 4,
        first_name: "Kingston",
        last_name: "Michael",
        age: 23,
        email: "kmichael3@walmart.com",
        phone_number: "576-169-7099",
        address: "9422 Macpherson Drive",
        course: "Science",
      },
    },
  },
  {
    insertOne: {
      document: {
        student_id: 5,
        first_name: "Tedman",
        last_name: "Frede",
        age: 22,
        email: "tfrede4@wufoo.com",
        phone_number: "941-809-0035",
        address: "1 Anzinger Way",
        course: "Science",
      },
    },
  },
]);

// & WAQ to insert data using insertMany()
db.students.insertMany([
  {
    student_id: 6,
    first_name: "Chadd",
    last_name: "Brumby",
    age: 25,
    email: "cbrumby5@myspace.com",
    phone_number: "508-568-7858",
    address: "2909 Sullivan Parkway",
    course: "Engineering",
  },
  {
    student_id: 7,
    first_name: "Martyn",
    last_name: "Cowpland",
    age: 22,
    email: "mcowpland6@npr.org",
    phone_number: "447-355-4898",
    address: "8 South Lane",
    course: "Arts",
  },
  {
    student_id: 8,
    first_name: "Salmon",
    last_name: "Corderoy",
    age: 23,
    email: "scorderoy7@delicious.com",
    phone_number: "680-287-2150",
    address: "7184 Armistice Crossing",
    course: "Medicine",
  },
  {
    student_id: 9,
    first_name: "Morty",
    last_name: "Flood",
    age: 20,
    email: "mflood8@cyberchimps.com",
    phone_number: "923-511-1209",
    address: "05 Rieder Alley",
    course: "Science",
  },
  {
    student_id: 10,
    first_name: "Trace",
    last_name: "Frandsen",
    age: 20,
    email: "tfrandsen9@sfgate.com",
    phone_number: "108-475-4427",
    address: "9 Mccormick Parkway",
    course: "Arts",
  },
  {
    student_id: 11,
    first_name: "Duffy",
    last_name: "Kenzie",
    age: 23,
    email: "dkenziea@bbc.co.uk",
    phone_number: "661-862-9041",
    address: "23342 Golf Course Street",
    course: "Engineering",
  },
  {
    student_id: 12,
    first_name: "Eduard",
    last_name: "Zini",
    age: 25,
    email: "ezinib@bluehost.com",
    phone_number: "352-222-1401",
    address: "595 Boyd Court",
    course: "Arts",
  },
  {
    student_id: 13,
    first_name: "Conrade",
    last_name: "Filippozzi",
    age: 23,
    email: "cfilippozzic@behance.net",
    phone_number: "141-725-5507",
    address: "453 Mayfield Trail",
    course: "Arts",
  },
  {
    student_id: 14,
    first_name: "Vlad",
    last_name: "Delahunty",
    age: 25,
    email: "vdelahuntyd@hc360.com",
    phone_number: "671-742-7263",
    address: "877 Forest Pass",
    course: "Science",
  },
  {
    student_id: 15,
    first_name: "Virge",
    last_name: "Moralas",
    age: 20,
    email: "vmoralase@nbcnews.com",
    phone_number: "784-792-6058",
    address: "465 Farwell Plaza",
    course: "Medicine",
  },
  {
    student_id: 16,
    first_name: "Diarmid",
    last_name: "Abramsky",
    age: 24,
    email: "dabramskyf@clickbank.net",
    phone_number: "571-210-2118",
    address: "9 Division Plaza",
    course: "Science",
  },
  {
    student_id: 17,
    first_name: "Christie",
    last_name: "Mortimer",
    age: 25,
    email: "cmortimerg@harvard.edu",
    phone_number: "467-425-3721",
    address: "0477 Manufacturers Park",
    course: "Medicine",
  },
  {
    student_id: 18,
    first_name: "Russ",
    last_name: "Herkess",
    age: 18,
    email: "rherkessh@mozilla.com",
    phone_number: "394-759-4733",
    address: "08218 Pierstorff Lane",
    course: "Engineering",
  },
  {
    student_id: 19,
    first_name: "Wake",
    last_name: "Olivetta",
    age: 22,
    email: "wolivettai@independent.co.uk",
    phone_number: "412-884-6392",
    address: "69957 Talmadge Hill",
    course: "Medicine",
  },
  {
    student_id: 20,
    first_name: "Courtney",
    last_name: "Arendt",
    age: 24,
    email: "carendtj@wired.com",
    phone_number: "889-776-8595",
    address: "76 Myrtle Way",
    course: "Arts",
  },
  {
    student_id: 21,
    first_name: "Darrick",
    last_name: "Wroughton",
    age: 19,
    email: "dwroughtonk@about.com",
    phone_number: "368-832-8246",
    address: "90398 Northridge Place",
    course: "Science",
  },
  {
    student_id: 22,
    first_name: "Giordano",
    last_name: "Pantling",
    age: 23,
    email: "gpantlingl@ucla.edu",
    phone_number: "523-554-8889",
    address: "4 Heath Avenue",
    course: "Engineering",
  },
  {
    student_id: 23,
    first_name: "Amerigo",
    last_name: "Kippie",
    age: 22,
    email: "akippiem@walmart.com",
    phone_number: "412-413-8438",
    address: "263 Quincy Court",
    course: "Engineering",
  },
  {
    student_id: 24,
    first_name: "Wilbur",
    last_name: "Dmitrichenko",
    age: 25,
    email: "wdmitrichenkon@patch.com",
    phone_number: "447-539-6597",
    address: "028 Hovde Place",
    course: "Medicine",
  },
  {
    student_id: 25,
    first_name: "Chas",
    last_name: "Harmon",
    age: 23,
    email: "charmono@apache.org",
    phone_number: "760-546-3311",
    address: "37812 Sutteridge Parkway",
    course: "Medicine",
  },
  {
    student_id: 26,
    first_name: "Tristan",
    last_name: "Rozenbaum",
    age: 25,
    email: "trozenbaump@berkeley.edu",
    phone_number: "806-158-1681",
    address: "1815 Forest Run Road",
    course: "Science",
  },
  {
    student_id: 27,
    first_name: "Kippy",
    last_name: "Soames",
    age: 25,
    email: "ksoamesq@google.com",
    phone_number: "902-687-9936",
    address: "742 Messerschmidt Terrace",
    course: "Engineering",
  },
  {
    student_id: 28,
    first_name: "Evelin",
    last_name: "Portugal",
    age: 18,
    email: "eportugalr@soundcloud.com",
    phone_number: "976-500-8946",
    address: "8386 Eliot Hill",
    course: "Science",
  },
  {
    student_id: 29,
    first_name: "Milt",
    last_name: "Tear",
    age: 23,
    email: "mtears@businessinsider.com",
    phone_number: "103-305-9230",
    address: "24066 Clemons Terrace",
    course: "Medicine",
  },
  {
    student_id: 30,
    first_name: "Dav",
    last_name: "Symons",
    age: 24,
    email: "dsymonst@nasa.gov",
    phone_number: "606-333-1432",
    address: "540 Cascade Way",
    course: "Arts",
  },
]);

// & WAQT update Kingston age to 25.
db.students.bulkWrite([
  {
    updateOne: {
      filter: { first_name: "Kingston" },
      update: { $set: { age: 25 } },
    },
  },
]);

// & WAQ to update the Medicine students data with NeetPrepTimings.
db.students.bulkWrite([
  {
    updateMany: {
      filter: { course: "Medicine" },
      update: { $set: { NeetPrepTimings: "3PM to 7PM" } },
    },
  },
]);

// & WAQT replace the details of
// {
//     student_id: 25,
//     first_name: "Chas",
//     last_name: "Harmon",
//     age: 23,
//     email: "charmono@apache.org",
//     phone_number: "760-546-3311",
//     address: "37812 Sutteridge Parkway",
//     course: "Medicine",
//   },

// to

//   {
//     student_id: 49,
//     first_name: "Morley",
//     last_name: "Westell",
//     age: 24,
//     email: "mwestell1c@goodreads.com",
//     phone_number: "179-677-0559",
//     address: "71 Haas Parkway",
//     course: "Medicine",
//   },

db.students.bulkWrite([
  {
    replaceOne: {
      filter: { student_id: 25 },
      replacement: {
        student_id: 25,
        first_name: "Morley",
        last_name: "Westell",
        age: 24,
        email: "mwestell1c@goodreads.com",
        phone_number: "179-677-0559",
        address: "71 Haas Parkway",
        course: "Medicine",
      },
    },
  },
]);

// & WAQT delete Wake Details
db.students.bulkWrite([
  {
    deleteOne: {
      filter: { first_name: "Wake" },
    },
  },
]);

// & WAQT delete students data under age 20.
db.students.bulkWrite([
  {
    deleteMany: {
      filter: { age: { $lt: 20 } },
    },
  },
]);

// & WAQT perform
/*
1. insertOne
    a.  student_id: 48,
        first_name: "Laurence",
        last_name: "Webborn",
        age: 18,
        email: "lwebborn1b@cargocollective.com",
        phone_number: "893-687-4700",
        address: "44931 Tony Parkway",
        course: "Medicine",

    b.  student_id: 46,
        first_name: "Drew",
        last_name: "Sanger",
        age: 20,
        email: "dsanger19@godaddy.com",
        phone_number: "342-254-6869",
        address: "436 Russell Point",
        course: "Arts",

2. updateOne
    a. Trace course details to Medicine
    b. Vlad age to 23
    c. Dav age to 28

3. updateMany
    a. Medicine students Neettimings to 6PM to 9PM
    b. update Enginnering with B.Tech

4. replaceOne
    a. Milt document with 
                student_id: 44,
                first_name: "Cyrille",
                last_name: "Baden",
                age: 25,
                email: "cbaden17@microsoft.com",
                phone_number: "902-467-8619",
                address: "82019 Haas Alley",
                course: "Medicine",
    b. Duffy document with
                student_id: 42,
                first_name: "Benson",
                last_name: "Newens",
                age: 21,
                email: "bnewens15@usda.gov",
                phone_number: "411-997-9760",
                address: "7262 Sutherland Junction",
                course: "Arts",

5. deleteOne
    a. delete Amerigo 
    b. delete Wilbur

6. deleteMany
    a. delete all arts students
    b. delete science students

*/

// for reference to understand what we have to do?
/*
db.students.bulkWrite([
  { insertOne: { document: {} } },
  { insertOne: { document: {} } },
  { updateOne: { filter: {}, update: {} } },
  { updateOne: { filter: {}, update: {} } },
  { updateOne: { filter: {}, update: {} } },
  { updateMany: { filter: {}, update: {} } },
  { updateMany: { filter: {}, update: {} } },
  { replaceOne: { filter: {}, replacement: {} } },
  { replaceOne: { filter: {}, replacement: {} } },
  { deleteOne: { filter: {} } },
  { deleteOne: { filter: {} } },
  { deleteMany: { filter: {} } },
  { deleteMany: { filter: {} } },
]);
*/

db.students.bulkWrite([
  {
    insertOne: {
      document: {
        first_name: "Laurence",
        last_name: "Webborn",
        age: 18,
        email: "lwebborn1b@cargocollective.com",
        phone_number: "893-687-4700",
        address: "44931 Tony Parkway",
        course: "Medicine",
      },
    },
  },
  {
    insertOne: {
      document: {
        first_name: "Drew",
        last_name: "Sanger",
        age: 20,
        email: "dsanger19@godaddy.com",
        phone_number: "342-254-6869",
        address: "436 Russell Point",
        course: "Arts",
      },
    },
  },
  {
    updateOne: {
      filter: { first_name: "Trace" },
      update: { $set: { course: "Medicine" } },
    },
  },
  {
    updateOne: {
      filter: { first_name: "Vlad" },
      update: { $set: { age: 23 } },
    },
  },
  {
    updateOne: {
      filter: { first_name: "Dav" },
      update: { $set: { age: 28 } },
    },
  },
  {
    updateMany: {
      filter: { course: "Medicine" },
      update: { $set: { NeetPrepTimings: "6PM to 9PM" } },
    },
  },
  {
    updateMany: {
      filter: { course: "Engineering" },
      update: { $set: { course: "B.Tech" } },
    },
  },
  {
    replaceOne: {
      filter: { first_name: "Milt" },
      replacement: {
        student_id: 44,
        first_name: "Cyrille",
        last_name: "Baden",
        age: 25,
        email: "cbaden17@microsoft.com",
        phone_number: "902-467-8619",
        address: "82019 Haas Alley",
        course: "Medicine",
      },
    },
  },
  {
    replaceOne: {
      filter: { first_name: "Duffy" },
      replacement: {
        student_id: 42,
        first_name: "Benson",
        last_name: "Newens",
        age: 21,
        email: "bnewens15@usda.gov",
        phone_number: "411-997-9760",
        address: "7262 Sutherland Junction",
        course: "Arts",
      },
    },
  },
  { deleteOne: { filter: { first_name: "Amerigo" } } },
  { deleteOne: { filter: { first_name: "Wilbur" } } },
  { deleteMany: { filter: { course: "Arts" } } },
  { deleteMany: { filter: { course: "Science" } } },
]);
