import { dateFormatter } from './utils';

export default function CommentCard({ comment }) {
	return (
		<li className="comment-card">
			<section className="comment-header" role="banner">
				<h3 className="author-name">{comment.author}</h3>
				<time className="comment-date" dateTime={comment.created_at}>
					{dateFormatter(comment.created_at)}
				</time>
			</section>
			<section className="comment" role="region">
				<div className="voting">{/* comment voting to go here */}</div>
				<div className="comment-body">
					<p>{comment.body}</p>
				</div>
			</section>
		</li>
	);
}
