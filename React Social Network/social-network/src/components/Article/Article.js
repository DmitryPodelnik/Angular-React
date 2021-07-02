import React from 'react'
import {NavLink, Link} from 'react-router-dom'

import '../Article/Article.css'


class Article extends React.Component{

    constructor(props)   {
        super(props);

        this.article = props.location.state.article; 

        this.state = {

            
        };
    }


    render() {

        return (
            <div id="articleCard">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <NavLink to={`/articles/${this.article.id}`} >{this.article.title}</NavLink>
                        </h5>
                        <p className="card-text">{this.article.content}</p>
                        <div className="blockquote-footer">
                            Posted {this.article.date} by
                                <Link><cite title="Username"> {this.article.username}</cite></Link>
                        </div>
                    </div>
                </div>
                <div id="backLink">
                    <NavLink to={`/articles`} className="btn btn-primary">Back</NavLink>
                </div>
            </div>
        )
        
    } 
}

export default Article;