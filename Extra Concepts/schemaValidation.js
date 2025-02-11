/*

? What is a Schema?
A schema is a JSON object that defines the structure and contents of your data. 

Schemas represent types of data rather than specific values. App Services supports many built-in schema types. These include primitives, like strings and numbers, as well as structural types, like objects and arrays, which you can combine to create schemas that represent custom object types.

You can use any of the supported schema types to configure the object's properties:

Object

Array

String

Number

Boolean

UUID

ObjectId

Binary Data

Mixed

Set

Dictionary

*/

// ! Syntax:
db.createCollection("collection_name", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["field1", "field2"],
      properties: {
        field1: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        field2: {
          bsonType: "int",
          minimum: 0,
          description:
            "must be an integer greater than or equal to 0 and is required",
        },
      },
    },
  },
});

// ! Ex:
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const dotenv = require("dotenv").config();
const todoRoutes = express.Router();
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 4000;
let db;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

MongoClient.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true },
  (err, database) => {
    if (err) {
      throw err;
      console.log(`Unable to connect to the databse: ${err}`);
    } else {
      db = database;
      console.log("Connected to the database");
    }
  }
);

/* Schema Validation Function */
const runDbSchemaValidation = function () {
  return db.runCommand({
    collMod: "todos",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["description", "responsible", "priority", "completed"],
        properties: {
          description: {
            bsonType: "string",
            description: "must be a string and is required",
          },
          responsibility: {
            bsonType: "string",
            description: "must be a string and is required",
          },
          priority: {
            bsonType: "string",
            description: "must be a string and is required",
          },
          completed: {
            bsonType: "bool",
            description: "must be a either true or false and is required",
          },
        },
      },
    },
    validationLevel: "strict",
  });
};

/* Get list of Todos */
todoRoutes.route("/").get((req, res) => {
  runDbSchemaValidation();
  db.collection("todos")
    .find({})
    .toArray((err, docs) => {
      if (err) console.log(err);
      else {
        console.log(docs);
        res.json(docs);
      }
    });
});

/* Get Single Todo */
todoRoutes.route("/:id").get((req, res) => {
  let todoID = req.params.id;
  runDbSchemaValidation();
  db.collection("todos").findOne({ _id: ObjectID(todoID) }, (err, docs) => {
    if (err) console.log(err);
    else {
      console.log(docs);
      res.json(docs);
    }
  });
});

/* Create Todo */
todoRoutes.route("/create").post((req, res, next) => {
  const userInput = req.body;
  runDbSchemaValidation();
  db.collection("todos").insertOne(
    {
      description: userInput.description,
      responsible: userInput.responsible,
      priority: userInput.priority,
      completed: false,
    },
    (err, docs) => {
      if (err) console.log(err);
      else {
        res.json(docs);
      }
    }
  );
});

/* Edit todo */
todoRoutes.route("/edit/:id").get((req, res, next) => {
  let todoID = req.params.id;
  runDbSchemaValidation();
  db.collection("todos").findOne({ _id: ObjectID(todoID) }, (err, docs) => {
    if (err) console.log(err);
    else {
      console.log(docs);
      res.json(docs);
    }
  });
});

todoRoutes.route("/edit/:id").put((req, res, next) => {
  const todoID = req.params.id;
  const userInput = req.body;
  runDbSchemaValidation();
  db.collection("todos").updateOne(
    { _id: ObjectID(todoID) },
    {
      $set: {
        description: userInput.description,
        responsible: userInput.responsible,
        priority: userInput.priority,
        completed: userInput.completed,
      },
    },
    { returnNewDocument: true },
    (err, docs) => {
      if (err) console.log(err);
      else res.json(docs);
      console.log(db.getPrimaryKey(todoID));
    }
  );
});

/* Delete todo */
todoRoutes.route("/:id").delete((req, res, next) => {
  const todoID = req.params.id;
  runDbSchemaValidation();
  db.collection("todos").deleteOne({ _id: ObjectID(todoID) }, (err, docs) => {
    if (err) console.log(err);
    else {
      res.json(docs);
    }
  });
});

app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
