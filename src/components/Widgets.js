import React,{useEffect,useState} from 'react'
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon  from '@material-ui/icons/FiberManualRecord'
import { API_KEY } from '../firebase'


const api_url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`


function Widgets() {    
    const [news, setNews] = useState([])

    useEffect(()=> {
        setNews([])
        fetch(api_url)
        .then((response) => response.json())
        .then((json) =>json.articles.slice(0,5))
        .then(articles => {
            articles.forEach(article => {
                setNews(state =>[...state, {title: article.title, author:article.author, url:article.url}])
                
            });

        })
    },[])


    const newsArticle = (article) => {
        return(
        <div key={article.title} className="widgetsArticle">
            <div className="widgetsLeftArticle">
                <FiberManualRecordIcon/>
            </div>

            <div className="widgetsRightArticle">
                <a href={article.url}><h4>{article.title}</h4></a>
                <p>{article.author}</p>
            </div>
        </div>
        )}



  return (
    <div className='widgets'>
        <div className="widgetsHeader">
            <h2>LinkedIn News </h2>
            <InfoIcon/>
        </div>
        {news.map(newsArticle)}
    </div>
  )
}



export default Widgets