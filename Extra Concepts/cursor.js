/*

A cursor in MongoDB is an object that points to the results of a query. Cursors are used to iterate through the results of a query, and can be used for asynchronous iteration, manual iteration, and more. 
? How cursors work
Cursors return the results of a query in batches, rather than all at once. 
Cursors reduce memory consumption and server requests by only holding a subset of documents in memory at a given time. 
Cursors are highly configurable and offer multiple interaction paradigms. 
? How to use cursors
You can use the Collection.find() method to return a cursor. 
You can use the toArray() method to load all documents returned by the cursor into RAM. 
? Why use cursors 
Cursors allow applications to iterate over database results while only holding a subset of them in memory at a given time.

*/
