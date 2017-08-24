var request = require('request-promise');
const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const bodyParser = require("body-parser");
const Article = require("./src/models/Articles");
const port = process.env.PORT || 3001;


const app = express();
const router = express.Router();



/////////////////////////////////////////////
// ALLOW CORS TO localhost:3000 dev server
/////////////////////////////////////////////
const allowCrossDomain = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Cache-Control", "no-cache");
    next();
}
/////////////////////////////////////////////
// APP CONFIGURATION
/////////////////////////////////////////////
app.use(allowCrossDomain);

//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Set up default mongo connection
var mongoDB = 'mongodb://127.0.0.1:27017/cms';
mongoose.connect(mongoDB, (err, db) => {
  if (err) throw err
});

//Use our router configuration when we call /api
app.use("/api", router);

// Article API actions.
router.route("/articles").get((err, res) => {
   Article.find((err, articles) => {
   if (err)
   res.send(err);
   res.json(articles)
   });
})

router.route("/articles").post((req, res) => {
  var article = new Article();
  console.log(article)
  article.author = req.body.author;
  article.title = req.body.title;
  article.body = req.body.text;

  article.save(err => {
    if (err)
    res.send(err);
    res.json({message: "Article added successfully"});
  })
})

router.route("/articles/:article_id").get((req, res) => {
   Article.findById(req.params.article_id, (err, article) => {
     if (err)
     res.send(err);
     res.json(article);
   });
})

router.route("/articles/:article_id").put((req, res) => {
   Article.findById(req.params.article_id, (err, article) => {
     if (err)
     res.send(err);
     (req.body.author) ? article.author = req.body.author : null;
     (req.body.title) ? article.title = req.body.title : null;
     (req.body.text) ? article.text = req.body.text : null;
     article.save(err => {
       if (err)
       res.send(err);
       res.json({ message: "Comment has been updated" });
     })
   });
})

app.get("/", (req, res) => {
  res.send('start page')
});

// Starting server.
app.listen(port);
console.log("Server started");
