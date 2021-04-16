import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body:''
        }
    }

    async componentDidMount() {
        const blog = await axios.get(`/blogs/${this.props.match.params.id}`);
        this.setState({ title: blog.data.title, body: blog.data.body });
    }

    deleteBlogHandler = async() => {
        await axios.delete(`/blogs/${this.props.match.params.id}`);
        this.props.history.push('/blogs');
    }

    render() {
        return (
            <div>
                <h1>Show Blog</h1>
                <h1>{this.state.title}</h1>
                <p>{this.state.body}</p>
                <Link to={`/blogs/${this.props.match.params.id}/edit`}>Edit</Link>
                <button onClick={this.deleteBlogHandler}>Delete</button>
            </div>
        );
    }
}

export default Show;
