const express = require('express')
const {MongoClient, ObjectID} = require ('mongodb')
const bodyParser = require('body-parser')
const assert = require ('assert')

const app = express()
app.use(bodyParser.json())

const mongo_url = "mongodb://localhost:27017"
const database = "contact"
MongoClient.connect(mongo_url,(err,client) => {
    assert.equal(null, err ,"dababase error")
    const db = client.db(database)

    app.post('/contacts', (req,res) => {
        let newContact = req.body
        db.collection('friends').insertOne({...newContact}, (err,data)=>{
            if (err) {
                res.send('cannot add the new contact')
            }
            else {
                res.send('contact added')
            }
        })
    })

    app.get('/contacts', (req,res) => {
        db.collection('friends').find().toArray((err, data) => {
            res.send(data)
        })
    })

    app.get('/contact/:id', (req, res)=>{
        const id= ObjectID(req.params.id)
        db.collection('friends').findOne({_id:id},(err, data)=>{
            if (err) {
                res.send('contact not found')
            }
            else {
                res.send(data)
            }
        })
    })

    app.delete('/contacts/:id', (req, res)=>{
        const id = ObjectID(req.params.id)
        db.collection('friends').findOneAndDelete({ _id: id }, (err, data) => {
            if (err) {
                res.send('contact not found')
            }
            else {
                res.send('contact removed')
            }
        })
    })

    app.put('/contact/:id', (req, res) =>{
        const id = ObjectID(req.params.id)
        const updatedInformation = req.body
        db.collection('friends').findOneAndUpdate({ _id: id }, {$set:{...updatedInformation}}, (err, data) => {
            if (err) {
                res.send('contact not found')
            }
            else {
                res.send('contact modified')
            }
         })
    })
})

app.listen(3001, (err)=>{
    if (err) {
        console.log('Server not running');
    }
    else {
        console.log('Server running');
    }
})


