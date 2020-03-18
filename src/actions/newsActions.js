import axios from 'axios';

const url = 'https://newsapi.org/v2/top-headlines?' +
            'sources=bbc-news&' +
            'apiKey=75944116f4df46cfbb73bb529f4835b3';

export function fetchNews() {
  return function(dispath) {
    dispath({type: 'FETCH_NEWS'});

    axios.get(url)
      .then(response => {
        dispath({
          type: 'FETCH_NEWS_FULFILLED',
          payload: response.data
        })
      })
      .catch(err => {
        dispath({
          type: 'FETCH_NEWS_REJECTED',
          payload: err
        })
      })
  }
}

export function addPost(data) {
  return {
    type: 'ADD_NEWS',
    payload: data
  }
}
