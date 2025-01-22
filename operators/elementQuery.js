// ! ======== Element Query Operators ===========
/*
These Operators are used to check the fields are existing or not and type of fields.

>>> $exists: 
    It will check whether the filed exists or not.
    Syntax: { field: { $exists: <boolean> } }

>>> $type:
    It will sort list the documents based on filedname and its data types.
    Syntax: { field : { $type : <type> } }
*/

// & WAQ to remove students from Amit
db.trainers.updateOne(
  { trainerName: "Amit Patel" },
  { $unset: { students: true } }
);

// & WAQ to remove feedbackscores from anjali
db.trainers.updateOne(
  { trainerName: "Anjali Verma" },
  { $unset: { feedbackScores: true } }
);

// & WAQ to remove active from priya
db.trainers.updateOne(
  { trainerName: "Priya Singh" },
  { $unset: { active: true } }
);

// & WAQ to remove expertise from rajesh
db.trainers.updateOne(
  { trainerName: "Rajesh Kumar" },
  { $unset: { expertise: true } }
);

// ! ==== $exists  =====
// & WAQ to find the documents which contains students details.
db.trainers.find({ students: { $exists: true } });

// & WAQ to find the documents who are not having students.
db.trainers.find({ students: { $exists: false } });

// & WAQ to find how many trainers updated their active status.
db.trainers.find({ active: { $exists: true } });

// & WAQ to find how many trainers does not updated their active status.
db.trainers.find({ active: { $exists: false } });

// & WAQ to find the name of a trainers who not maintains feedbackscores.
db.trainers.find({ feedbackScores: { $exists: false } });
db.trainers.find(
  { feedbackScores: { $exists: false } },
  { trainerName: 1, _id: 0 }
);

// & WAQ to find the name of a trainers who maintains feedbackscores.
db.trainers.find({ feedbackScores: { $exists: true } });
db.trainers.find(
  { feedbackScores: { $exists: true } },
  { trainerName: 1, _id: 0 }
);

// ! ===== $type =====
// & WAQ to sort list the documents which maintain active status in boolean format.
db.trainers.find({ active: { $type: "bool" } });

// WAQ to update the active status of Amit into YES
db.trainers.updateOne(
  { trainerName: "Amit Patel" },
  { $set: { active: "YES" } }
);

// & WAQ to sort list the documents which maintains active status in boolean format.
db.trainers.find({ active: { $type: "bool" } });
db.trainers.find({ active: { $type: 8 } });

// & WAQ to sort list the documents which maintains active status in String format.
db.trainers.find({ active: { $type: "string" } });
db.trainers.find({ active: { $type: 2 } });

// & WAQ to sort list the documents which maintains active status in Object format.
db.trainers.find({ active: { $type: "object" } });

// WAQ to update the active status of anjali as { status : true , duration: 500000 }
db.trainers.updateOne(
  { trainerName: "Anjali Verma" },
  {
    $set: {
      active: { status: true, duration: 500000 },
    },
  }
);

// & WAQ to sort list the documents which maintains active status in Object format.
db.trainers.find({ active: { $type: "object" } });

/*
SCHEMA:
UserName         :    [ input ]
UserEmail        :    [ input ]
UserMobile       :    [ input ]
UserPassword     :    [ input ]
*/
