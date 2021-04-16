import React, { Component } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';


class Blog extends Component {

    
    render() {
        return (
            <div className="Blog">
                <Card style={{ width: '95%' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1618218007550-dc5c2459881c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.body}
                    </Card.Text>
                        <Link to={`/blogs/${this.props.id}`}>
                            <Button variant="primary">Show </Button>
                        </Link>
                    
                </Card.Body>
                </Card>
               
            </div>
        );
    }
}

export default Blog;
