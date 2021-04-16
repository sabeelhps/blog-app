import React, { Component } from 'react';
import axios from 'axios';

class EditBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            body:''
        }
    }

    async componentDidMount() {
        const blog=await axios.get(`/blogs/${this.props.match.params.id}/edit`);
        this.setState({ body: blog.data.body });
    }

    changeHandler = (e) => {
        this.setState({ body: e.target.value });
    }

    submitHandler = async (e) => {
        console.log("sdvhjfjk");
        e.preventDefault();
        await axios.patch(`/blogs/${this.props.match.params.id}`, this.state);
        this.props.history.push(`/blogs/${this.props.match.params.id}`);
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <textarea cols="40" rows="10" onChange={this.changeHandler} value={this.state.body} ></textarea>
                <br/>
                <br/>
                <br/>
                <br/>
                <button>Update!</button>
            </form>
        );
    }
}

export default EditBlog;
