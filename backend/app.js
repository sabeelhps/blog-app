const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const blogRoutes = require('./routes/blog');

mongoose.connect('mongodb://localhost:27017/my-blog', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Database Connected");
})
.catch((err) => {
    console.log(err);
    console.log("DB Connection Error");
});


// seedDB();

app.use(express.json());

app.use(blogRoutes);

app.listen(8000, () => {
    console.log("Server started at port 8000");
})