import React, { Component } from 'react';
import ArticleList from './ArticleList'
import articles from "../sometext"
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state = {
    reverted: false
  }
  render() {
    return (
      <div className="container">
        <div className= 'jumbotron'>
          <h1 className = 'display-3'>App</h1>
          <button className='btn' onClick={this.revert}>Revert</button>
          <ArticleList articles={this.state.reverted ? articles.reverse() : articles} />
        </div>
      </div>
    );
  }

  revert = () =>
    this.setState({
      reverted: !this.state.reverted
    })
  

}

export default App;
