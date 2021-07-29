import React, { Component } from "react";
import axios from "axios";
import { Link, Switch } from "react-router-dom";
import Pokeball from "../pokeball.png";
import '../index.css'
class Home extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({ posts: res.data.slice(0, 10) });
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card hoverable " key={post.id}>
            <img src={Pokeball} alt="Pokeball"  />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title bold red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
