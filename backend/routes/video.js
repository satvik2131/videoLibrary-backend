var express = require('express');
var router = express.Router();
var {getFirestore} = require('firebase-admin/firestore');



//Lists all the videos in cloud storage and return all links
router.get('/listvideos', async (req, res, next) => {
  console.log("executed")
 try {
  const db = getFirestore();
  const snapshot = await db.collection("videos").get();
  var listOfUrls = [];

  snapshot.forEach((doc)=>{
    listOfUrls.push(doc._fieldsProto.url.stringValue);
  });

  res.send(listOfUrls);

 } catch (error) {
  console.log(error);
 }
});

module.exports = router;
