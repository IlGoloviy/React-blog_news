import React from 'react';
import { Link } from 'react-router-dom';

import NewsList from '../components/NewsList';

const NewsPage = props => {
  return (
    <>
    <h1 className="desc">
      News
        <button className="btn-add_post">
          <Link to="/modal" className="link-add_post">  
            add news
          </Link>
        </button>
    </h1>
    { 
      (!props.children) 
      ?
      <NewsList></NewsList>
      :
      props.children
    }
    </>
  );
}

export default NewsPage;