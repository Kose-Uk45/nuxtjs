const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//get posts
router.get('/', async (req,res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray())
});
//add posts

//delete posts
url = 'mongodb://localhost:27017'
async function loadPostsCollection(){
  const client = await mongodb.MongoClient.connect
  (
    url, {
      //console.log("connected sucessfully to server"),
    useNewUrlParser: true
  });
  return client.db('postsdb').collection('posts');
}

// Use connect method to connect to the server
const assert = require('assert');
mongodb.MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const dbCollections = client.db('postsdb').collection('posts');
  dbCollections.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    
  });
});
module.exports = router;
