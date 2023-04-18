import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../api.js";

export default function SingleArticle() {
  const {article_id} = useParams();
  const [singleArticle, setSingleArticle] = useState({});

useEffect(() => {
  api.fetchSingleArticle(article_id).then((data) => {
    setSingleArticle(data.article)
  })
}, []);
console.log(singleArticle)

return (
	<div>
		<h1>{singleArticle.topic}</h1>

		<h1>{singleArticle.title}</h1>
		<h2>{singleArticle.author}</h2>
		<h2>{singleArticle.body}</h2>
	</div>
  
);

}