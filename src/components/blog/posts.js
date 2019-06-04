import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions/postActions';
import '../../scss/src/components/posts.scss';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const {posts} = this.props;

    return (
      <>
        <h1 style={{fontSize: '28px'}}>Posts</h1>
        <div className="all_posts">
          {posts.map(post =>
            <div className={'post_item'} key={post.id}>
              <img className={'post_image'} src={`https://picsum.photos/id/${post.id + 129}/400`} alt="random_photo"/>
              <div className={'post_details'}>
                <div className={'post_title'}>{post.title}</div>
                <div className={'post_date'}>June 06, 2019</div>
                <div className={'post_body'}>{post.body}</div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, {fetchPosts})(Posts);
