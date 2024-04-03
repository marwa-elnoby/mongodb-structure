
const { ObjectID } = require('bson')
const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbName = 'Proj-10-Mongo'

///////////////////////////////////////////////

mongoClient.connect(connectionUrl, (error, res1) => {
    if (error) {
        return console.log('error has occured')
    }
    console.log('All Perfect')

    const db = res1.db(dbName)

    ///////////////////////////////////////////

    db.collection('users').insertOne(
        {
            name: "Ahmed",
            age: 23
        }
        , (error, data) => {
            if (error) {
                console.log('Unable to insert Data')
            }
            console.log(data.insertedId)
    })

    ////////////////////////////////////////
    db.collection('users').insertOne(
        {
            name: "Mohamed",
            age: 28
        }
        , (error, data) => {
            if (error) {
                console.log('Unable to insert Data')
            }
            console.log(data.insertedId)
    })
    /////////////////////////////////////////////
    db.collection('users').insertMany([
        {
            name: " Ali ",
            age: 27
        },
        {
            name: " Ahmed ",
            age: 27
        },
        {
            name: " Mohamed ",
            age: 27
        },
        {
            name: " Marwa ",
            age: 27
        },
        {
            name: " Mahmoud ",
            age: 27
        },
        {
            name: " youns ",
            age: 21
        },
        {
            name: " sama ",
            age: 21
        },
        {
            name: " sayed ",
            age: 21
        },
        {
            name : " salma ",
            age : 15
        },
        {
            name : "Heba",
            age : 33
        }
    ], (error , data) =>{
        if(error){
            console.log('Unabled to insert Data')
        }
        console.log(data.insertedCount)
    })
    /////////////////////////////////////////
    db.collection('users').find({age:27}).toArray((error , users) =>{
        if(error){
            return console.log('Error has occured')
        }
        console.log(users);
    })
    ///////////////////////////////////////////
    db.collection('users').find({age:27}).limit(3).toArray((error , users) =>{
        if(error){
            return console.log('Error has occured')
        }
        console.log(users);
    })
    ///////////////////////////////////////////
    db.collection('users').updateOne({_id:ObjectID('660cf6a3f66759a0efd2f582')} , {
        $set : {name : "Rose"},
        $inc : {age : 4}
    })
    .then((data1) =>{
        console.log(data1.modifiedCount)
    })
    .catch((error) => {
        console.log(error)
    })
    ////////////////////////////////////////
    db.collection('users').updateOne({_id:ObjectID('660cf6a3f66759a0efd2f586')} , {
        $set : {name : "Lana"},
        $inc : {age : 4}
    })
    .then((data1) =>{
        console.log(data1.modifiedCount)
    })
    .catch((error) => {
        console.log(error)
    })
    ////////////////////////////////////////////
    db.collection('users').updateOne({_id:ObjectID('660cf6a3f66759a0efd2f585')} , {
        $set : {name : "Jak"},
        $inc : {age : 4}
    })
    .then((data1) =>{
        console.log(data1.modifiedCount)
    })
    .catch((error) => {
        console.log(error)
    })
    //////////////////////////////////////////////
    db.collection('users').updateOne({_id:ObjectID('660cf6a3f66759a0efd2f584')} , {
        $set : {name : "Jone"},
        $inc : {age : 4}
    })
    .then((data1) =>{
        console.log(data1.modifiedCount)
    })
    .catch((error) => {
        console.log(error)
    })
    ////////////////////////////////////////////
    //updateMany
    db.collection('users').updateMany({} , {
        $inc : {age : 10}
    })
    .then((data1) =>{
        console.log(data1.matchedCount)
    })
    .catch((error) => {
        console.log(error)
    })
    //////////////////////////////////////////
    db.collection('users').deleteMany({})
    .then((data1) => {
        console.log(data1.deletedCount)
    })
    .catch((error) => {
        console.log(error)
    })
})