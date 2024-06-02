
"use client"
import React, { useEffect, useState } from 'react';

const News = () => {
  const [news, setNews] = useState([]);
  const [articleNum, setArticleNum] = useState(4);

  useEffect(() => {
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/business/us.json')
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, []);

  return (
    <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2'>
      <h4 className='font-bold text-xl px-4'>Whats happening</h4>
      {news.slice(0, articleNum).map((article,index) => (
        <div key={article.url}>
          <a href={article.url } target='_blank'>

            <div className='flex items-center justify-between px-4 py-2 space-x-1 rounded-xl hover:bg-gray-200 transition duration-200 '>
              
              <div className='space-y-0.5'>
                <h6 className='text-lg font-bold'>{article.title}</h6>
                <p className='text-sm  font-medium text-gray-500'>{article.source.name}</p>
              
              
              </div>
              <img src={article.urlToImage}  width={80}  className='rounded-xl h-16' />
              </div>
          </a>
        </div>
      ))}

      {news.length > articleNum && <button onClick={()=>setArticleNum(articleNum+3)} className='text-blue-300 pl-4 pb-3 hover:text-blue-400 text-lg '> Show more</button>}
    </div>
  );
};

export default News;
