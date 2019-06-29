const express = require('express');
const mongodb = require('mongodb')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())
const port = process.env.PORT||5000;

const dbUrl = 'mongodb://127.0.0.1:27017'
const{MongoClient, ObjectId} = require('mongodb')
const databaseName="Notes-Collections"

MongoClient.connect(dbUrl, {useNewUrlParser:true}, (error, client)=>{
  if(error){
    return console.log("Unable to connect")
  }
  const db = client.db(databaseName)

  db.collection('notes').insertMany([
    {
      title:"ReactJS",
      content:"Good Javascript Framework"
    },
    {
      title:"AngularJS",
      content:"Another good Javascript framework"
    },
    {
      title:"Redux",
      content:"Redux is state predictable container"
    },
    {
      title:"Typescript",
      content:"It is superset of Javascript"
    }
  ])
  
})

app.get('/api/notes', (req,res)=>{
  MongoClient.connect(dbUrl, {useNewUrlParser:true}, (error, client)=>{
    if(error){
      return console.log("Unable to connect")
    }
    const db = client.db(databaseName)
    db.collection('notes').find({}).toArray((err, result)=>{
      if(err){
        throw new Error(err)
      }
      res.json(result)
    })
  })
})

app.post('/api/notes', (req, res)=>{
  MongoClient.connect(dbUrl, {useNewUrlParser:true}, (error, client)=>{
  const {title, content} = req.body
  if(error){
    return console.log("Unable to connect")
  }
  const db = client.db(databaseName)
  db.collection('notes').insert({title, content}, (err, result)=>{
    res.json({
      note:result.ops[0]
    })
  })
})
})

app.put('/api/notes/:_id', (req, res)=>{
  MongoClient.connect(dbUrl, {useNewUrlParser:true}, (error, client)=>{
    const {title, content} = req.body
    //console.log(new mongodb.ObjectId(req.params._id))
    if(error){
      return console.log("Unable to connect")
    }
    console.log(ObjectId(req.params._id))
    const db = client.db(databaseName)
  db.collection('notes').findOneAndUpdate(
    {_id: new mongodb.ObjectId(req.params._id)},
    {
      $set:{
        title, content
      }
    },
    {returnOriginal:false},
    (err, result)=>{
      res.json({
        note:result
      })
    }
  )
})
})

app.delete('/api/notes/:_id', (req, res)=>{
  MongoClient.connect(dbUrl, {useNewUrlParser:true}, (error, client)=>{
    if(error){
      return console.log("Unable to connect")
    }
    const db = client.db(databaseName)
    db.collection('notes').deleteOne(
      {_id: new mongodb.ObjectId(req.params._id)}, (err, result)=>{
        res.json({
          
        })
      })
  })
})

app.use((req, res)=>{
  res.status(404).json({
    error:{
      globle:"Page not found"
    }
  })
})

app.listen(port, ()=>{
  console.log("Server is on", port)
})

