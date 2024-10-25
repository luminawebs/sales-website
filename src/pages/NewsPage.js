import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://fakeapi.com/news')
      .then((response) => setNews(response.data))
      .catch((error) => console.error('Error fetching news:', error));
  }, []);

  return (
    <div>
      <h1>News</h1>
      <ul>
        {news.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsPage;