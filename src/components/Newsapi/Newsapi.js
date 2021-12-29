import React, { useEffect, useState } from 'react';
import News from '../News/News';
import './Newsapi.css'

const Newsapi = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=5f631db2fbf04f92ab0284681498f3d8";
        fetch(url)
        .then(res => res.json())
        .then (data => setArticles(data.articles))
    },[]);
    
    return (
        <div id='article'>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default Newsapi;
