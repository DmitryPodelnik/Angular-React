import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {NavLink} from 'react-router-dom'


class Article extends React.Component{

    constructor(props)   {
        super(props);

        //this.article = props.article;
        this.article = props.location.state.article; 

        this.state = {

            
        };
    }


    render() {

        return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">
                        <NavLink to={`/articles/${this.article.id}`} >{this.article.title}</NavLink>
                    </h5>
                    <p class="card-text">{this.article.content}</p>
                    <p class="card-text"><small class="text-muted">Posted {this.article.date} by {this.article.username}</small></p>
                </div>
            </div>
        )
        
    } 
}

export default Article;