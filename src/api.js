import axios from 'axios';

const articlesApi =axios.create({
  baseURL: 'https://nc-project-backend-express-app.onrender.com/api'
})



export const fetchSingleArticle = (article_id) => {
	return articlesApi.get(`/articles/${article_id}`).then((res) => {
		return res.data;
	});
};



export const fetchArticles = () => {
  return articlesApi.get('/articles').then((res) => {
    return res.data;
  });
};
