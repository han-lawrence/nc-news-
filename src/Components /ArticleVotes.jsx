import { useState, useEffect } from 'react';
import * as api from '../api.js';


export default function ArticleRating ({ articleId, articleVotes }){
  const [votes, setVotes] = useState(articleVotes);
  const [incVotes, setIncVotes] = useState(0);
  const [voteIncrease, setVoteIncrease] = useState(false);
  const [voteDecrease, setVoteDecrease] = useState(false);

  useEffect(() => {
    
    if (incVotes !== 0) {
      api.incrementArticleVotes(articleId, incVotes)
        .then()
        .catch((err) => {
          console.error('vote failed, please try again later.');
          
          setVotes(articleVotes);
        });
    }
  }, [incVotes, articleVotes, articleId]);

const incrementVote = () => {
	setVotes((votes) => votes + 1);
	setIncVotes(1);
	setVoteIncrease(true);
	setVoteDecrease(false);
};

const decrementVote = () => {
	setVotes((votes) => votes - 1);
	setIncVotes(-1);
	setVoteDecrease(true);
	setVoteIncrease(false);
};


  return (
		<>
			<h2>Article Votes</h2>
			<div className="article-votes">
				<button
					className="vote-button"
					onClick={() => {
						decrementVote();
					}}
					disabled={voteDecrease}
				>
					-
				</button>
				<input
					type="text"
					className="vote-count"
					value={votes}
					disabled={true}
				/>
				<button
					className="vote-button"
					onClick={() => {
						incrementVote();
					}}
					disabled={voteIncrease}
				>
					+
				</button>
			</div>
		</>
	);
};
