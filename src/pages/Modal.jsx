import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import { addPost } from '../actions/newsActions';

const Modal = props => {
  const [redirect, setRedirect] = useState(false);
  const [description, setDescription] = useState('');
  const [text, setText] = useState('');

  const inputDescription = event => {
    setDescription(event.target.value);
  }

  const inputText = event => {
    setText(event.target.value);
  }

  const createPost = () => {
    const post = {
      title: description,
      description: text
    };
    props.dispatch(addPost(post));
    setRedirect(true);
  }

  if (redirect) {
    return <Redirect to="/news" />;
  }
    
  return (
    <>
    <h1 className="desc">adding a post</h1>
    <div className="modal-add_post">
      <label>
        <span>title</span>
        <input 
          className="modal-input"  
          type="text"
          onChange={inputDescription}
        />
      </label>
      <label>
        <span>text</span>
        <textarea 
          className="modal-text" 
          cols="30" rows="5"
          onChange={inputText}
          value={text}
        />
      </label>
      <button onClick={createPost}>create</button>
    </div>
    </>
  );
}

function mapStateToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps)(Modal);
