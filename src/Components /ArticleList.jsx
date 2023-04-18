import { useEffect, useState } from 'react';
import * as api from "../api.js"
import { fetchArticles } from '../api.js';
import { Link } from 'react-router-dom';

export default function ArticleList() {
	const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState (true)
 

useEffect(() => {
  setIsLoading(true);
  fetchArticles().then(({ articles }) => {
    setArticles(articles);
    console.log(articles)
    setIsLoading(false);
  }).catch((error) => {console.log(error)})
}, []);

return (
  <main className="articles">
    {articles.map((article) => {
      return (
				<Link to={`/articles/${article.article_id}`}>
					<section className="article-card" key={article.article_id}>
						<h2>{article.title}</h2>

						<img src={article.article_img_url} alt={`${article.title}`} />
					</section>
				</Link>
			);
    })}
  </main>
);

  }