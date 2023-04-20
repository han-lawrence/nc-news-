import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as api from '../api.js';
import CommentsList from './ArchiveCommentsList.jsx';
import ArticleRating from './ArticleVotes.jsx';

export default function SingleArticle() {
	const [singleArticle, setSingleArticle] = useState({});
	const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false)
	
	const { article_id } = useParams();

	useEffect(() => {
		setIsLoading(true);
		api.fetchSingleArticle(article_id)
			.then((data) => {
				setSingleArticle(data.article);
			})
			.catch((err) => {
				setIsError(true)
      })
      .finally (() => {
        setIsLoading(false)
			});
	}, [article_id]);



	if (isLoading) return <p className="loading">Loading...</p>;
	
  if (isError) return <p> something went wrong, please try again later ...</p>;

	return (
		<div>
			<img
				className="article-img"
				src={singleArticle.article_img_url}
				alt={`${singleArticle.topic}`}
			/>
			<h1>{singleArticle.topic}</h1>
			<h1>{singleArticle.title}</h1>
			<h2>{singleArticle.author}</h2>
			<h2>{singleArticle.body}</h2>
			<section className="article-votes-section">
				<ArticleRating
					articleVotes={singleArticle.votes}
					articleId={singleArticle.article_id}
				/>
			</section>
			<CommentsList articleId={article_id} />
		</div>
	);
}
