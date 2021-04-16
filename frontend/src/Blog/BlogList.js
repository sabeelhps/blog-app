import React, { Component } from 'react';
import Blog from './Blog';
import axios from 'axios';


class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs:[]
        }
    }

    async componentDidMount() {
        const fetchedBlogs = await axios.get('/blogs');
        this.setState({ blogs: fetchedBlogs.data });
    }

    render() {
        
        let allBlogs;

        if (!this.state.blogs.length) {
            allBlogs=<p>Loading.....</p>
        } else {
            allBlogs = this.state.blogs.map((b) => {
                return <Blog id={b._id} key={b._id} title={b.title} body={b.body} />
            })
        }

    
        return (
            <div>
                <h1>Blog App</h1>
                {allBlogs}
            </div>
        );
    }
}

export default BlogList;
