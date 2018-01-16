# Simple-Restful-API
Simple Restful API using Nodejs, Express &amp; MongoDB

### Install Dependecies
```
$ npm install
```
This should install all the required packages from the package.json file

### MongoDB
Run mongodb as a service
```
$ sudo service mongod start
```

```
> show dbs
```
(Show existing databases)
```
> use dbName
```
(create a new database and start using it)
```
> show collections
``` 
(show all collections in your db)
```
> db.createCollection('books')
```
(create a new collection in your db)
```
> db.books.insert({name:'Percy Jackson', author:'Rick Riordan', genre:'Mythology, Fantasy, Teen'})
```
(insert a new record in your db collection)
```
> db.books.find()
```
(returns all records in collection books)
```
> db.books.find().pretty()
``` 
(pretty prints the json for easy viewing)
```
> db.books.findOneAndDelete('object id')
```
(deletes a record given the id)
```
> db.books.findOneAndReplace('object id')
```
```
> db.books.findOneAndUpdate('object id')
```

### nodejs
npm init (initialise a empty nodejs app)
create app.js, models/books.js & models/genres.js

To run a nodejs app
```
$ node app
```

Use Postman Chrome Extension to test out your API
