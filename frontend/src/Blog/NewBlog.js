import React, { Component } from 'react';
import axios from 'axios';

class NewBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body:''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = async (e) => {
        e.preventDefault();
        const post = await axios.post('/blogs',this.state);
        console.log(post);
        console.log("Form Submitted");
        this.props.history.push('/blogs');
    }



    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text"
                    placeholder="Blog Title"
                    name="title"
                    onChange={this.changeHandler}
                />
                <br />
                <br />
                <br/>
                <textarea cols="30" rows="5"
                    name="body"
                    onChange={this.changeHandler}
                />
                <br />
                <br />
                <br/>
                <button>Save</button>
            </form>
        );
    }
}

export default NewBlog;
