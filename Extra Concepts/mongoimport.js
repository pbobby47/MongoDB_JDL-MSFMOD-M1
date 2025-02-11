// ! ======= To import Json data ========
// It helps us to import json data into the mongodb database.
// ? Syntax:
// mongoimport -d databaseName -c collectionName --type json --file pathAddress --jsonArray --drop

mongoimport -d jspiders -c students --type json --file "C:\Users\QSP-Delhi\Desktop\MongoDB_JDL-MSFMOD-M1\Extra Concepts\mystudentsdata.json" --jsonArray --drop

// Note: we have to do it in command line interface. Not in mongoshell

// ! ======= To import CSV data ========
// It helps us to import CSV data into the mongodb database.
// ? Syntax:
// mongoimport -d databaseName -c collectionName --type csv --file pathAddress --headerline --drop

mongoimport -d jspiders -c newStudents --type csv --file "C:\Users\QSP-Delhi\Desktop\MongoDB_JDL-MSFMOD-M1\Extra Concepts\Students_DATA.csv" --headerline --drop

// Note: we have to do it in command line interface. Not in mongoshell


// ! ============== To do in GUI ==============
// In mongo compass there is an option called "AddData"
// click on add data ----> choose json / csv ----> click on the correct file ----> select ---> it will add automatically.


// ! ===== export ======
// even we can perform export also.