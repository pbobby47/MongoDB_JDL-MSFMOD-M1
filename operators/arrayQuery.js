// ! ============== Array Query Operators ============
/*
These Operatores are used to provide additional information to filter when the field type is array.

>>> $all:
    It will check does the field contains specified elements or not.
    Syntax: { fieldName : { $all : [ element1 , element2,  ... ] } }

>>> $elemMatch:
    It will check does the elements contains this data or not. 

>>> $size:
    It will check the length of an array.
    Syntax: {feild : { $size : length } }
    It will return the documents which matches to the length.
*/

// remove trainers exsiting data
db.trainers.deleteMany({});

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

// ! === $all ====
// & WAQ to find the trainers who having JavaScript and Node.js in their expertise.
db.trainers.find({ expertise: { $all: ["JavaScript", "Node.js"] } });

// & WAQ to find the trainers who having Python and Machine Learning in their expertise.
db.trainers.find({ expertise: { $all: ["Python", "Machine Learning"] } });

// & WAQ to find the tainer details of "Sita".
db.trainers.find({ students: { $all: [{ name: "Sita" }] } }); // WRONG
db.trainers.find({
  students: { $all: [{ name: "Sita", age: 25, progress: "Advanced" }] },
}); // RIGHT

// ! ==== $elemMatch ====
// & WAQ to find the tainer details of "Sita".
db.trainers.find({ students: { $elemMatch: { name: "Sita" } } });

// & WAQ to find the trainers who got 1 as feedbackscores.
db.trainers.find({ feedbackScores: { $elemMatch: { $eq: 1 } } });

// & WAQ to find the trainers who got 3 as feedbackscores.
db.trainers.find({ feedbackScores: { $elemMatch: { $eq: 3 } } });

// & WAQ to find the trainers who got 5 as feedbackscores.
db.trainers.find({ feedbackScores: { $elemMatch: { $eq: 5 } } });

// ! === $size ===
// & WAQ to find the trainers who have extactly 3 skills.
db.trainers.find({ expertise: { $size: 3 } });

// & WAQ to find the trainers who have extactly 5 skills.
db.trainers.find({ expertise: { $size: 5 } });

// & WAQ to find the trainers who are training extactly 2 students.
db.trainers.find({ students: { $size: 2 } });

// & WAQ to find the trainers who are training 50 or more students.
db.trainers.find({ students: { $size: { $gte: 50 } } }); // Failed to parse $size. Expected a number in: $size: { $gte: 50 }

// & WAQ to find the trainers who are training 50 students.
db.trainers.find({ students: { $size: 50 } });
