// & WATD details of 2nd highest salary b/w the range of 1500 to 4000.
db.emp.find(
  { sal: { $lte: 4000 }, sal: { $gte: 1500 } },
  {},
  { skip: 1, limit: 1 }
);

// ! ======================== Array Update Operators ====================
// ! ====== dataset ======
db.trainers.insertMany([
  {
    trainerName: "Rajesh Kumar",
    expertise: ["JavaScript", "React", "Node.js"],
    students: [
      { name: "Amit", age: 22, progress: "Intermediate" },
      { name: "Neha", age: 23, progress: "Beginner" },
    ],
    feedbackScores: [4, 5, 3],
    active: true,
  },
  {
    trainerName: "Priya Singh",
    expertise: ["Python", "Machine Learning", "Data Analysis"],
    students: [
      { name: "Sita", age: 25, progress: "Advanced" },
      { name: "Vikram", age: 24, progress: "Intermediate" },
    ],
    feedbackScores: [5, 4, 4, 5],
    active: true,
  },
  {
    trainerName: "Amit Patel",
    expertise: ["SEO", "Digital Marketing", "Content Strategy"],
    students: [
      { name: "Rohan", age: 28, progress: "Beginner" },
      { name: "Sneha", age: 27, progress: "Intermediate" },
    ],
    feedbackScores: [3, 4, 3],
    active: false,
  },
  {
    trainerName: "Anjali Verma",
    expertise: ["Graphic Design", "Photoshop", "Illustrator"],
    students: [
      { name: "Anuj", age: 23, progress: "Intermediate" },
      { name: "Meena", age: 22, progress: "Beginner" },
    ],
    feedbackScores: [5, 5, 4],
    active: true,
  },
]);

/*
! Arrray Update Operators are:
>>> $push:
    It will add a new element in an array at last index position.
    It will not check the element is already existing or not. It will just add the data. 
    Syntax: { $push: {  field1:value1, field2:value2, .... }}

>>> $addToSet:
    It will add a new element in an array at last index position.
    It will check the element is already existing or not. 
    If exists, It will not add
    If not exists, It will add
    Syntax: { $addToSet: {  field1:value1, field2:value2, .... }}
    It is little similar to $push.

>>> $pop:
    It will remove the element at first / last index.
    for the feild we  have to specify -1 for first index and 1 for last index deletions.
    Syntax: {$pop : {feild: <-1 | 1>, feild: <-1 | 1> , ... } }
    [single element --> first / last]

>>> $pull:
    It will remove all the element which matches condition.
    It will iterate through an array.
    Whenever the conditions satisfies it will remove it.
    Syntax: { $pull : { field1: <value1 | condition1> , field2: <value2 | condition2> , .... } }

>>> $pullAll:
    It will remove all the element which matches in the array of values.
    It will iterate through an array.
    Whenever the conditions satisfies it will remove it.
    Syntax: { $pullAll : { field1: [v1 , v2 , v3] , field2: [v1 , v2 , v3] , .... } }
*/

// ! === $push ===
// & WAQ to add a Express.Js to Rajesh's expertise array.
db.trainers.updateOne(
  { trainerName: "Rajesh Kumar" },
  { $push: { expertise: "Express.Js" } }
);

// & WAQ to add a new student to Priya's students array.
db.trainers.updateOne(
  { trainerName: "Priya Singh" },
  { $push: { students: { name: "Sita", age: 25, progress: "Advanced" } } }
);

// & WAQ to add a new student to Priya's students array.
db.trainers.updateOne(
  { trainerName: "Priya Singh" },
  { $push: { students: { name: "Varun", age: 24, progress: "Intermediate" } } }
);

// & WAQ to add a new feedback score to Anjali's feedbackScores array.
db.trainers.updateOne(
  { trainerName: "Anjali Verma" },
  { $push: { feedbackScores: 5 } }
);

// & WAQ to add a new area of expertise to Amit's expertise array.
db.trainers.updateOne(
  { trainerName: "Amit Patel" },
  { $push: { expertise: "Blogger" } }
);

// & WAQ to a new student to Anjali’s students array and expertise as Adobe and feedbackscores as 4.
db.trainers.updateOne(
  { trainerName: "Anjali Verma" },
  {
    $push: {
      students: { sname: "Bobby", age: 25, progress: "Beginner" },
      expertise: "Adobe",
      feedbackScores: 4,
    },
  }
);

// ! === $addToSet ===
// & WAQ to add "Vue.js" to Rajesh's expertise only if it doesn't exist.
db.trainers.updateOne(
  { trainerName: "Rajesh Kumar" },
  { $addToSet: { expertise: "Vue.js" } }
);

// & WAQ to add "Vue.js" to Rajesh's expertise only if it doesn't exist.
db.trainers.updateOne(
  { trainerName: "Rajesh Kumar" },
  { $addToSet: { expertise: "Vue.js" } }
);

// & WAQ to add "Machine Learning" to Priya's expertise only if it's not already there.
db.trainers.updateOne(
  { trainerName: "Priya Singh" },
  { $addToSet: { expertise: "Machine Learning" } }
);

// & WAQ to add a feedback score of 3 to Amit's feedbackScores only if it’s not already present.
db.trainers.updateOne(
  {
    // query
    trainerName: "Amit Patel",
  },
  {
    // addToSet
    $addToSet: {
      feedbackScores: 3,
    },
  }
);

// & WAQ to add a new student named "Rahul" to Anjali’s students array if no student with that name exists.
db.trainers.updateOne(
  { trainerName: "Anjali Verma" },
  {
    $addToSet: { students: { name: "Rahul", age: 23, progress: "Proficient" } },
  }
);

// & WAQ to add "Data Engineering" to Priya's expertise only if it’s unique.
db.trainers.updateOne(
  { trainerName: "Priya Singh" },
  { $addToSet: { expertise: "Data Engineering" } }
);

// ! === $pop ===
// & WAQ to remove the last topic from Rajesh's expertise array.
db.trainers.updateOne(
  { trainerName: "Rajesh Kumar" },
  { $pop: { expertise: 1 } }
);

// & WAQ to remove the first student from Priya's students array.
db.trainers.updateOne(
  { trainerName: "Priya Singh" },
  { $pop: { students: -1 } }
);

// & WAQ to remove the last feedback score from Anjali's feedbackScores array.
db.trainers.updateOne(
  { trainerName: "Anjali Verma" },
  { $pop: { feedbackScores: 1 } }
);

// & WAQ to remove the first feedback score from Amit’s feedbackScores array.
db.trainers.updateOne(
  { trainerName: "Amit Patel" },
  { $pop: { feedbackScores: -1 } }
);

// & WAQ to remove the last area of expertise in Priya's expertise array.
db.trainers.updateOne(
  { trainerName: "Priya Singh" },
  { $pop: { expertise: 1 } }
);

// ! === $pull ===
// & WAQ to remove "React" from Rajesh's expertise.
db.trainers.updateOne(
  { trainerName: "Rajesh Kumar" },
  { $pull: { expertise: "React" } }
);

// & WAQ to remove all feedback scores below 4 from Priya's feedbackScores array.
db.trainers.updateOne(
  { trainerName: "Priya Singh" },
  { $pull: { feedbackScores: { $lt: 4 } } }
);

// & WAQ to remove any student with "Beginner" progress level from Amit's students.
db.trainers.updateOne(
  { trainerName: "Amit Patel" },
  {
    $pull: {
      students: { progress: "Beginner" },
    },
  }
);

// & WAQ to remove "Illustrator" from Anjali's expertise.

// & WAQ to remove students with the name "Sneha" from Amit’s students array.
db.trainers.updateOne(
  { trainerName: "Amit Patel" },
  {
    $pull: {
      students: { name: "Sneha" },
    },
  }
);

// ! === $set ===
// & WAQ to update the second student’s progress level in Rajesh’s students array to "Advanced".
db.trainers.updateOne(
  { trainerName: "Rajesh Kumar" },
  {
    $set: {
      "students.1.progress": "Advanced",
    },
  }
);

// & WAQ to update the first feedback score in Priya's feedbackScores array to 3.
db.trainers.updateOne(
  {
    trainerName: "Priya Singh",
  },
  {
    $set: {
      "feedbackScores.0": 3,
    },
  }
);

// & WAQ to update the name of the first student in Anjali’s students array to "Raj".

// & WAQ to update the second expertise item in Amit’s expertise array to "Email Marketing".

// & WAQ to update the third student's age in Priya’s students array to 26.

// ! === $pull ===
// & Remove "JavaScript" from Rajesh's expertise array.
db.trainers.updateOne(
  {
    trainerName: "Rajesh Kumar",
  },
  {
    $pullAll: {
      expertise: "JavaScript",
    },
  }
);
// & Remove all students with "Intermediate" progress from Rajesh’s students array.
// & Remove all students aged 24 or below from Priya's students array.
// & Remove all feedback scores less than 4 from Anjali’s feedbackScores array.
db.trainers.updateOne(
  {
    trainerName: "Anjali Verma",
  },
  {
    $pull: {
      feedbackScores: { $lt: 4 },
    },
  }
);

// & Remove any students named "Kiran" from Amit’s students array.
// & Remove all expertise entries labeled "SQL" from Priya's expertise array.

// ! === $pullAll ===
// & Remove "JavaScript" and "React" from Rajesh's expertise array.
db.trainers.updateOne(
  {
    trainerName: "Rajesh Kumar",
  },
  {
    $pullAll: {
      expertise: ["JavaScript", "React"],
    },
  }
);

// & Remove all occurrences of feedback scores 4 and 5 from Priya's feedbackScores array.
db.trainers.updateOne(
  {
    trainerName: "Priya Singh",
  },
  {
    $pullAll: {
      feedbackScores: [4, 5],
    },
  }
);

// & Remove "SEO" and "Content Strategy" from Amit's expertise array.
// & Remove feedback scores of 5 and 4 from Anjali's feedbackScores array.
// & Remove all occurrences of 3 and 4 from Amit's feedbackScores array.
