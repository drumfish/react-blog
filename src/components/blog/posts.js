import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPosts} from "../../actions/postActions";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const {posts} = this.props;

    return (
      <>
        <h1 style={{fontSize: '28px'}}>Posts</h1>
        {posts.map(post =>
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <img src={`https://picsum.photos/id/${post.id}/400`} alt="random_photo"/>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, {fetchPosts})(Posts);
