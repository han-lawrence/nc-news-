import { useEffect, useState } from 'react';
import { fetchArticleComments } from '../api';
import CommentCard from './ArchiveComments';

export default function CommentsList({ articleId }) {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			const commentsData = await fetchArticleComments(articleId);
			setComments(commentsData.comments);
			setIsLoading(false);
		};
		fetchData();
	}, [articleId]);

	return (
		<ul className="comments-list">
			{comments.map((comment) => {
				return <CommentCard key={comment.comment_id} comment={comment} />;
			})}
		</ul>
	);
}
