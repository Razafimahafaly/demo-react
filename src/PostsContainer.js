import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import axios from "axios";
import Pagination from "./components/Pagination";
import Post from "./components/Post";

export default class PostsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      posts: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => this.setState({ posts: response.data }));
  }

  render() {
    if (!this.state.posts) return <p> Loading data ...</p>;
    return (
      <div className="container">
        <Pagination datas={this.state.posts}>
          <Post />
        </Pagination>
      </div>
    );
  }
}
