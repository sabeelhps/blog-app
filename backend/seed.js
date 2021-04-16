const mongoose = require('mongoose');
const Blog = require('./models/blog');


const blogs = [
    {
        title: "Max",
        body:"Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box."
    },
    {
        title: "Max",
        body:"Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box."
    },
    {
        title: "Max",
        body:"Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box."
    },
    {
        title: "Max",
        body:"Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box."
    },
    {
        title: "Max",
        body:"Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box."
    },
    {
        title: "Max",
        body:"Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box."
    },

]


async function seedDB() {
    await Blog.insertMany(blogs);
    console.log("DB SEEDED");
}

module.exports = seedDB;