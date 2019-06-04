import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createPost} from '../../actions/postActions';
import '../../scss/src/components/form.scss';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);

    this.setState({
      title: '',
      body: ''
    })
  };

  render() {
    return (
      <>
        <form className={'form'} onSubmit={this.onSubmit}>
          <div className={'form-row'}>
            <label htmlFor="title">Title</label>
            <input className={'form-input'} name="title" type="text" id={'title'} value={this.state.title} onChange={this.onChange}/>
          </div>
          <div className={'form-row'}>
            <label htmlFor="body">Body</label>
            <textarea className={'form-input'} name="body" id="body" rows="5" value={this.state.body} onChange={this.onChange}/>
          </div>
          <button className={'btn'} type={'submit'}>send</button>
        </form>
      </>
    );
  }
}

export default connect(null, {createPost})(Form);

