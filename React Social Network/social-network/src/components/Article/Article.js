import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
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
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <NavLink to={`/articles/${this.article.id}`} >{this.article.title}</NavLink>
                        </h5>
                        <p class="card-text">{this.article.content}</p>
                        <div class="blockquote-footer">
                            Posted {this.article.date} by
                                <Link><cite title="Username"> {this.article.username}</cite></Link>
                        </div>
                    </div>
                </div>
                <div id="backLink">
                    <NavLink to={`/articles`} class="btn btn-primary">Back</NavLink>
                </div>
            </div>
        )
        
    } 
}

export default Article;