import React from 'react'
import Article from '../Article'
import './style.css'

export default function ArticleList({articles}){
    const articleElements = articles.map((article, index) => 
        <li key = {article.id} className = 'article-list__li'><Article article = {article} defaultOpen = { index === 2 }/></li>
    )
    return (
        <ul>
            {articleElements}
        </ul>
    )
}