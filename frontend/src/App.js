import React, { Component } from 'react';
import './App.css'
import BlogList from './Blog/BlogList';
import { Route, Link,Switch } from 'react-router-dom';
import NewBlog from './Blog/NewBlog';
import Show from './Blog/Show';
import EditBlog from './Blog/EditBlog';

class App extends Component {
  render() {
    return (
      <div className="App">

        <nav>
          <ul>
            <li><Link to="/blogs">All Blogs</Link></li>
            <li><Link to="blogs/new">New</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/blogs" component={BlogList} />
          <Route exact path="/blogs/new" component={NewBlog} />
          <Route exact path="/blogs/:id" component={Show} />
          <Route exact path="/blogs/:id/edit" component={EditBlog} />
        </Switch>
      </div>
    );
  }
}

export default App;
