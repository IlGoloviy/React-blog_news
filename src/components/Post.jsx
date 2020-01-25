import React from 'react';

const Post = props => {
  const { post } = props;

  return (
    <div className="post-card">
      <a href={post.url} target="_blank" className="post-card-link">
        <h3 className="post-card-desc">
          {post.title}
        </h3>
      </a>
      <p className="post-card-text">
        {post.description}
      </p>
    </div>
  );      
}

export default Post;