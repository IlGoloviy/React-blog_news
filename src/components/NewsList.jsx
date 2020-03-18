import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Post from './Post';

import { fetchNews } from '../actions/newsActions';

const NewsList = props => {
  useEffect(() => {
    if (!props.news.length) {
      props.dispatch(fetchNews());
    }
  }, []);

  console.log(props.news.length);
  if (!props.news.length) {
    return (
      <div className="blank-page">
        <div className="spiner"></div>
      </div>
    );
  } else {
    const news = props.news.map((post, index) => {
      return <Post key={index} post={post}></Post>
    });
    return (
      <div className="post-list">
        {news}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    news: state.news.news
  }
}

export default connect(mapStateToProps)(NewsList);